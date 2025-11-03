import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { config } from '@/lib/config'

/**
 * Enhanced API Client with:
 * - Retry logic with exponential backoff
 * - Rate limiting
 * - Request/response interceptors
 * - Automatic token injection
 * - Error handling and logging
 * - Request timeout handling
 */

// Rate limiting configuration
interface RateLimiter {
  tokens: number
  lastRefill: number
  maxTokens: number
  refillRate: number
}

const rateLimiter: RateLimiter = {
  tokens: config.api.rateLimit,
  lastRefill: Date.now(),
  maxTokens: config.api.rateLimit,
  refillRate: config.api.rateWindow,
}

// Refill rate limiter tokens
function refillTokens(): void {
  const now = Date.now()
  const timePassed = now - rateLimiter.lastRefill

  if (timePassed > rateLimiter.refillRate) {
    rateLimiter.tokens = rateLimiter.maxTokens
    rateLimiter.lastRefill = now
  }
}

// Check if request is allowed by rate limiter
function isRateLimited(): boolean {
  refillTokens()

  if (rateLimiter.tokens > 0) {
    rateLimiter.tokens--
    return false
  }

  return true
}

// Retry configuration
interface RetryConfig {
  retries: number
  retryDelay: number
  retryCondition: (error: AxiosError) => boolean
}

const defaultRetryConfig: RetryConfig = {
  retries: 3,
  retryDelay: 1000,
  retryCondition: (error: AxiosError) => {
    // Retry on network errors or 5xx server errors
    if (!error.response) return true
    return error.response.status >= 500 && error.response.status < 600
  },
}

// Exponential backoff delay
function getRetryDelay(attempt: number, baseDelay: number): number {
  return baseDelay * Math.pow(2, attempt) + Math.random() * 1000
}

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: config.api.baseUrl,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Check rate limiting
    if (isRateLimited()) {
      throw new Error('Rate limit exceeded. Please try again later.')
    }

    // Inject auth token
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('auth-storage')
      if (authData) {
        try {
          const { state } = JSON.parse(authData)
          if (state?.token) {
            config.headers.Authorization = `Bearer ${state.token}`
          }
        } catch (error) {
          console.error('Error parsing auth data:', error)
        }
      }
    }

    // Add request timestamp for logging
    if (config.headers) {
      config.headers['X-Request-Time'] = new Date().toISOString()
    }

    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
        params: config.params,
        data: config.data,
      })
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      const duration = response.config.headers?.['X-Request-Time']
        ? Date.now() - new Date(response.config.headers['X-Request-Time'] as string).getTime()
        : 0
      console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        status: response.status,
        duration: `${duration}ms`,
        data: response.data,
      })
    }

    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: number }

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}`, {
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      })
    }

    // Handle 401 Unauthorized - redirect to login
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth-storage')
        window.location.href = '/login'
      }
      return Promise.reject(error)
    }

    // Handle retry logic
    if (originalRequest && defaultRetryConfig.retryCondition(error)) {
      const retryCount = originalRequest._retry || 0

      if (retryCount < defaultRetryConfig.retries) {
        originalRequest._retry = retryCount + 1
        const delay = getRetryDelay(retryCount, defaultRetryConfig.retryDelay)

        console.log(
          `Retrying request (${retryCount + 1}/${defaultRetryConfig.retries}) after ${delay}ms...`
        )

        await new Promise((resolve) => setTimeout(resolve, delay))
        return apiClient(originalRequest)
      }
    }

    // Handle network errors
    if (!error.response) {
      return Promise.reject({
        message: 'Network error. Please check your internet connection.',
        isNetworkError: true,
      })
    }

    // Handle timeout errors
    if (error.code === 'ECONNABORTED') {
      return Promise.reject({
        message: 'Request timeout. Please try again.',
        isTimeout: true,
      })
    }

    // Format error response
    const errorMessage = error.response?.data
      ? (error.response.data as any).message || (error.response.data as any).error
      : error.message

    return Promise.reject({
      message: errorMessage || 'An unexpected error occurred',
      status: error.response?.status,
      data: error.response?.data,
    })
  }
)

// Typed API methods
export class ApiService {
  /**
   * GET request
   */
  static async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.get(url, config)
    return response.data
  }

  /**
   * POST request
   */
  static async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.post(url, data, config)
    return response.data
  }

  /**
   * PUT request
   */
  static async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.put(url, data, config)
    return response.data
  }

  /**
   * PATCH request
   */
  static async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.patch(url, data, config)
    return response.data
  }

  /**
   * DELETE request
   */
  static async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await apiClient.delete(url, config)
    return response.data
  }

  /**
   * Upload file with progress tracking
   */
  static async uploadFile<T = any>(
    url: string,
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<T> {
    const formData = new FormData()
    formData.append('file', file)

    const response: AxiosResponse<T> = await apiClient.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(progress)
        }
      },
    })

    return response.data
  }

  /**
   * Download file
   */
  static async downloadFile(url: string, filename: string): Promise<void> {
    const response = await apiClient.get(url, {
      responseType: 'blob',
    })

    const blob = new Blob([response.data])
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    link.click()
    window.URL.revokeObjectURL(link.href)
  }

  /**
   * Health check
   */
  static async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.get('/health')
  }
}

export default apiClient

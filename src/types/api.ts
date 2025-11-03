/**
 * API-specific type definitions
 */

// Generic API Response
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Paginated Response
export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    totalPages: number
    totalItems: number
    hasNext: boolean
    hasPrevious: boolean
  }
}

// API Error
export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
  statusCode?: number
}

// Request/Response specific types
export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
  phoneNumber?: string
  countryCode: string
}

export interface CreateTransactionRequest {
  recipientId: string
  amount: number
  fromCurrency: string
  toCurrency: string
  transferMethod: 'BLOCKCHAIN' | 'BANK' | 'HYBRID'
  description?: string
}

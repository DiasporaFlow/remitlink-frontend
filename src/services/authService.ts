/**
 * Authentication Service
 * Handles all auth-related API calls
 */

import api from '@/lib/api'
import type {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  User,
  ApiResponse,
} from '@/types'

export const authService = {
  /**
   * Login user
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<ApiResponse<AuthResponse>>(
      '/auth/login',
      credentials
    )
    return response.data.data!
  },

  /**
   * Register new user
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, agreeToTerms, ...registerData } = data
    const response = await api.post<ApiResponse<AuthResponse>>(
      '/auth/register',
      registerData
    )
    return response.data.data!
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    await api.post('/auth/logout')
  },

  /**
   * Get current user profile
   */
  async getProfile(): Promise<User> {
    const response = await api.get<ApiResponse<User>>('/users/me')
    return response.data.data!
  },

  /**
   * Refresh auth token
   */
  async refreshToken(): Promise<AuthResponse> {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/refresh')
    return response.data.data!
  },
}

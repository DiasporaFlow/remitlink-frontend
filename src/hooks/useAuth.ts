'use client'

import { useState, useEffect } from 'react'
import { User, LoginCredentials, AuthResponse } from '@/types'
import api from '@/lib/api'
import { STORAGE_KEYS, API_ENDPOINTS } from '@/lib/constants'

interface UseAuthReturn {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  refreshAuth: () => void
}

/**
 * Custom hook for authentication management
 * Handles login, logout, and auth state
 */
export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status on mount
  useEffect(() => {
    checkAuth()
  }, [])

  /**
   * Check if user is authenticated by verifying token in localStorage
   */
  const checkAuth = () => {
    try {
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
      const userStr = localStorage.getItem(STORAGE_KEYS.USER)

      if (token && userStr) {
        const userData = JSON.parse(userStr)
        setUser(userData)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      // Clear invalid data
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
      localStorage.removeItem(STORAGE_KEYS.USER)
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Login user with credentials
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setIsLoading(true)
      const response = await api.post<AuthResponse>(API_ENDPOINTS.LOGIN, credentials)

      const { token, user: userData } = response.data

      // Store token and user data
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token)
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData))

      setUser(userData)
    } catch (error) {
      console.error('Login failed:', error)
      const errorMessage = error instanceof Error && 'response' in error
        ? (error as { response?: { data?: { message?: string } } }).response?.data?.message
        : 'Login failed'
      throw new Error(errorMessage || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Logout user and clear auth data
   */
  const logout = () => {
    try {
      // Call logout endpoint (optional, for server-side cleanup)
      api.post(API_ENDPOINTS.LOGOUT).catch(err => {
        console.error('Logout API call failed:', err)
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear local storage
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
      localStorage.removeItem(STORAGE_KEYS.USER)
      setUser(null)

      // Redirect to login
      if (typeof window !== 'undefined') {
        window.location.href = '/login'
      }
    }
  }

  /**
   * Refresh auth state from localStorage
   * Useful after external updates
   */
  const refreshAuth = () => {
    checkAuth()
  }

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    refreshAuth,
  }
}

export default useAuth

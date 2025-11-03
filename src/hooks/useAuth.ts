'use client'

import { useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { authService } from '@/services/authService'
import type { LoginCredentials, RegisterData } from '@/types'
import { toast } from 'sonner'

interface UseAuthReturn {
  user: ReturnType<typeof useAuthStore>['user']
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => Promise<void>
}

/**
 * Custom hook for authentication management
 */
export function useAuth(): UseAuthReturn {
  const { user, isAuthenticated, setAuth, logout: storeLogout } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true)
      const response = await authService.login(credentials)
      setAuth(response.user, response.token)
      toast.success('Login successful!')
    } catch (error) {
      console.error('Login failed:', error)
      toast.error('Login failed. Please check your credentials.')
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: RegisterData) => {
    try {
      setIsLoading(true)
      const response = await authService.register(data)
      setAuth(response.user, response.token)
      toast.success('Registration successful! Welcome to RemitLink!')
    } catch (error) {
      console.error('Registration failed:', error)
      toast.error('Registration failed. Please try again.')
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
      storeLogout()
      toast.success('Logged out successfully')
    } catch (error) {
      console.error('Logout error:', error)
      storeLogout() // Clear local state even if API call fails
    }
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  }
}

export default useAuth

/**
 * Simple client-side auth state management
 * This is a basic implementation that can be extended with state management libraries like Zustand or Redux
 */

import { User } from '@/types'
import { STORAGE_KEYS } from '@/lib/constants'

class AuthStore {
  private static instance: AuthStore
  private user: User | null = null
  private token: string | null = null
  private listeners: Set<() => void> = new Set()

  private constructor() {
    // Initialize from localStorage if running in browser
    if (typeof window !== 'undefined') {
      this.loadFromStorage()
    }
  }

  /**
   * Get singleton instance
   */
  public static getInstance(): AuthStore {
    if (!AuthStore.instance) {
      AuthStore.instance = new AuthStore()
    }
    return AuthStore.instance
  }

  /**
   * Load auth data from localStorage
   */
  private loadFromStorage(): void {
    try {
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
      const userStr = localStorage.getItem(STORAGE_KEYS.USER)

      if (token && userStr) {
        this.token = token
        this.user = JSON.parse(userStr)
      }
    } catch (error) {
      console.error('Failed to load auth from storage:', error)
      this.clearStorage()
    }
  }

  /**
   * Save auth data to localStorage
   */
  private saveToStorage(): void {
    if (typeof window !== 'undefined') {
      if (this.token && this.user) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, this.token)
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(this.user))
      }
    }
  }

  /**
   * Clear auth data from localStorage
   */
  private clearStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
      localStorage.removeItem(STORAGE_KEYS.USER)
    }
  }

  /**
   * Notify all listeners of state changes
   */
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener())
  }

  /**
   * Set user and token
   */
  public setAuth(user: User, token: string): void {
    this.user = user
    this.token = token
    this.saveToStorage()
    this.notifyListeners()
  }

  /**
   * Clear user and token
   */
  public clearAuth(): void {
    this.user = null
    this.token = null
    this.clearStorage()
    this.notifyListeners()
  }

  /**
   * Get current user
   */
  public getUser(): User | null {
    return this.user
  }

  /**
   * Get current token
   */
  public getToken(): string | null {
    return this.token
  }

  /**
   * Check if user is authenticated
   */
  public isAuthenticated(): boolean {
    return !!(this.user && this.token)
  }

  /**
   * Update user data
   */
  public updateUser(userData: Partial<User>): void {
    if (this.user) {
      this.user = { ...this.user, ...userData }
      this.saveToStorage()
      this.notifyListeners()
    }
  }

  /**
   * Subscribe to auth state changes
   * @returns Unsubscribe function
   */
  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  /**
   * Refresh auth state from storage
   * Useful when storage is modified externally
   */
  public refresh(): void {
    this.loadFromStorage()
    this.notifyListeners()
  }
}

// Export singleton instance
export const authStore = AuthStore.getInstance()

// Export utility functions for easier access
export const getUser = () => authStore.getUser()
export const getToken = () => authStore.getToken()
export const isAuthenticated = () => authStore.isAuthenticated()
export const setAuth = (user: User, token: string) => authStore.setAuth(user, token)
export const clearAuth = () => authStore.clearAuth()
export const updateUser = (userData: Partial<User>) => authStore.updateUser(userData)
export const subscribeToAuth = (listener: () => void) => authStore.subscribe(listener)

export default authStore

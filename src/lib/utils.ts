import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge className values with tailwind-merge
 * Useful for combining Tailwind classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency with proper symbol and decimal places
 * @param amount - The amount to format
 * @param currency - Currency code (USD, EUR, AZN, TRY, RUB)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    AZN: '₼',
    TRY: '₺',
    RUB: '₽',
    GBP: '£',
  }

  const symbol = symbols[currency] || currency
  const formattedAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return `${symbol}${formattedAmount}`
}

/**
 * Format date to readable string
 * @param date - Date string or Date object
 * @returns Formatted date string
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format date to short string (MM/DD/YYYY)
 * @param date - Date string or Date object
 * @returns Short date string
 */
export function formatDateShort(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * Format date and time
 * @param date - Date string or Date object
 * @returns Formatted date and time string
 */
export function formatDateTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return dateObj.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Truncate text to specified length with ellipsis
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, length: number = 50): string {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

/**
 * Sleep/delay utility
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after delay
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Validate email format
 * @param email - Email to validate
 * @returns True if valid email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Format phone number
 * @param phone - Phone number to format
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Calculate transaction fee (1.5% of amount)
 * @param amount - Transaction amount
 * @returns Fee amount
 */
export function calculateFee(amount: number): number {
  return amount * 0.015 // 1.5% fee
}

/**
 * Get user initials from name
 * @param firstName - User's first name
 * @param lastName - User's last name
 * @returns Initials (e.g., "JD")
 */
export function getInitials(firstName: string, lastName?: string): string {
  const first = firstName.charAt(0).toUpperCase()
  const last = lastName ? lastName.charAt(0).toUpperCase() : ''
  return `${first}${last}`
}

/**
 * Truncate blockchain address
 * @param address - Blockchain address
 * @param chars - Number of chars to show on each side
 * @returns Truncated address (e.g., "0x1234...5678")
 */
export function truncateAddress(address: string, chars: number = 4): string {
  if (address.length <= chars * 2 + 3) return address
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
}

/**
 * Get transaction status color
 * @param status - Transaction status
 * @returns Tailwind color class
 */
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    pending: 'text-yellow-600 bg-yellow-50',
    processing: 'text-blue-600 bg-blue-50',
    completed: 'text-green-600 bg-green-50',
    failed: 'text-red-600 bg-red-50',
    cancelled: 'text-gray-600 bg-gray-50',
    refunded: 'text-purple-600 bg-purple-50',
  }
  return colors[status] || 'text-gray-600 bg-gray-50'
}

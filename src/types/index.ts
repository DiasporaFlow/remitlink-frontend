/**
 * Core TypeScript Type Definitions for RemitLink MVP
 */

// Re-export API and Blockchain types
export * from './api'
export * from './blockchain'

// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phoneNumber?: string
  countryCode: string
  kycStatus: KYCStatus
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export type KYCStatus = 'not_started' | 'pending' | 'under_review' | 'approved' | 'rejected'

// Authentication Types
export interface AuthResponse {
  token: string
  user: User
  expiresIn: number
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  phoneNumber?: string
  countryCode: string
  agreeToTerms: boolean
}

// Transaction Types
export interface Transaction {
  id: string
  senderId: string
  recipientId: string
  amount: number
  fromCurrency: string
  toCurrency: string
  exchangeRate: number
  feeAmount: number
  totalAmount: number
  status: TransactionStatus
  transferMethod: TransferMethod
  riskScore?: number
  blockchainTxHash?: string
  description?: string
  createdAt: string
  updatedAt: string
  completedAt?: string
  sender?: User
  recipient?: Recipient
}

export type TransactionStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'refunded'

export type TransferMethod = 'BLOCKCHAIN' | 'BANK' | 'HYBRID'

// Recipient Types
export interface Recipient {
  id: string
  userId: string
  firstName: string
  lastName: string
  email?: string
  phoneNumber: string
  bankName?: string
  accountNumber?: string
  countryCode: string
  currency: string
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateRecipientData {
  firstName: string
  lastName: string
  email?: string
  phoneNumber: string
  bankName?: string
  accountNumber?: string
  countryCode: string
  currency: string
}

// Currency Types
export interface Currency {
  code: string
  name: string
  symbol: string
  flag: string
}

// Exchange Rate Types
export interface ExchangeRate {
  from: string
  to: string
  rate: number
  timestamp: string
  expiresAt: string
}

// Dashboard Stats Types
export interface DashboardStats {
  totalBalance: number
  pendingTransactions: number
  completedTransactions: number
  totalSent: number
  recentTransactions: Transaction[]
}

// Transfer Step Data
export interface TransferStepOne {
  amount: number
  fromCurrency: string
  toCurrency: string
  recipientId: string
}

export interface TransferStepTwo {
  exchangeRate: ExchangeRate
  feeAmount: number
  totalAmount: number
  agreeToTerms: boolean
}

// Country Types
export interface Country {
  code: string
  name: string
  flag: string
  currencies: string[]
}

// Form Field Error
export interface FormError {
  field: string
  message: string
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: NotificationType
  isRead: boolean
  createdAt: string
}

export type NotificationType = 'info' | 'success' | 'warning' | 'error'

// Settings Types
export interface UserSettings {
  userId: string
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
  }
  language: string
  currency: string
  twoFactorEnabled: boolean
}

// Filters and Sorting
export interface TransactionFilters {
  status?: TransactionStatus
  startDate?: string
  endDate?: string
  minAmount?: number
  maxAmount?: number
}

export interface SortOptions {
  field: string
  order: 'asc' | 'desc'
}

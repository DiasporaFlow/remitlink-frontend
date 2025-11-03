/**
 * TypeScript Type Definitions for RemitLink
 */

// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phoneNumber?: string
  dateOfBirth?: string
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
  firstName: string
  lastName: string
  phoneNumber?: string
  dateOfBirth?: string
}

// Transaction Types
export interface Transaction {
  id: string
  senderId: string
  recipientId: string
  amount: number
  currency: string
  exchangeRate?: number
  fee: number
  totalAmount: number
  status: TransactionStatus
  paymentMethod: string
  description?: string
  blockchainTxHash?: string
  createdAt: string
  updatedAt: string
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

export interface CreateTransactionData {
  recipientId: string
  amount: number
  currency: string
  paymentMethod: string
  description?: string
}

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
  country: string
  currency: string
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
  country: string
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
}

// KYC Types
export interface KYCDocument {
  id: string
  userId: string
  documentType: DocumentType
  documentNumber: string
  documentUrl: string
  status: KYCStatus
  submittedAt: string
  reviewedAt?: string
  notes?: string
}

export type DocumentType = 'passport' | 'id_card' | 'drivers_license' | 'proof_of_address'

export interface SubmitKYCData {
  documentType: DocumentType
  documentNumber: string
  documentFile: File
}

// Wallet Types
export interface Wallet {
  id: string
  userId: string
  balance: number
  currency: string
  isDefault: boolean
  createdAt: string
  updatedAt: string
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

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    totalPages: number
    totalItems: number
  }
}

// Form Types
export interface FormError {
  field: string
  message: string
}

// Filter and Sort Types
export interface TransactionFilters {
  status?: TransactionStatus
  startDate?: string
  endDate?: string
  minAmount?: number
  maxAmount?: number
  currency?: string
}

export interface SortOptions {
  field: string
  order: 'asc' | 'desc'
}

// Dashboard Stats Types
export interface DashboardStats {
  totalSent: number
  totalTransactions: number
  totalSaved: number
  recentTransactions: Transaction[]
  monthlyStats: MonthlyStats[]
}

export interface MonthlyStats {
  month: string
  totalAmount: number
  transactionCount: number
}

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

// Error Types
export interface ApiError {
  code: string
  message: string
  details?: unknown
}

/**
 * Application Constants
 */

// Application Info
export const APP_NAME = 'RemitLink'
export const APP_DESCRIPTION = 'Connecting Hearts, Bridging Borders, Moving Money'
export const APP_VERSION = '1.0.0'

// Organization
export const ORGANIZATION_NAME = 'DiasporaFlow'
export const ORGANIZATION_URL = 'https://github.com/DiasporaFlow'

// Supported Currencies
export const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'AZN', name: 'Azerbaijani Manat', symbol: '₼', flag: '🇦🇿' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
] as const

// Supported Countries
export const COUNTRIES = [
  { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿', currencies: ['AZN', 'USD'] },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷', currencies: ['TRY', 'USD', 'EUR'] },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', currencies: ['EUR', 'USD'] },
  { code: 'US', name: 'United States', flag: '🇺🇸', currencies: ['USD'] },
  { code: 'RU', name: 'Russia', flag: '🇷🇺', currencies: ['RUB', 'USD'] },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', currencies: ['GBP', 'EUR', 'USD'] },
] as const

// Transaction Status
export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
} as const

// Transaction Status Labels
export const TRANSACTION_STATUS_LABELS: Record<string, string> = {
  pending: 'Pending',
  processing: 'Processing',
  completed: 'Completed',
  failed: 'Failed',
  cancelled: 'Cancelled',
  refunded: 'Refunded',
}

// Transaction Status Colors (Tailwind classes)
export const TRANSACTION_STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
  cancelled: 'bg-gray-100 text-gray-800',
  refunded: 'bg-purple-100 text-purple-800',
}

// KYC Status
export const KYC_STATUS = {
  NOT_STARTED: 'not_started',
  PENDING: 'pending',
  UNDER_REVIEW: 'under_review',
  APPROVED: 'approved',
  REJECTED: 'rejected',
} as const

// KYC Status Labels
export const KYC_STATUS_LABELS: Record<string, string> = {
  not_started: 'Not Started',
  pending: 'Pending',
  under_review: 'Under Review',
  approved: 'Approved',
  rejected: 'Rejected',
}

// Transfer Limits
export const TRANSFER_LIMITS = {
  MIN_AMOUNT: 1,
  MAX_AMOUNT_UNVERIFIED: 1000,
  MAX_AMOUNT_VERIFIED: 10000,
  MAX_AMOUNT_PREMIUM: 50000,
  DAILY_LIMIT: 25000,
} as const

// API Endpoints (relative to baseURL)
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',

  // User
  USER_PROFILE: '/users/profile',
  USER_UPDATE: '/users/profile',

  // Transactions
  TRANSACTIONS: '/transactions',
  TRANSACTION_CREATE: '/transactions',
  TRANSACTION_DETAIL: '/transactions/:id',

  // KYC
  KYC_SUBMIT: '/kyc/submit',
  KYC_STATUS: '/kyc/status',

  // Recipients
  RECIPIENTS: '/recipients',
  RECIPIENT_CREATE: '/recipients',
  RECIPIENT_DELETE: '/recipients/:id',
} as const

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
} as const

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const

// Environment
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

// URLs
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

// Blockchain
export const BLOCKCHAIN_CONFIG = {
  RPC_URL: process.env.NEXT_PUBLIC_BLOCKCHAIN_RPC || '',
  CHAIN_ID: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '80001'),
  NETWORK_NAME: 'Polygon Mumbai Testnet',
} as const

// Features
export const FEATURES = {
  BLOCKCHAIN_ENABLED: process.env.NEXT_PUBLIC_ENABLE_BLOCKCHAIN === 'true',
  KYC_ENABLED: process.env.NEXT_PUBLIC_ENABLE_KYC === 'true',
} as const

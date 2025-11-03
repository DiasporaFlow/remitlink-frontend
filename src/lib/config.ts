/**
 * Application Configuration
 * Centralized configuration management with validation
 */

const requiredEnvVars = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
}

// Validate required environment variables
Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value && process.env.NODE_ENV === 'production') {
    console.warn(`Warning: Required environment variable ${key} is not set`)
  }
})

export const config = {
  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api',
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000'),
    rateLimit: parseInt(process.env.NEXT_PUBLIC_API_RATE_LIMIT || '100'),
    rateWindow: parseInt(process.env.NEXT_PUBLIC_API_RATE_WINDOW || '60000'),
  },

  // App Configuration
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'RemitLink',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    environment: process.env.NODE_ENV || 'development',
  },

  // Authentication
  auth: {
    jwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET || 'default-secret-change-me',
    tokenExpiry: process.env.NEXT_PUBLIC_TOKEN_EXPIRY || '7d',
  },

  // Blockchain Configuration
  blockchain: {
    network: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK || 'testnet',
    rpcUrl: process.env.NEXT_PUBLIC_BLOCKCHAIN_RPC_URL || '',
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
  },

  // Feature Flags
  features: {
    enableKYC: process.env.NEXT_PUBLIC_ENABLE_KYC === 'true',
    enableBlockchainVerification: process.env.NEXT_PUBLIC_ENABLE_BLOCKCHAIN_VERIFICATION === 'true',
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableNotifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS !== 'false',
  },

  // External Services
  services: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    intercomAppId: process.env.NEXT_PUBLIC_INTERCOM_APP_ID || '',
    exchangeRateApiUrl: process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_URL || 'https://api.exchangerate-api.com/v4/latest',
    exchangeRateApiKey: process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY || '',
  },

  // File Upload
  upload: {
    maxFileSize: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE || '5242880'), // 5MB
    allowedFileTypes: (process.env.NEXT_PUBLIC_ALLOWED_FILE_TYPES || 'image/jpeg,image/png,image/jpg,application/pdf').split(','),
  },

  // Transaction Limits
  limits: {
    minTransferAmount: parseFloat(process.env.NEXT_PUBLIC_MIN_TRANSFER_AMOUNT || '10'),
    maxTransferAmountUnverified: parseFloat(process.env.NEXT_PUBLIC_MAX_TRANSFER_AMOUNT_UNVERIFIED || '1000'),
    maxTransferAmountVerified: parseFloat(process.env.NEXT_PUBLIC_MAX_TRANSFER_AMOUNT_VERIFIED || '50000'),
  },

  // Support
  support: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@remitlink.com',
    phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || '+1-800-REMIT-LINK',
  },
} as const

// Type-safe config access
export type Config = typeof config

// Helper function to check if we're in production
export const isProduction = () => config.app.environment === 'production'

// Helper function to check if we're in development
export const isDevelopment = () => config.app.environment === 'development'

// Helper function to get full API URL
export const getApiUrl = (endpoint: string) => {
  const base = config.api.baseUrl.endsWith('/')
    ? config.api.baseUrl.slice(0, -1)
    : config.api.baseUrl
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${base}${path}`
}

export default config

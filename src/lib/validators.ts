/**
 * Zod validation schemas for forms
 */

import { z } from 'zod'

// Login Schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Register Schema
export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phoneNumber: z.string().optional(),
  countryCode: z.string().min(2, 'Please select a country'),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type RegisterFormData = z.infer<typeof registerSchema>

// Transfer Step 1 Schema
export const transferStep1Schema = z.object({
  amount: z.number().min(1, 'Amount must be at least 1'),
  fromCurrency: z.string().min(3, 'Please select a currency'),
  toCurrency: z.string().min(3, 'Please select a currency'),
  recipientId: z.string().min(1, 'Please select a recipient'),
})

export type TransferStep1Data = z.infer<typeof transferStep1Schema>

// Transfer Step 2 Schema
export const transferStep2Schema = z.object({
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms to proceed',
  }),
})

export type TransferStep2Data = z.infer<typeof transferStep2Schema>

// Profile Update Schema
export const profileUpdateSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phoneNumber: z.string().optional(),
  email: z.string().email('Invalid email address'),
})

export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>

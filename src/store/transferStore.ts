/**
 * Transfer Wizard State Store using Zustand
 */

import { create } from 'zustand'
import type { ExchangeRate } from '@/types'

interface TransferState {
  // Current step (1-3)
  step: number

  // Step 1 data
  amount: number
  fromCurrency: string
  toCurrency: string
  recipientId: string

  // Step 2 data
  exchangeRate: ExchangeRate | null
  feeAmount: number
  totalAmount: number

  // Actions
  setStep: (step: number) => void
  setStepOneData: (data: {
    amount: number
    fromCurrency: string
    toCurrency: string
    recipientId: string
  }) => void
  setStepTwoData: (data: {
    exchangeRate: ExchangeRate
    feeAmount: number
    totalAmount: number
  }) => void
  reset: () => void
  goToNextStep: () => void
  goToPreviousStep: () => void
}

const initialState = {
  step: 1,
  amount: 0,
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  recipientId: '',
  exchangeRate: null,
  feeAmount: 0,
  totalAmount: 0,
}

export const useTransferStore = create<TransferState>((set) => ({
  ...initialState,

  setStep: (step) => set({ step }),

  setStepOneData: (data) => set(data),

  setStepTwoData: (data) => set(data),

  reset: () => set(initialState),

  goToNextStep: () => set((state) => ({ step: Math.min(state.step + 1, 3) })),

  goToPreviousStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
}))

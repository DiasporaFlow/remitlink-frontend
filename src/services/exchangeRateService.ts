/**
 * Exchange Rate Service
 * Handles exchange rate API calls
 */

import api from '@/lib/api'
import type { ExchangeRate, ApiResponse } from '@/types'

export const exchangeRateService = {
  /**
   * Get exchange rate between two currencies
   */
  async getExchangeRate(from: string, to: string): Promise<ExchangeRate> {
    const response = await api.get<ApiResponse<ExchangeRate>>(
      `/exchange-rates?from=${from}&to=${to}`
    )
    return response.data.data!
  },

  /**
   * Get all available exchange rates
   */
  async getAllRates(): Promise<ExchangeRate[]> {
    const response = await api.get<ApiResponse<ExchangeRate[]>>('/exchange-rates/all')
    return response.data.data!
  },
}

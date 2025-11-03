/**
 * Transaction Service
 * Handles all transaction-related API calls
 */

import api from '@/lib/api'
import type {
  Transaction,
  DashboardStats,
  ApiResponse,
  PaginatedResponse,
  CreateTransactionRequest,
} from '@/types'

export const transactionService = {
  /**
   * Get dashboard stats
   */
  async getDashboardStats(): Promise<DashboardStats> {
    const response = await api.get<ApiResponse<DashboardStats>>('/dashboard/stats')
    return response.data.data!
  },

  /**
   * Get user transactions
   */
  async getTransactions(page: number = 1, pageSize: number = 20): Promise<PaginatedResponse<Transaction>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Transaction>>>(
      `/transactions?page=${page}&pageSize=${pageSize}`
    )
    return response.data.data!
  },

  /**
   * Get transaction by ID
   */
  async getTransactionById(id: string): Promise<Transaction> {
    const response = await api.get<ApiResponse<Transaction>>(`/transactions/${id}`)
    return response.data.data!
  },

  /**
   * Create new transaction
   */
  async createTransaction(data: CreateTransactionRequest): Promise<Transaction> {
    const response = await api.post<ApiResponse<Transaction>>('/transactions', data)
    return response.data.data!
  },
}

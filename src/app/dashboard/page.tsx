'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/shared/Header'
import { StatsCards } from '@/components/features/dashboard/StatsCards'
import { RecentTransactions } from '@/components/features/dashboard/RecentTransactions'
import { QuickActions } from '@/components/features/dashboard/QuickActions'
import { useAuth } from '@/hooks/useAuth'
import type { DashboardStats } from '@/types'

// Mock data for development
const mockStats: DashboardStats = {
  totalBalance: 5420.50,
  pendingTransactions: 2,
  completedTransactions: 15,
  totalSent: 12500.00,
  recentTransactions: [
    {
      id: '1',
      senderId: 'user1',
      recipientId: 'rec1',
      amount: 500,
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      exchangeRate: 0.92,
      feeAmount: 7.50,
      totalAmount: 507.50,
      status: 'completed',
      transferMethod: 'BLOCKCHAIN',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      recipient: {
        id: 'rec1',
        userId: 'user1',
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+1234567890',
        countryCode: 'US',
        currency: 'EUR',
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    },
    {
      id: '2',
      senderId: 'user1',
      recipientId: 'rec2',
      amount: 1000,
      fromCurrency: 'USD',
      toCurrency: 'AZN',
      exchangeRate: 1.70,
      feeAmount: 15.00,
      totalAmount: 1015.00,
      status: 'processing',
      transferMethod: 'BANK',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
      recipient: {
        id: 'rec2',
        userId: 'user1',
        firstName: 'Sarah',
        lastName: 'Smith',
        phoneNumber: '+994501234567',
        countryCode: 'AZ',
        currency: 'AZN',
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    },
  ],
}

export default function DashboardPage() {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const loadStats = async () => {
      setIsLoading(true)
      // In production, this would be: await transactionService.getDashboardStats()
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStats(mockStats)
      setIsLoading(false)
    }

    loadStats()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back{user ? `, ${user.firstName}` : ''}!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your account today
          </p>
        </div>

        <div className="space-y-8">
          <StatsCards stats={stats} isLoading={isLoading} />

          <div className="grid gap-8 md:grid-cols-2">
            <RecentTransactions
              transactions={stats?.recentTransactions || []}
              isLoading={isLoading}
            />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}

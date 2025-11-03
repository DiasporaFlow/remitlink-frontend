'use client'

import { ArrowUpRight, ArrowDownRight, Clock, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import type { DashboardStats } from '@/types'

interface StatsCardsProps {
  stats: DashboardStats | null
  isLoading?: boolean
}

export function StatsCards({ stats, isLoading }: StatsCardsProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 w-20 bg-muted animate-pulse rounded" />
            </CardHeader>
            <CardContent>
              <div className="h-8 w-24 bg-muted animate-pulse rounded mb-2" />
              <div className="h-3 w-32 bg-muted animate-pulse rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const statsData = [
    {
      title: 'Total Balance',
      value: formatCurrency(stats?.totalBalance || 0, 'USD'),
      description: 'Available funds',
      icon: ArrowUpRight,
      trend: '+12.5%',
      trendUp: true,
    },
    {
      title: 'Pending',
      value: stats?.pendingTransactions || 0,
      description: 'Transactions in progress',
      icon: Clock,
      iconColor: 'text-yellow-600',
    },
    {
      title: 'Completed',
      value: stats?.completedTransactions || 0,
      description: 'Successful transactions',
      icon: Check,
      iconColor: 'text-green-600',
    },
    {
      title: 'Total Sent',
      value: formatCurrency(stats?.totalSent || 0, 'USD'),
      description: 'All-time total',
      icon: ArrowDownRight,
      trend: '+5.2%',
      trendUp: true,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.iconColor || 'text-muted-foreground'}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
                {stat.trend && (
                  <span className={`ml-2 ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend}
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

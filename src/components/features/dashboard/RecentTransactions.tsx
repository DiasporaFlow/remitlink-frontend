'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency, formatDate, getStatusColor } from '@/lib/utils'
import type { Transaction } from '@/types'

interface RecentTransactionsProps {
  transactions: Transaction[]
  isLoading?: boolean
}

export function RecentTransactions({ transactions, isLoading }: RecentTransactionsProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest money transfers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="h-4 w-32 bg-muted animate-pulse rounded mb-2" />
                  <div className="h-3 w-24 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-6 w-20 bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!transactions || transactions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest money transfers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No transactions yet</p>
            <Link href="/transfer">
              <Button>Send your first transfer</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest money transfers</CardDescription>
        </div>
        <Link href="/transactions">
          <Button variant="ghost" size="sm">
            View all
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.slice(0, 5).map((transaction) => (
            <Link
              key={transaction.id}
              href={`/transactions/${transaction.id}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">
                    {transaction.recipient?.firstName} {transaction.recipient?.lastName}
                  </p>
                  <Badge
                    variant="outline"
                    className={`text-xs ${getStatusColor(transaction.status)}`}
                  >
                    {transaction.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatDate(transaction.createdAt)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  {formatCurrency(transaction.amount, transaction.fromCurrency)}
                </p>
                <p className="text-xs text-muted-foreground">
                  → {formatCurrency(
                    transaction.amount * transaction.exchangeRate,
                    transaction.toCurrency
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

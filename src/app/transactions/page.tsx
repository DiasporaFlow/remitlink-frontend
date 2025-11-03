'use client'

import { Header } from '@/components/shared/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency, formatDate, getStatusColor } from '@/lib/utils'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

// Mock transactions
const mockTransactions = [
  {
    id: '1',
    recipient: 'John Doe',
    amount: 500,
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    status: 'completed',
    date: new Date().toISOString(),
  },
  {
    id: '2',
    recipient: 'Sarah Smith',
    amount: 1000,
    fromCurrency: 'USD',
    toCurrency: 'AZN',
    status: 'processing',
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '3',
    recipient: 'Ahmed Hassan',
    amount: 750,
    fromCurrency: 'EUR',
    toCurrency: 'TRY',
    status: 'completed',
    date: new Date(Date.now() - 172800000).toISOString(),
  },
]

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
            <p className="text-muted-foreground">View and manage your transfer history</p>
          </div>
          <Link href="/transfer">
            <Button>
              Send Money
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>All your money transfers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{transaction.recipient}</p>
                      <Badge variant="outline" className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(transaction.date)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {formatCurrency(transaction.amount, transaction.fromCurrency)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      → {transaction.toCurrency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

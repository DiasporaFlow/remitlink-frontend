'use client'

import Link from 'next/link'
import { Send, UserPlus, List, Settings } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const actions = [
  {
    title: 'Send Money',
    description: 'Transfer funds to anyone',
    icon: Send,
    href: '/transfer',
    variant: 'default' as const,
  },
  {
    title: 'Add Recipient',
    description: 'Save a new contact',
    icon: UserPlus,
    href: '/profile?tab=recipients',
    variant: 'outline' as const,
  },
  {
    title: 'View All Transactions',
    description: 'See transaction history',
    icon: List,
    href: '/transactions',
    variant: 'outline' as const,
  },
  {
    title: 'Account Settings',
    description: 'Manage your profile',
    icon: Settings,
    href: '/profile',
    variant: 'outline' as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Link key={action.title} href={action.href}>
                <Button
                  variant={action.variant}
                  className="w-full h-auto p-4 flex flex-col items-start gap-2"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Icon className="h-5 w-5" />
                    <span className="font-semibold">{action.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-left">
                    {action.description}
                  </span>
                </Button>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

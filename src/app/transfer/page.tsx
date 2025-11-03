'use client'

import { Header } from '@/components/shared/Header'
import { TransferWizard } from '@/components/features/transfer/TransferWizard'

export default function TransferPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Send Money</h1>
          <p className="text-muted-foreground">
            Transfer funds quickly and securely across borders
          </p>
        </div>

        <TransferWizard />
      </main>
    </div>
  )
}

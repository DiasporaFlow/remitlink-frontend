import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'RemitLink - Cross-Border Payments',
  description: 'Connecting Hearts, Bridging Borders, Moving Money - A secure and efficient cross-border payment platform',
  keywords: ['remittance', 'cross-border payments', 'money transfer', 'blockchain', 'cryptocurrency'],
  authors: [{ name: 'DiasporaFlow' }],
  openGraph: {
    title: 'RemitLink - Cross-Border Payments',
    description: 'Connecting Hearts, Bridging Borders, Moving Money',
    type: 'website',
  },
}

// Force dynamic rendering to prevent static generation timeouts
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}

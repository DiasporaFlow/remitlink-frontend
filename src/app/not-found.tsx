import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <div className="flex justify-center mb-4">
            <Search className="h-24 w-24 text-primary/40" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          The page might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="h-5 w-5 mr-2" />
              Go to Dashboard
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/transfer" className="text-primary hover:underline text-sm">
              Send Money
            </Link>
            <Link href="/transactions" className="text-primary hover:underline text-sm">
              Transactions
            </Link>
            <Link href="/recipients" className="text-primary hover:underline text-sm">
              Recipients
            </Link>
            <Link href="/profile" className="text-primary hover:underline text-sm">
              Profile
            </Link>
            <Link href="/help" className="text-primary hover:underline text-sm">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

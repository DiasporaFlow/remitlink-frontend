'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)

    // In production, send to error tracking service (e.g., Sentry)
    if (process.env.NODE_ENV === 'production') {
      // Sentry.captureException(error)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>
          </div>

          {/* Error Title */}
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Something went wrong!
          </h1>

          {/* Error Description */}
          <p className="text-gray-600 text-center mb-8">
            We encountered an unexpected error. Don&apos;t worry, our team has been notified.
            Please try refreshing the page or go back to the dashboard.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
              <p className="text-sm font-semibold text-red-600 mb-2">
                Error Details (Development Mode):
              </p>
              <p className="text-sm text-gray-800 font-mono break-words">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Error Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} size="lg" className="w-full sm:w-auto">
              <RefreshCcw className="h-5 w-5 mr-2" />
              Try Again
            </Button>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                <Home className="h-5 w-5 mr-2" />
                Go to Dashboard
              </Button>
            </Link>
          </div>

          {/* Support Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              If the problem persists, please{' '}
              <a href="/help" className="text-primary hover:underline">
                contact support
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

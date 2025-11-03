import Link from 'next/link'

export default function TransferPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              RemitLink
            </Link>
            <div className="flex gap-4">
              <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 font-medium">
                Dashboard
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-primary-600 font-medium">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Send Money</h1>
          <p className="text-gray-600">Transfer funds quickly and securely across borders</p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">💸</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Coming Soon...
          </h2>
          <p className="text-gray-600 mb-6">
            Money transfer functionality is under development. Soon you&apos;ll be able to send money to your loved ones with just a few clicks.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold text-gray-900 mb-1">Multiple Countries</h3>
              <p className="text-sm text-gray-600">Send to 50+ countries worldwide</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-1">Instant Transfer</h3>
              <p className="text-sm text-gray-600">Money arrives in minutes</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">💱</div>
              <h3 className="font-semibold text-gray-900 mb-1">Best Rates</h3>
              <p className="text-sm text-gray-600">Competitive exchange rates</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure</h3>
              <p className="text-sm text-gray-600">Bank-level encryption</p>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="inline-block mt-8 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}

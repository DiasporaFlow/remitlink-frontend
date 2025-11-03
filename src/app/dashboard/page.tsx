import Link from 'next/link'

export default function DashboardPage() {
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
              <Link href="/transfer" className="text-gray-700 hover:text-primary-600 font-medium">
                Send Money
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-primary-600 font-medium">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here&apos;s your account overview</p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="text-6xl mb-6">📊</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Coming Soon...
          </h2>
          <p className="text-gray-600 mb-6">
            Dashboard features including balance overview, recent transactions, and analytics are under development.
          </p>
          <Link
            href="/transfer"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Send Money
          </Link>
        </div>

        {/* Placeholder Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-2">Total Sent</p>
            <p className="text-3xl font-bold text-gray-900">---</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-2">Transactions</p>
            <p className="text-3xl font-bold text-gray-900">---</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-2">Saved</p>
            <p className="text-3xl font-bold text-gray-900">---</p>
          </div>
        </div>
      </div>
    </main>
  )
}

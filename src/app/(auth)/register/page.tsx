import Link from 'next/link'

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700">
              RemitLink
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
              Register
            </h2>
            <p className="text-gray-600">
              Create your account to start sending money
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🚧</div>
            <p className="text-secondary-800 font-semibold text-lg mb-2">
              Coming Soon...
            </p>
            <p className="text-secondary-600 text-sm">
              Registration functionality is under development. Stay tuned!
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                Sign in
              </Link>
            </p>
            <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm mt-4 inline-block">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

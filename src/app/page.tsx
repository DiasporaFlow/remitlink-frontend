import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            RemitLink
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-12 font-light">
          Connecting Hearts, Bridging Borders, Moving Money
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          Experience seamless cross-border payments with RemitLink. Fast, secure, and transparent money transfers powered by blockchain technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
          >
            Login
          </Link>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div className="p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast Transfers</h3>
            <p className="text-white/70">Send money across borders in minutes, not days</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
            <p className="text-white/70">Bank-level security with blockchain verification</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
            <p className="text-white/70">Competitive rates with transparent pricing</p>
          </div>
        </div>
      </div>
    </main>
  )
}

import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600 mt-2">Last updated: January 2025</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using RemitLink (&quot;the Service&quot;), you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to these terms, please do not use the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service constitute a legally binding agreement between you and RemitLink regarding your
                use of our international money transfer services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use RemitLink, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Have legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Complete identity verification (KYC) when required</li>
                <li>Not be located in a country subject to international sanctions</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities
                that occur under your account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Immediately notify us of any unauthorized use of your account</li>
                <li>Not share your password or account access with others</li>
                <li>Take reasonable steps to prevent unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RemitLink provides international money transfer services with the following features:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cross-border money transfers to 50+ countries</li>
                <li>Transparent fees and real-time exchange rates</li>
                <li>Multiple delivery methods (bank deposit, mobile money, cash pickup)</li>
                <li>Transaction tracking and notifications</li>
                <li>Secure blockchain-verified transfers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Charges</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to pay all fees associated with your use of the Service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Transfer fees: 1.5% per transaction (minimum $5)</li>
                <li>Currency conversion at competitive exchange rates</li>
                <li>No hidden fees - total cost shown before confirmation</li>
                <li>Fees may vary based on destination country and payment method</li>
                <li>Fee schedules subject to change with prior notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Transaction Limits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transaction limits apply based on your verification status:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Unverified accounts: $1,000 per transaction, $5,000 per month</li>
                <li>Verified accounts: $50,000 per transaction, $200,000 per month</li>
                <li>Limits may be adjusted based on regulatory requirements</li>
                <li>Additional verification may be required for large transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use RemitLink for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Illegal activities or money laundering</li>
                <li>Financing terrorism or prohibited organizations</li>
                <li>Fraudulent or deceptive transactions</li>
                <li>Purchasing illegal goods or services</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Circumventing security measures or system controls</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cancellation and Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel a transaction before it is processed. Once processing begins:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cancellations may not be possible once funds are dispatched</li>
                <li>Refund requests subject to review and approval</li>
                <li>Fees may be non-refundable for completed transactions</li>
                <li>Refund processing time: 5-10 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Liability and Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service is provided &quot;as is&quot; without warranties of any kind. RemitLink is not liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Delays caused by third-party payment providers or banks</li>
                <li>Exchange rate fluctuations between quote and delivery</li>
                <li>Service interruptions due to maintenance or technical issues</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Losses resulting from unauthorized account access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may suspend or terminate your account at any time for violation of these terms, suspected fraud,
                or as required by law. You may close your account at any time by contacting support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective upon posting.
                Continued use of the Service after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-gray-700 space-y-1">
                <li>Email: legal@remitlink.com</li>
                <li>Phone: +1-800-REMIT-LINK</li>
                <li>Address: RemitLink HQ, Financial District, Lagos, Nigeria</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

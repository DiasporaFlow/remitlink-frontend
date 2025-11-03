import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'


export default function PrivacyPage() {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Last updated: January 2025</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RemitLink (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our money transfer
                services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using RemitLink, you consent to the data practices described in this policy. If you do not agree
                with this policy, please discontinue use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Name, email address, phone number</li>
                <li>Date of birth and government-issued ID</li>
                <li>Physical address and postal code</li>
                <li>Bank account and payment information</li>
                <li>Recipient information for transfers</li>
                <li>Identity verification documents (KYC)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transaction Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Transfer amounts, currencies, and destinations</li>
                <li>Payment methods and transaction history</li>
                <li>Blockchain transaction records</li>
                <li>Communication with customer support</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address, browser type, and device information</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Usage data and analytics</li>
                <li>Location data (with your permission)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Processing and completing money transfers</li>
                <li>Verifying your identity and preventing fraud</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Sending transaction notifications and updates</li>
                <li>Improving our services and user experience</li>
                <li>Providing customer support</li>
                <li>Marketing communications (with your consent)</li>
                <li>Detecting and preventing security threats</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> Banks, payment processors, and technology partners</li>
                <li><strong>Regulatory Authorities:</strong> As required by law for compliance and fraud prevention</li>
                <li><strong>Business Partners:</strong> With your consent for specific services</li>
                <li><strong>Legal Requests:</strong> In response to court orders or legal processes</li>
                <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>End-to-end encryption for sensitive data</li>
                <li>Secure HTTPS connections for all transactions</li>
                <li>Multi-factor authentication options</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on data protection</li>
                <li>Blockchain verification for transaction integrity</li>
                <li>Compliance with PCI DSS standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with
                legal obligations. Transaction records are retained for at least 7 years as required by financial
                regulations. You may request deletion of your data, subject to legal requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Provide personalized content and ads</li>
                <li>Improve security and prevent fraud</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings, but some features may not function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your data in compliance with applicable laws, including
                Standard Contractual Clauses and Privacy Shield frameworks where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                RemitLink is not intended for use by individuals under 18 years of age. We do not knowingly collect
                personal information from children. If we become aware that we have collected data from a child, we
                will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes via
                email or through a notice on our website. The &quot;Last Updated&quot; date will reflect the most recent
                revision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                For questions or concerns about this Privacy Policy or our data practices:
              </p>
              <ul className="list-none text-gray-700 space-y-1">
                <li><strong>Email:</strong> privacy@remitlink.com</li>
                <li><strong>Phone:</strong> +1-800-REMIT-LINK</li>
                <li><strong>Mail:</strong> Data Protection Officer, RemitLink HQ, Lagos, Nigeria</li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-700">
                <strong>GDPR & CCPA Compliance:</strong> RemitLink complies with GDPR, CCPA, and other applicable
                data protection regulations. If you are a resident of the EU or California, you have additional rights.
                Please contact our Data Protection Officer for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

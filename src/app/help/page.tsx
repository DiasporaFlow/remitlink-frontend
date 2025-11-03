'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, HelpCircle, Mail, Phone, MessageCircle, CreditCard, Shield, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const categories = [
  {
    icon: CreditCard,
    title: 'Transfers & Payments',
    description: 'Learn how to send money and manage payments',
    articles: 12,
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Keep your account safe and secure',
    articles: 8,
  },
  {
    icon: Users,
    title: 'Account Management',
    description: 'Manage your profile and settings',
    articles: 10,
  },
  {
    icon: Globe,
    title: 'International Transfers',
    description: 'Send money across borders',
    articles: 15,
  },
]

const faqs = [
  {
    question: 'How long does a transfer take?',
    answer: 'Most transfers are completed within 5-30 minutes. Bank deposits may take 1-2 business days depending on the destination country and banking hours.',
  },
  {
    question: 'What are the fees for sending money?',
    answer: 'We charge a flat 1.5% fee per transaction with a minimum of $5. There are no hidden fees - you see the exact total cost before confirming your transfer.',
  },
  {
    question: 'How do I verify my identity (KYC)?',
    answer: 'Go to your Profile page and upload a government-issued ID, proof of address, and a selfie with your ID. Verification typically takes 24-48 hours.',
  },
  {
    question: 'Can I cancel a transfer after sending it?',
    answer: 'You can cancel a transfer before it has been processed. Once processing begins, cancellation may not be possible. Contact support immediately if you need help.',
  },
  {
    question: 'What countries can I send money to?',
    answer: 'RemitLink supports transfers to over 50 countries across Africa, Asia, Europe, and the Americas. Check the app for the complete list of supported countries.',
  },
  {
    question: 'Is my money safe with RemitLink?',
    answer: 'Yes! We use bank-level encryption, blockchain verification, and comply with international financial regulations. Your money and data are fully protected.',
  },
  {
    question: 'What are the transfer limits?',
    answer: 'Unverified accounts: $1,000 per transaction, $5,000/month. Verified accounts: $50,000 per transaction, $200,000/month.',
  },
  {
    question: 'How do I track my transfer?',
    answer: 'You can track your transfer in real-time from the Transactions page. You\'ll also receive email and push notifications at each stage of the transfer.',
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-white/90 mb-8">
              Search our knowledge base or browse categories below
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-gray-900 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <p className="text-sm text-primary">{category.articles} articles</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start">
                        <HelpCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 ml-8">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No results found for &quot;{searchQuery}&quot;</p>
                  <p className="text-sm text-gray-400 mt-2">Try different keywords or browse categories above</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
            <p className="text-lg text-gray-600">Our support team is here to assist you 24/7</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 mb-4">Get a response within 24 hours</p>
                <a href="mailto:support@remitlink.com" className="text-primary hover:underline">
                  support@remitlink.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-sm text-gray-600 mb-4">Available 24/7 in English</p>
                <a href="tel:+18007364854" className="text-primary hover:underline">
                  +1-800-REMIT-LINK
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-4">Chat with us in real-time</p>
                <Button className="w-full mt-2">Start Chat</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

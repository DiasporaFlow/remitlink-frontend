'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Shield,
  DollarSign,
  Globe,
  Clock,
  TrendingDown,
  CheckCircle2,
  Star,
  Users,
  Send,
  Smartphone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">RemitLink</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
                How it Works
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-8">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Powered by Blockchain Technology</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Connecting Hearts,
              <br />
              <span className="text-primary">Bridging Borders</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Send money across borders instantly with transparent fees, real-time tracking, and bank-level security.
              Join thousands who trust RemitLink for their international transfers.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  Start Sending Money
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                  Login to Account
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2.5B+</div>
                <div className="text-gray-600">Transferred Globally</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Countries Supported</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose RemitLink?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with user-friendly design to deliver the best remittance experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Transfers complete in minutes, not days. Real-time processing with instant notifications.',
              },
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'End-to-end encryption, blockchain verification, and multi-factor authentication.',
              },
              {
                icon: TrendingDown,
                title: 'Low Fees',
                description: 'Transparent pricing with no hidden charges. Save up to 90% compared to traditional banks.',
              },
              {
                icon: Globe,
                title: '50+ Countries',
                description: 'Send money to family and friends across Africa, Europe, Asia, and the Americas.',
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock customer service in multiple languages. We\'re always here to help.',
              },
              {
                icon: Smartphone,
                title: 'Mobile First',
                description: 'Optimized for mobile with apps for iOS and Android. Send money on the go.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How RemitLink Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Send money internationally in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Sign up in minutes with just your email and phone number. Complete KYC verification for higher limits.',
              },
              {
                step: '02',
                title: 'Add Recipient',
                description: 'Enter recipient details and choose their preferred payment method. Save for future transfers.',
              },
              {
                step: '03',
                title: 'Send Money',
                description: 'Enter amount, review exchange rate and fees, and confirm. Track in real-time until delivered.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers say about their RemitLink experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Healthcare Worker, UK',
                content: 'I send money home to Nigeria every month. RemitLink has made it so much easier and cheaper than my old bank. The app is simple to use!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Software Engineer, USA',
                content: 'The speed is incredible. My family in the Philippines receives money within minutes. Customer support is also very responsive.',
                rating: 5,
              },
              {
                name: 'Amara Okafor',
                role: 'Business Owner, Canada',
                content: 'As a business owner, I need reliable transfers. RemitLink has never let me down. The blockchain verification gives me peace of mind.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about RemitLink</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does a transfer take?',
                a: 'Most transfers are completed within 5-30 minutes. Bank deposits may take 1-2 business days depending on the destination country.',
              },
              {
                q: 'What are the fees?',
                a: 'We charge a flat fee of 1.5% per transaction with no hidden costs. You always see the exact amount before confirming.',
              },
              {
                q: 'Is RemitLink secure?',
                a: 'Yes! We use bank-level encryption, blockchain verification, and comply with international financial regulations. Your money and data are protected.',
              },
              {
                q: 'What countries do you support?',
                a: 'We support transfers to over 50 countries across Africa, Asia, Europe, and the Americas. Check our full list in the app.',
              },
              {
                q: 'Do I need to verify my identity?',
                a: 'Basic verification is required for all users. Higher transfer limits are available after completing full KYC verification.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 ml-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Sending Money?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who trust RemitLink for fast, secure international transfers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100">
                  Login Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">RemitLink</span>
              </div>
              <p className="text-gray-400">
                Connecting hearts, bridging borders, moving money.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="/register" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/compliance" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RemitLink. All rights reserved. Built for IDDA Hackathon 2025.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

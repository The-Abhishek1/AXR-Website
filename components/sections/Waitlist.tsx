'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { EnvelopeIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export function Waitlist() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setMessage('Thanks for joining! We\'ll be in touch soon.')
      setFormData({ email: '', phone: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Red-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239,68,68,0.1) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      
      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">Early Access</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="gradient-text">Waitlist</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Be among the first to experience enterprise-grade security orchestration
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm border-red-200/50 dark:border-red-800/30">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">You're on the list!</h3>
                <p className="text-gray-600 dark:text-gray-400">{message}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone (optional)</label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-600 dark:text-red-400 text-sm">{message}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Join Waitlist'
                  )}
                </Button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  By joining, you agree to our{' '}
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openModal', { detail: 'privacy' })) }} className="text-red-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openModal', { detail: 'terms' })) }} className="text-red-600 hover:underline">
                    Terms of Use
                  </a>
                </p>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  )
}
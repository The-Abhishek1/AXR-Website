'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline'

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <StarIcon className="w-12 h-12 text-yellow-500" />
              <StarIcon className="w-12 h-12 text-yellow-500 absolute top-0 left-0 animate-ping" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <span className="gradient-text"> Security Operations?</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join forward-thinking security teams already using AXR to automate and scale their security workflows.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="#waitlist" variant="primary" size="lg" className="group">
              Get Started Now
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="https://github.com/The-Abhishek1/CyberSecurity-Platform" variant="outline" size="lg" external>
              View on GitHub
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <span className="text-lg font-semibold">🏦 SecureBank</span>
              <span className="text-lg font-semibold">🏥 HealthGuard</span>
              <span className="text-lg font-semibold">🏭 IndustraCorp</span>
              <span className="text-lg font-semibold">📦 CloudScale</span>
              <span className="text-lg font-semibold">🔒 FinSecure</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
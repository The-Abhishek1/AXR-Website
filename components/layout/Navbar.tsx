'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Tech Stack', href: '#technology' },
  { name: 'Security', href: '#security' },
  { name: 'GitHub', href: 'https://github.com/The-Abhishek1/CyberSecurity-Platform', external: true },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group relative">
            <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              AXR
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button href="#waitlist" variant="primary" size="sm">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-gray-200/50 dark:border-gray-800/50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button href="#waitlist" variant="primary" className="w-full">
                Join Waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.header>
  )
}
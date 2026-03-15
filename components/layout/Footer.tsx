'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: SiGithub, href: 'https://github.com/yourusername/axr', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
  { icon: SiTwitter, href: 'https://twitter.com/axr_security', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: SiLinkedin, href: 'https://linkedin.com/company/axr-security', label: 'LinkedIn', color: 'hover:text-blue-600' },
]

export function Footer() {
  const handleLegalClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('openModal', { detail: type }))
  }

  return (
    <footer className="relative bg-white dark:bg-dark-600 border-t border-gray-200 dark:border-red-900/30">
      <Container>
        <div className="py-12">
          {/* Brand and social section - simplified */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                AXR
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Enterprise Security Orchestrator
              </span>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`p-2 bg-gray-100 dark:bg-dark-200 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Simple links - just what you need for a GitHub project */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <Link href="#features" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Features
            </Link>
            <Link href="#architecture" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Architecture
            </Link>
            <Link href="#technology" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Tech Stack
            </Link>
            <Link href="#security" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Security
            </Link>
            <a 
              href="https://github.com/yourusername/axr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              GitHub
            </a>
            <Link href="#waitlist" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Waitlist
            </Link>
          </div>

          {/* Legal links - minimal */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs text-gray-500 dark:text-gray-500">
            <a href="#" onClick={(e) => handleLegalClick(e, 'privacy')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Privacy
            </a>
            <span>•</span>
            <a href="#" onClick={(e) => handleLegalClick(e, 'terms')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Terms
            </a>
            <span>•</span>
            <a href="#" onClick={(e) => handleLegalClick(e, 'cookies')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Cookies
            </a>
          </div>

          {/* Copyright - simple */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} AXR. Open source project.
          </div>
        </div>
      </Container>
    </footer>
  )
}
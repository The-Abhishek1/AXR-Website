import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AXR - Enterprise Security Orchestrator',
  description: 'Enterprise-grade security orchestration platform combining LLM-based planning with isolated containerized tool execution.',
  keywords: 'security orchestration, AI security, automation, enterprise security, LLM, container security',
  authors: [{ name: 'AXR Security Team' }],
  openGraph: {
    title: 'AXR - Enterprise Security Orchestrator',
    description: 'Automate security workflows with intelligent agents',
    url: 'https://axr.security',
    siteName: 'AXR',
    images: [
      {
        url: 'https://axr.security/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXR - Enterprise Security Orchestrator',
    description: 'Automate security workflows with intelligent agents',
    images: ['https://axr.security/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        jetbrainsMono.variable,
        'font-sans antialiased'
      )}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
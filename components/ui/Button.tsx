import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  className?: string
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
        primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
      secondary: 'bg-gray-200 dark:bg-dark-100 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-dark-50',
      outline: 'border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30',
      ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const classes = cn(baseStyles, variants[variant], sizes[size], className)

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
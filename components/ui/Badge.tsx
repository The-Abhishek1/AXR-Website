import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gradient' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-gray-100 dark:bg-dark-100 text-gray-800 dark:text-gray-200',
      primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200',
      secondary: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-200',
      success: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
      warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
      error: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
      gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white',
      outline: 'border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
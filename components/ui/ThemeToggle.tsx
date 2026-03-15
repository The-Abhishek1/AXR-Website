'use client'

import { useTheme } from '@/hooks/useTheme'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-50 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-red-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-red-600" />
      )}
    </motion.button>
  )
}
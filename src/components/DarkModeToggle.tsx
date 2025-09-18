'use client'

import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { useDarkMode } from '@/hooks/useDarkMode'

export default function DarkModeToggle() {
  const { theme, toggleTheme, mounted } = useDarkMode()

  if (!mounted) {
    return (
      <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-pine-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
        <SunIcon className="h-5 w-5" />
      </button>
    )
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="h-5 w-5" />
      case 'dark':
        return <MoonIcon className="h-5 w-5" />
      case 'system':
        return <ComputerDesktopIcon className="h-5 w-5" />
      default:
        return <SunIcon className="h-5 w-5" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode'
      case 'dark':
        return 'Switch to system theme'
      case 'system':
        return 'Switch to light mode'
      default:
        return 'Toggle theme'
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-pine-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  )
}

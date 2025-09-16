import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Design tokens
export const tokens = {
  colors: {
    primary: {
      50: '#f0f9f4',
      100: '#dcf2e7',
      200: '#bce5d3',
      300: '#8dd1b5',
      400: '#5e8b7e', // Pine
      500: '#4a6b5f',
      600: '#3d564c',
      700: '#34473e',
      800: '#2d3a33',
      900: '#27302b',
    },
    secondary: {
      50: '#fef7ed',
      100: '#fdedd3',
      200: '#fbd7a5',
      300: '#f8b86d',
      400: '#f2a65a', // Campfire
      500: '#ed8b2f',
      600: '#de6f1a',
      700: '#b85516',
      800: '#944419',
      900: '#783917',
    },
    accent: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8e6cef', // Twilight
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    dark: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a', // Dark
    },
  },
  fonts: {
    heading: ['Poppins', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
  },
  shadows: {
    soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    glow: '0 0 20px rgba(142, 108, 239, 0.3)',
    'glow-pine': '0 0 20px rgba(94, 139, 126, 0.3)',
  },
} as const

export type Tokens = typeof tokens

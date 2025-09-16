module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          50: '#f0f9f4',
          100: '#dcf2e7',
          200: '#bce5d3',
          300: '#8dd1b5',
          400: '#5e8b7e',
          500: '#4a6b5f',
          600: '#3d564c',
          700: '#34473e',
          800: '#2d3a33',
          900: '#27302b',
        },
        campfire: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd7a5',
          300: '#f8b86d',
          400: '#f2a65a',
          500: '#ed8b2f',
          600: '#de6f1a',
          700: '#b85516',
          800: '#944419',
          900: '#783917',
        },
        twilight: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8e6cef',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
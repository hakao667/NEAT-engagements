/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f5',
          100: '#e0f2eb',
          500: '#2E8B57',
          600: '#27a044',
          700: '#1B5E20',
        },
        secondary: {
          50: '#f0f5fa',
          100: '#e0f0f5',
          500: '#7BC67B',
          600: '#6ab86a',
        },
        accent: {
          blue: '#7EC8E3',
          navy: '#0F2D52',
        },
        neutral: {
          light: '#F5F7FA',
          dark: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
export default config

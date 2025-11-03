import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          DEFAULT: '#00C853',
          50: '#E6FFF0',
          100: '#CCFFE0',
          200: '#99FFC2',
          300: '#66FFA3',
          400: '#33FF85',
          500: '#00C853',
          600: '#00A042',
          700: '#007832',
          800: '#005021',
          900: '#002811',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
        brandPrimary: '#B57A4C', 
        brandSecondary: '#D49B6A',
        brandTextDark: '#4A2B15', 
        brandTextLight: '#FFFFFF', 
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F8F8F8",
            foreground: "#333333",
            primary: {
              DEFAULT: "#B57A4C", 
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#D49B6A", 
              foreground: "#FFFFFF",
            },
            default: {
              DEFAULT: "#FFFFFF",
              foreground: "#333333",
            },
          },
        },
        dark: {
          colors: {
            background: "#121212",
            foreground: "#FAFAFA",
            primary: {
              DEFAULT: "#D49B6A",
              foreground: "#121212",
            },
            secondary: {
              DEFAULT: "#B57A4C",
              foreground: "#FFFFFF",
            },
            default: {
              DEFAULT: "#282828",
              foreground: "#E0E0E0",
            },
          },
        },
      },
    }),
  ],
}

export default config;
import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Playpen"', 'sans-serif']
      }
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: '#e8f6ff',
              100: '#d6edff',
              200: '#b5ddff',
              300: '#88c4ff',
              400: '#5a9cff',
              500: '#3474ff',
              600: '#1248ff',
              700: '#0e41fa',
              800: '#0a36c9',
              900: '#13369c',
              950: '#0b1d5b',
              foreground: '#FFFFFF',
              DEFAULT: '#0e41fa'
            },
          }
        },
        dark: {
          colors: {
            primary: {
              50: '#effcfc',
              100: '#d7f5f6',
              200: '#b4eaed',
              300: '#81dadf',
              400: '#46c1ca',
              500: '#2fb8c5',
              600: '#268594',
              700: '#256c79',
              800: '#265964',
              900: '#234b56',
              950: '#12303a',
              foreground: '#FFFFFF',
              DEFAULT: '#2fb8c5'
            }
          }
        }
      }
    })]
}


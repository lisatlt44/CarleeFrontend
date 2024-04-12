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
        playpen: ['playpen', 'sans-serif'],
        openSans: ['open-sans', 'sans-serif']
      },
      boxShadow: {
        'sidebar': 'rgba(149, 157, 165, 0.08) 0px 8px 24px;',
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
            pink: {
              50: '#fcf3f9',
              100: '#fae9f5',
              200: '#f8d2ec',
              300: '#f2a7d7',
              400: '#ea7cc1',
              500: '#e054a7',
              600: '#ce3487',
              700: '#b2246d',
              800: '#93215a',
              900: '#7b204e',
              950: '#4b0c2b',
              foreground: '#FFFFFF',
              DEFAULT: '#f2a7d7'
            },
            secondary: {
              50: '#fff1f1',
              100: '#ffe1e1',
              200: '#ffc8c8',
              300: '#ffa1a1',
              400: '#fe6060',
              500: '#f73c3c',
              600: '#e41e1e',
              700: '#c01515',
              800: '#9f1515',
              900: '#831919',
              950: '#480707',              
              foreground: '#FFFFFF',
              DEFAULT: '#fe6060'
            }
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
            },
          }
        }
      }
    })]
}


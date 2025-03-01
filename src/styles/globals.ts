import { createStitches } from '@stitches/react'

export const { styled, globalCss, theme, getCssText } = createStitches({
  theme: {
    colors: {
      // Product Colors
      'yellow-dark': '#C47F17',
      yellow: '#DBAC2C',
      'yellow-light': '#F1E9C9',
      'purple-dark': '#4B2995',
      purple: '#8047F8',
      'purple-light': '#EBE5F9',

      // Base Colors
      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',
      background: '#FAFAFA',
      white: '#FFFFFF',
    },
    fonts: {
      title: '"Baloo 2", sans-serif',
      text: '"Roboto", sans-serif',
    },
    fontSizes: {
      'title-xl': '48px',
      'title-l': '32px',
      'title-m': '24px',
      'title-s': '20px',
      'title-xs': '18px',
      'text-l': '20px',
      'text-m': '16px',
      'text-s': '14px',
      'text-xs': '12px',
      tag: '10px',
      'button-g': '14px',
      'button-m': '12px',
    },
    fontWeights: {
      regular: '400',
      bold: '700',
      extraBold: '800',
    },
    lineHeights: {
      normal: '130%',
      button: '160%',
    },
  },
})

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: '$text',
    backgroundColor: '$background',
    color: '$base-text',
  },
})

globalStyles()

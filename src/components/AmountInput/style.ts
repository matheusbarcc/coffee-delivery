import { styled } from '../../styles/globals'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$base-button',
  padding: '.625rem',
  borderRadius: '6px',

  width: '72px',

  fontSize: '$text-m',
  color: '$base-title',

  '& > button': {
    all: 'unset',

    display: 'flex',
    alignItems: 'center',

    color: '$purple',

    '&:hover': {
      color: '$purple-dark',
      cursor: 'pointer',
    },

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})

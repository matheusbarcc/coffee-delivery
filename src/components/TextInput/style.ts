import { styled } from '../../styles/globals'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
})

export const Input = styled('input', {
  background: '$base-input',
  border: '1px solid $base-button',
  padding: '.75rem',
  borderRadius: '4px',

  width: '100%',

  '&::placeholder': {
    fontSize: '$text-s',
    color: '$base-label',
  },

  '&:focus': {
    outline: '0',
    border: '1px solid $yellow-dark',
  },

  variants: {
    hasError: {
      true: {
        borderColor: '#ff0000',
      },
    },
  },
})

export const ErrorMessage = styled('span', {
  marginTop: '.5rem',
  fontSize: '$text-s',
  color: '#c41b1b',
})

import { styled } from '../../styles/globals'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',

  width: '100%',

  background: '$base-button',
  padding: '1rem',
  borderRadius: '6px',
  border: '1px solid transparent',

  fontSize: '$button-m',

  transition: 'background .2s',

  '&:hover': {
    background: '$base-hover',
    cursor: 'pointer',
  },

  '&[data-state=true]': {
    background: '$purple-light',
    border: '1px solid $purple',
  },

  svg: {
    color: '$purple',
  },

  input: {
    display: 'none',
  },
})

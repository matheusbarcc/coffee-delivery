import { styled } from '../../styles/globals'

export const Container = styled('div', {
  background: '$background',
  padding: '2rem 24rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
})

export const Location = styled('div', {
  background: '$purple-light',
  padding: '.5rem',
  borderRadius: '6px',

  display: 'flex',
  alignItems: 'center',
  gap: '.25rem',

  color: '$purple-dark',
  fontSize: '$text-s',

  svg: {
    color: '$purple',
  },
})

export const Cart = styled('button', {
  all: 'unset',
  background: '$yellow-light',
  padding: '.5rem',
  borderRadius: '6px',

  display: 'flex',
  alignItems: 'center',

  color: '$yellow-dark',

  '&:hover': {
    cursor: 'pointer',
  },

  position: 'relative',
})

export const ItemAmount = styled('div', {
  position: 'absolute',
  top: -8,
  right: -8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$yellow-dark',
  fontSize: '$text-s',
  fontWeight: 'bold',
  color: '$white',
  borderRadius: '999px',
  width: '20px',
  height: '20px',
  padding: '.25rem',
})

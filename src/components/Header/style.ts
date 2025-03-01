import { styled } from '../../styles/globals'

export const Container = styled('div', {
  background: '$background',
  padding: '2rem 10rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const Cart = styled('div', {
  background: '$yellow-light',
  padding: '.5rem',
  borderRadius: '6px',

  display: 'flex',
  alignItems: 'center',

  color: '$yellow-dark',
})

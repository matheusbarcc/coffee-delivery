import { styled } from '../../styles/globals'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  marginTop: '2.5rem',
  padding: '6rem 24rem',

  h2: {
    fontFamily: '$title',
    fontSize: '$title-xs',
    color: '$base-subtitle',
    marginBottom: '1rem',
  },
})

export const AddressContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  width: '640px',

  background: '$base-card',
  borderRadius: '6px',
  padding: '2.5rem',
})

export const AddressHeading = styled('div', {
  display: 'flex',
  gap: '.5rem',

  svg: {
    color: '$yellow-dark',
  },

  h3: {
    fontFamily: '$text',
    fontWeight: '$regular',
    fontSize: '$text-m',
    color: '$base-subtitle',
    marginBottom: '.125rem',
  },

  p: {
    fontSize: '$text-s',
    color: '$base-text',
  },
})

export const AddressForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
  },
})

export const Input = styled('input', {
  background: '$base-input',
  border: '1px solid $base-button',
  padding: '.75rem',
  borderRadius: '4px',

  '&::placeholder': {
    fontSize: '$text-s',
    color: '$base-label',
  },

  '&:focus': {
    outline: '0',
    border: '1px solid $yellow-dark',
  },
})

export const PaymentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  width: '640px',
  marginTop: '.75rem',

  background: '$base-card',
  borderRadius: '6px',
  padding: '2.5rem',
})

export const PaymentHeading = styled('div', {
  display: 'flex',
  gap: '.5rem',

  svg: {
    color: '$purple',
  },

  h3: {
    fontFamily: '$text',
    fontWeight: '$regular',
    fontSize: '$text-m',
    color: '$base-subtitle',
    marginBottom: '.125rem',
  },

  p: {
    fontSize: '$text-s',
    color: '$base-text',
  },
})

export const PaymentRadioForm = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',

  width: '100%',
})

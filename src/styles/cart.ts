import { styled } from './globals'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',

  marginTop: '2.5rem',
  padding: '6rem 24rem',

  '& > div': {
    width: '100%',
  },

  h2: {
    fontFamily: '$title',
    fontSize: '$title-xs',
    color: '$base-subtitle',
    marginBottom: '1rem',
  },

  '@media(max-width: 1500px)': {
    padding: '2rem 16rem',
    gap: '1rem',
  },

  '@media(max-width: 1300px)': {
    gridTemplateColumns: '1fr',
  },

  '@media(max-width: 1080px)': {
    padding: '2rem 8rem',
  },

  '@media(max-width: 650px)': {
    padding: '2rem 4rem',
  },

  '@media(max-width: 400px)': {
    padding: '2rem 2rem',
  },
})

export const AddressContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  width: '100%',

  background: '$base-card',
  borderRadius: '6px',
  padding: '2.5rem',

  '@media(max-width: 650px)': {
    padding: '1rem',
  },
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

  '@media(max-width: 650px)': {
    h3: {
      fontSize: '$text-s',
    },
    p: {
      fontSize: '$text-xs',
    },
  },
})

export const AddressForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '& > div:not(:last-child)': {
    display: 'grid',
    gap: '.75rem',
    marginBottom: '1rem',
  },

  '& > div:last-child': {
    display: 'grid',
    gap: '.75rem',
  },

  '& > div.text-input-container': {
    marginBottom: '1rem',
  },
})

export const NumberComplementContainer = styled('div', {
  gridTemplateColumns: '100px auto',
})

export const NeighborhoodCityUFContainer = styled('div', {
  gridTemplateColumns: 'auto auto 75px',

  '@media(max-width: 650px)': {
    gridTemplateColumns: 'auto auto',
  },
})

export const PaymentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  width: '100%',
  marginTop: '.75rem',

  background: '$base-card',
  borderRadius: '6px',
  padding: '2.5rem',

  '& > div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '.125rem',
  },

  '@media(max-width: 650px)': {
    padding: '1rem',
  },
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

  '@media(max-width: 650px)': {
    h3: {
      fontSize: '$text-s',
    },
    p: {
      fontSize: '$text-xs',
    },
  },
})

export const PaymentRadioForm = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '.75rem',

  width: '100%',

  '@media(max-width: 1500px)': {
    gridTemplateColumns: '1fr',
  },
})

export const CartSummaryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',

  background: '$base-card',
  padding: '2.5rem',
  borderRadius: '6px 36px 6px 36px',

  '@media(max-width: 650px)': {
    padding: '1rem',
  },
})

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  paddingBottom: '1.5rem',
  borderBottom: '1px solid $base-button',

  '& > img': {
    width: '64px',
    height: '64px',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',

    width: '100%',
  },
})

export const CartItemInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',

  fontSize: '$text-m',
  color: '$base-subtitle',

  span: {
    fontWeight: 'bold',
    color: '$base-text',
  },
})
export const CartItemActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',

  '& > button': {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '.25rem',

    background: '$base-button',
    padding: '.625rem',
    borderRadius: '6px',

    fontSize: '$button-m',
    color: '$base-text',

    svg: {
      color: '$purple',
    },

    transition: 'background .2s',

    '&:hover': {
      background: '$base-hover',
      cursor: 'pointer',
    },
  },
})

export const Subtotal = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',

  fontSize: '$text-s',
  color: '$base-text',

  width: '100%',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > span': {
      fontSize: '$text-m',
    },
  },

  '& > div:last-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    fontSize: '$text-l',
    fontWeight: '$bold',
    color: '$base-subtitle',

    '& > span': {
      fontSize: '$text-l',
    },
  },
})

export const ConfirmButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',

  background: '$yellow',
  padding: '.75rem',
  borderRadius: '6px',

  fontSize: '$button-g',
  fontWeight: 'bold',
  color: '$white',

  transition: 'background .2s, gap .2s',

  '&:not(:disabled):hover': {
    background: '$yellow-dark',
    cursor: 'pointer',
    gap: '1rem',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const ChangeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem',

  marginTop: '1rem',
  marginLeft: 'auto',

  fontSize: '$text-s',
  fontWeight: 'bold',
})

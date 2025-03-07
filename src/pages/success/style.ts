import { styled } from '../../styles/globals'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  marginTop: '5rem',
  padding: '6rem 24rem',
})

export const Heading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem',

  '& > h1': {
    fontFamily: '$title',
    fontSize: '$title-l',
    color: '$yellow-dark',
  },

  '& > p': {
    fontFamily: '$text',
    fontSize: '$text-l',
    color: '$base-subtitle',
  },
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6.25rem',
})

export const OrderSummary = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '570px',

  border: 'none',
  backgroundColor: '$background',
  padding: '2.5rem',
  borderRadius: '6px 36px',

  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    height: '101%',
    width: '100.5%',
    borderRadius: '6px 36px',
    backgroundImage: 'linear-gradient(to bottom right, $yellow, $purple)',
    zIndex: '-1',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
})

export const SummaryItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',

  fontSize: '$text-m',

  svg: {
    borderRadius: '999px',
    padding: '.5rem',
  },

  span: {
    fontWeight: 'bold',
  },
})

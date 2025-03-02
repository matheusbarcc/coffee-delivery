import { styled } from '../../styles/globals'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '256px',
  textAlign: 'center',

  background: '$base-card',
  padding: '0 1.25rem 1.25rem',
  borderRadius: '6px 36px 6px 36px',

  img: {
    marginTop: '-2rem',
  },
})

export const TagsContainer = styled('div', {
  display: 'flex',
  gap: '.25rem',

  marginTop: '.75rem',
  marginBottom: '1rem',
})

export const Tag = styled('div', {
  display: 'flex',
  alignItems: 'center',

  color: '$yellow-dark',
  background: '$yellow-light',
  padding: '.25rem .5rem',
  borderRadius: '999px',

  fontSize: '$tag',
  fontWeight: 'bold',
})

export const Heading = styled('div', {
  h2: {
    fontFamily: '$title',
    fontSize: '$title-s',
    color: '$base-subtitle',
  },

  p: {
    fontFamily: '$text',
    fontSize: '$text-s',
    color: '$base-label',
  },
})

export const Footer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  marginTop: '2rem',
})

export const PriceTag = styled('div', {
  fontSize: '$text-s',

  '& > span': {
    fontFamily: '$title',
    fontSize: '$title-m',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',

  '& > button': {
    all: 'unset',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$purple-dark',
    padding: '.5rem',
    color: '$background',
    borderRadius: '6px',

    '&:hover': {
      background: '$purple',
      cursor: 'pointer',
    },
  },
})

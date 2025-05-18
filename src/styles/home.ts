import { styled } from './globals'

export const Hero = styled('div', {
  position: 'relative',

  '& #hero-bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    maxHeight: '544px',
    width: '100%',
  },
})

export const HeroContent = styled('div', {
  padding: '6rem 24rem',

  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',
})

export const Heading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  marginBottom: '4rem',

  h1: {
    fontFamily: '$title',
    fontSize: '$title-xl',
    color: '$base-title',
    lineHeight: '$normal',
  },

  p: {
    fontFamily: '$text',
    fontSize: '$text-l',
    color: '$base-subtitle',
    lineHeight: '$normal',
  },
})

export const Items = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: '1.25rem',

  '& > div': {
    fontSize: '$text-m',
    color: '$base-text',

    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',

    svg: {
      padding: '.5rem',
      borderRadius: '999px',
    },
  },
})

export const CoffeeList = styled('div', {
  padding: '2rem 24rem',

  '& > h2': {
    fontFamily: '$title',
    fontSize: '$title-l',
    color: '$base-subtitle',
    lineHeight: '$normal',
    marginBottom: '3.375rem',
  },
  '& > div': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '1rem',
    rowGap: '3rem',
    gridColumnGap: '2rem',
  },
})

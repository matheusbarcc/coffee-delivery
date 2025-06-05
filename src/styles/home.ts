import { styled } from './globals'

export const Hero = styled('div', {
  position: 'relative',

  '& #hero-bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
  },
})

export const HeroContent = styled('div', {
  padding: '6rem 24rem',

  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',

  '& #hero-img': {
    '@media(max-width: 1700px)': {
      width: '1000px',
      height: 'auto',
    },

    '@media(max-width: 1300px)': {
      display: 'none',
    },
  },

  '@media(max-width: 1500px)': {
    padding: '2rem 16rem',
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

  '@media(max-width: 650px)': {
    marginBottom: '2rem',
    h1: {
      fontSize: '$title-l',
    },
    p: {
      fontSize: '$text-m',
    },
  },
})

export const Items = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: '1.25rem',

  '@media(max-width: 550px)': {
    gridTemplateColumns: '1fr',
  },

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

    '@media(max-width: 650px)': {
      fontSize: '$text-s',
    },

    '@media(max-width: 450px)': {
      fontSize: '$text-xs',
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

    '@media(max-width: 1500px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },

    '@media(max-width: 1080px)': {
      gridTemplateColumns: '1fr 1fr',
    },

    '@media(max-width: 650px)': {
      gridTemplateColumns: '1fr',
    },
  },

  '@media(max-width: 1500px)': {
    padding: '2rem 16rem',
  },

  '@media(max-width: 1080px)': {
    padding: '2rem 8rem',
  },

  '@media(max-width: 650px)': {
    padding: '2rem 4rem',
  },
})

import { styled } from './globals'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  marginTop: '5rem',
  padding: '6rem 24rem',

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

  '& > button': {
    all: 'unset',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.75rem',

    marginTop: '2rem',
    maxWidth: '300px',

    background: '$yellow',
    padding: '1rem',
    borderRadius: '6px',

    fontWeight: 'bold',
    color: '$white',

    transition: 'background .2s, gap .2s',

    '&:hover': {
      background: '$yellow-dark',
      cursor: 'pointer',
      gap: '1.125rem',
    },
  },

  '@media(max-width: 500px)': {
    '& > h1': {
      fontSize: '$title-m',
    },
    '& > p': {
      fontSize: '$text-s',
    },
  },
})

export const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: '500px auto',
  alignItems: 'center',
  gap: '6.25rem',

  '@media(max-width: 1700px)': {
    gridTemplateColumns: '400px auto',
    gap: '4rem',
  },

  '@media(max-width: 1400px)': {
    gap: '2rem',
    '& #illustration-img': {
      width: '400px',
    },
  },

  '@media(max-width: 1250px)': {
    gap: '1rem',
    '& #illustration-img': {
      width: '330px',
    },
  },

  '@media(max-width: 950px)': {
    gridTemplateColumns: 'auto',
    justifyItems: 'center',
  },
})

export const OrderSummary = styled('div', {
  display: 'flex',
  alignItems: 'center',

  width: '100%',

  border: 'none',
  backgroundColor: '$background',
  padding: '2.5rem',
  borderRadius: '6px 36px',

  position: 'relative',

  '&::after': {
    content: '',
    left: -2,
    position: 'absolute',
    height: '101%',
    width: '100.7%',
    borderRadius: '6px 36px',
    backgroundImage: 'linear-gradient(to bottom right, $yellow, $purple)',
    zIndex: '-1',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },

  '@media(max-width: 500px)': {
    padding: '1.5rem',
  },
})

export const SummaryItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  fontSize: '$text-m',

  svg: {
    borderRadius: '999px',
    padding: '.5rem',
  },

  span: {
    fontWeight: 'bold',
  },

  '@media(max-width: 650px)': {
    fontSize: '$text-s',
  },
})

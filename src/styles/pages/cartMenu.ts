import { styled } from '..'

export const CartMenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '4.5rem 3rem 3rem',
  height: '100%',

  'button#closeButton': {
    position: 'absolute',
    top: 24,
    right: 24,
    background: 'transparent',
    border: 'none',

    color: '$gray300',

    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(0.8)',
      transition: 'brightness 0.2',
    },
  },
})

export const CartMenuFooter = styled('footer', {
  marginTop: 'auto',

  div: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&+div': {
      marginTop: '0.25rem',
    },

    '&:first-child': {
      'span:first-child': {
        color: '$gray100',
      },
      span: {
        color: '$gray300',
      },
    },
  },

  '&:last-child': {
    strong: {
      color: '$gray100',
      fontSize: '$md',
    },
    'strong:last-child': {
      fontSize: '$xl',
    },
  },

  button: {
    width: '100%',
    padding: '1.25rem 2rem',
    marginTop: '3.25rem',

    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',

    border: 'none',
    background: '$green500',

    borderRadius: 8,

    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(0.8)',
      transition: 'filter 0.2s',
    },
  },
})

export const ProductCardContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  width: '100%',

  '.imageContainer': {
    content: ' ',
    height: '100%',
    width: 'fit-content',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  div: {
    width: '100%',
    p: {
      color: '$gray300',
      fontSize: '$md',
    },

    strong: {
      display: 'block',
      marginTop: '0.5rem',
      color: '$gray100',
      fontSize: '$md',
    },
  },
})

export const ProductCardFooter = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1.5rem',
  width: '100%',

  button: {
    background: 'transparent',
    color: '$green500',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',

    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(0.8)',
      transition: 'filter 0.2s',
    },
  },
})

export const AmountController = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  flex: 1,
  button: {
    background: 'transparent',
    color: '$green500',
    border: 'none',
  },
})

export const ProductCardsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
})

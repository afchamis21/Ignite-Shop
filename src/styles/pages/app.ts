import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  img: {
    cursor: 'pointer',
  },
})

export const CartMenuContainer = styled('div', {
  position: 'absolute',
  background: '$gray800',
  height: '100vh',
  width: '30rem',
  right: 0,
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8);',
})

export const CartButton = styled('button', {
  position: 'relative',
  background: '$gray800',
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  border: 'none',

  color: '$gray100',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.9)',

    transition: 'filter 0.2s',
  },

  span: {
    position: 'absolute',
    top: 0,
    right: 0,

    background: '$green500',
    width: 24,
    height: 24,
    borderRadius: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1',

    transform: 'translateX(50%) translateY(-50%)',
    border: '3px solid $gray900',
  },
})

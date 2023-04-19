import { styled } from '..'

export const ContainerSignIn = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh',
  padding: '$5',
})

export const ColumnTwo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  h1: {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$2xl',
    lineHeight: '$short',
    color: '$gray100',
  },
  p: {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$md',
    lineHeight: '$base',
    color: '$gray200',
  },
})

export const OptionsSignIn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$4',
})

export const Option = styled('button', {
  backgroundColor: '$gray600',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$5',
  padding: '1.25rem 1.5rem',
  textDecoration: 'none',
  width: '23.25rem',
  borderRadius: '8px',
  strong: {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$lg',
    lineHeight: '$base',
    color: '$gray200',
  },
  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

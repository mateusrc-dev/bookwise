import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'flex-start',
  height: '100vh',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: 15,
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$green300',
    borderRadius: 10,
    width: 0,
    backgroundClip: 'padding-box',
    border: '3px solid transparent',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '$green200',
    width: 0,
    borderRadius: 10,
    backgroundClip: 'padding-box',
    border: '3px solid transparent',
  },
})

export const BodyContainer = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

export const HeaderHome = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$3',
  h1: {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$2xl',
    lineHeight: '$short',
    color: '$gray100',
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
})

export const FirstColumn = styled('div', {})

export const SecondColumn = styled('div', {})

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
  '.modal': {
    width: '100%',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    minHeight: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    '.modalContent': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 'auto',
      background: '$gray800',
      height: '100vh',
      overflow: 'auto',
      width: '41.25rem',
      padding: '4rem 3rem',
      boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.5)',
      '.close': {
        position: 'absolute',
        top: '1rem',
        right: '2.5rem',
        background: 'none',
        border: 'none',
      },
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
    },
  },
  '.modalLogin': {
    width: '100%',
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
    minHeight: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '.modalContentLogin': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3.5rem 4.5rem',
      gap: '$10',
      width: '32.25rem',
      height: '21rem',
      backgroundColor: '$gray700',
      boxShadow: `4px 16px 24px rgba(0, 0, 0, 0.25)`,
      borderRadius: '12px',
      position: 'relative',
      '.close': {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
      },
    },
  },
  '.none': {
    display: 'none',
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

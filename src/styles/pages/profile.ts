import { styled } from '..'

export const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
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

export const ContentProfile = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  width: '100%',
})

export const SecondColumn = styled('div', {
  width: '39rem',
})

export const ThirdColumn = styled('div', {
  width: '19.25rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

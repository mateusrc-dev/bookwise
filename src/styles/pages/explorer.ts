import Link from 'next/link'
import { styled } from '..'

export const ExplorerContainer = styled('div', {
  display: 'flex',
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
      maxHeight: '100vh',
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

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '26rem',
})

export const HeaderHome = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
  h1: {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$2xl',
    lineHeight: '$short',
    color: '$gray100',
  },
})

export const ExplorerContent = styled('div', {
  margin: '4.5rem auto 0',
  width: '62.25rem',
})

export const TagsContainer = styled('div', {
  marginTop: '2.5rem',
  marginBottom: '3rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
})

export const CardsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  flexWrap: 'wrap',
})

export const DetailsBookModal = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1.5rem 2rem 1rem',
  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const Stars = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
})

export const ToAssess = styled('div', {
  fontFamily: 'Nunito Sans',
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: '160%',
  color: '#8381D9',
  border: `1px solid transparent`,
  cursor: 'pointer',
  '&:hover': {
    borderBottomColor: '#8381D9',
  },
})

export const ContainerComments = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.75rem',
})

export const OptionsSignIn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$4',
})

export const Option = styled(Link, {
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

export const CreateNewComment = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1.5rem',
  gap: '1.5rem',
  width: '35.25rem',
  background: '$gray700',
  borderRadius: '8px',
})

export const HeaderOfCreateNewComment = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const TextArea = styled('div', {
  position: 'relative',
  textarea: {
    padding: '0.875rem 1.25rem',
    gap: '8px',
    width: '32.25rem',
    height: '10.25rem',
    backgroundColor: '#0E1116',
    border: `1px solid #303F73`,
    borderRadius: '4px',
    color: '$gray200',
    resize: 'none',
    '&::placeholder': {
      color: '#8D95AF',
    },
    '&:focus': {
      borderColor: '#255D6A',
      outline: 0,
    },
  },
  span: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '0.75rem',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const ButtonsComment = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  gap: '0.5rem',
})

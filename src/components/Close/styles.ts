import { styled } from '@/styles'

export const CloseContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: '$gray600',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '$gray500',
  },
})

export const CloseContainerWithoutBackground = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  '&:hover': {
    filter: 'brightness(0.7)',
  },
})

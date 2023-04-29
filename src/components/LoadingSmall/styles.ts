import { keyframes, styled } from '@/styles'

const isRotating = keyframes({
  to: {
    transform: 'rotate(1turn)',
  },
})

export const Container = styled('div', {
  '.Loading': {
    width: '20px',
    height: '20px',
    border: '5px solid $gray100',
    borderTopColor: '$gray800',
    borderRadius: '50%',
    animation: `${isRotating} 1s infinite`,
  },
})

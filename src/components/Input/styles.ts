import { styled } from '@/styles'

export const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  '.icon': {
    position: 'absolute',
    top: '14px',
    right: '20px',
    bottom: '14px',
  },
  input: {
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$gray500',
    borderRadius: '4px',
    padding: '14px 48px 14px 20px',
    backgroundColor: 'transparent',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray200',
    '&:focus': {
      borderColor: '#255D6A',
      outline: 0,
    },
    '&::placeholder': {
      color: '#8D95AF',
    },
  },
})

import { styled } from '@/styles'

export const LinkContainer = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  padding: '$2',
  borderRadius: '4px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  p: {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: '$base',
  },
  '&:hover': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '$2',
    backgroundColor: 'rgba(230, 232, 242, 0.04)',
    borderRadius: '4px',
  },
})

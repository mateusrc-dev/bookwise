import { styled } from '@/styles'
import Link from 'next/link'

export const LinkContainer = styled(Link, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroudColor: 'transparent',
  textDecoration: 'none',
  justifyContent: 'center',
  padding: '$2',
  borderRadius: '4px',
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

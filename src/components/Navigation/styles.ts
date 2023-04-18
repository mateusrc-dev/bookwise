import { styled } from '@/styles'
import Link from 'next/link'

interface Props {
  variant: boolean
}

export const NavigationContainer = styled(Link, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$3',
  alignItems: 'center',
  padding: '0 $5',
  justifyContent: 'flex-start',
  textDecoration: 'none',
  filter: 'var(--selected)',
  p: {
    color: '$gray100',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$md',
    lineHeight: '$base',
  },
  '&:hover': {
    filter: 'brightness(1)',
  },
})

export const Div = styled('div', {
  position: 'absolute',
  left: 0,
  minWidth: '4px',
  backgroundImage: '$gradient-vertical',
  height: '1.5rem',
  borderRadius: '99999999px',
})

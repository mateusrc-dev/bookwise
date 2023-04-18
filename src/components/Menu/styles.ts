import { styled } from '@/styles'
import Link from 'next/link'

export const MenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2.5rem 3.25rem',
  width: '15.75rem',
  height: '61.75rem',
  borderRadius: '0.75rem',
  backgroundSize: 'auto',
  backgroundImage: `radial-gradient(circle, rgba(38,49,84,1) 0%, rgba(32,41,67,1) 20%, rgba(30,37,59,1) 35%, rgba(25,30,45,1) 49%, rgba(24,28,42,1) 100%)`,
  backgroundRepeat: 'repeat',
  backgroundPositionY: '-480px',
})

export const LinkLogout = styled(Link, {
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  textDecoration: 'none',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$gray200',
  '&:hover': {
    filter: 'brightness(0.7)',
  },
})

export const ContainerNavigation = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '1.5rem',
})

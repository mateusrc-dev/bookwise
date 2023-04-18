import { styled } from '@/styles'
import Image from 'next/image'
import Link from 'next/link'

export const ContainerCard = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '1.25rem 1.5rem',
  gap: '1.5rem',
  width: 'var(--type-card-width)',
  height: 'var(--type-card-height)',
  background: 'var(--type-card-background)',
  borderRadius: '8px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '$gray500',
  },
})

export const ContainerCardWithUser = styled('button', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1.25rem 1.5rem',
  gap: '1.5rem',
  width: 'var(--type-card-width)',
  background: 'var(--type-card-background)',
  borderRadius: '8px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'transparent',
})

export const ImageColumn = styled(Image, {
  width: 'var(--type-image-width)',
  height: 'var(--type-image-height)',
  borderRadius: '4px',
})

export const DetailsColumn = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})

export const HeaderCard = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
  span: {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '0.875rem',
    lineHeight: '$base',
    color: '$gray300',
  },
})

export const Stars = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
})

export const DetailsBook = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  h1: {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: '$short',
    color: '$gray100',
  },
  '.author': {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
    marginBottom: '1.875rem',
  },
  '.description': {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',
    textAlign: 'left',
  },
})

export const DetailsBookWithUser = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  h1: {
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: '$short',
    color: '$gray100',
  },
  '.author': {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
    marginBottom: '1.875rem',
  },
  '.description': {
    display: 'var(--show-text)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',
    textAlign: 'left',
  },
})

export const HeaderWithUser = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const BodyWithUser = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.25rem',
})

export const ShowMoreText = styled('a', {
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$purple100',
  '&:hover': {
    borderBottomColor: '$purple100',
  },
})

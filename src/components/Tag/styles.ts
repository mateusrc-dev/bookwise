import { styled } from '@/styles'

export const TagContainer = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.25rem 1rem',
  gap: '$2',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--selected-border-color)',
  borderRadius: '999px',
  backgroundColor: 'var(--selected-background)',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$md',
  lineHeight: '$base',
  color: 'var(--selected-color)',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#8381D9',
  },
})

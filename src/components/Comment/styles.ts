import { styled } from '@/styles'

export const CommentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '$6',
  gap: '$5',
  width: '35.25rem',
  height: '11.125rem',
  background: 'var(--color-comment)',
  borderRadius: '8px',
})

export const HeaderComment = styled('header', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const BodyComment = styled('p', {
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  '-webkit-line-clamp': 3,
  '-webkit-box-orient': 'vertical',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray300',
  textAlign: 'left',
})

export const Stars = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
})

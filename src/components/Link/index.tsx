import { CaretRight, CaretLeft } from 'phosphor-react'
import { LinkContainer } from './styles'

type LinkProps = {
  title: string
  direction?: 'right' | 'left'
  Color?: 'white' | 'blue'
}

export default function Link({
  title,
  direction = 'left',
  Color = 'white',
}: LinkProps) {
  return (
    <LinkContainer
      style={direction === 'right' ? { gap: '8px' } : { gap: '12px' }}
      href=""
    >
      {direction === 'left' && <CaretLeft size={20} color="#E6E8F2" />}
      <p
        style={
          Color === 'white'
            ? { color: '#E6E8F2', fontSize: '14px' }
            : { color: '#8381D9', fontSize: '16px' }
        }
      >
        {title}
      </p>
      {direction === 'right' && <CaretRight size={16} color="#8381D9" />}
    </LinkContainer>
  )
}

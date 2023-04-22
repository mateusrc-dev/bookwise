import Image from 'next/image'
import { CardProfileContainer, HeaderCard } from './styles'
import { Stars } from '../Card/styles'
import { Star } from 'phosphor-react'

type Props = {
  assessment: number
  image?: string | undefined
  name?: string
  author?: string
  description?: string
}

export default function CardProfile({
  assessment,
  image = '',
  name = '',
  author = '',
  description = '',
}: Props) {
  return (
    <CardProfileContainer>
      <HeaderCard>
        <Image
          src={image}
          alt="Imagem do livro"
          width={98}
          height={134}
          style={{ borderRadius: '4px' }}
        />
        <div>
          <h3
            style={{
              fontFamily: 'Nunito Sans',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '140%',
              color: '#F8F9FC',
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '160%',
              color: '#8D95AF',
              marginBottom: '3.8125rem',
            }}
          >
            {author}
          </p>
          {assessment === 1 && (
            <Stars>
              <Star size={16} color="#8381D9" weight="fill" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 2 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 3 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 4 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 5 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
            </Stars>
          )}
        </div>
      </HeaderCard>
      <div style={{ marginTop: '1.5rem' }}>
        <span
          style={{
            fontFamily: 'Nunito Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '160%',
            color: '#D1D6E4',
          }}
        >
          {description}
        </span>
      </div>
    </CardProfileContainer>
  )
}

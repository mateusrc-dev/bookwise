import Image from 'next/image'
import { CardProfileContainer, HeaderCard } from './styles'
import { Stars } from '../Card/styles'
import { Star } from 'phosphor-react'
import ImageTest from '../../assets/fragmentos-do-horror.png'

type Props = {
  assessment: number
}

export default function CardProfile({ assessment }: Props) {
  return (
    <CardProfileContainer>
      <HeaderCard>
        <Image
          src={ImageTest}
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
            Entendendo Algoritmos
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
            Aditya Bhargava
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          perspiciatis similique itaque neque ratione consectetur nesciunt
          tenetur aperiam rem! Fugiat mollitia autem recusandae sint quos rem
          pariatur architecto dolorum eos. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Inventore aperiam veniam ut ad
          deleniti, a ducimus, laborum alias harum, quia reprehenderit aut
          exercitationem ratione voluptas accusamus accusantium adipisci
          deserunt nam.
        </span>
      </div>
    </CardProfileContainer>
  )
}

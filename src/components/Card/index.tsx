import Image, { StaticImageData } from 'next/image'
import {
  BodyWithUser,
  ContainerCard,
  ContainerCardWithUser,
  DetailsBook,
  DetailsBookWithUser,
  DetailsColumn,
  HeaderCard,
  HeaderWithUser,
  ImageColumn,
  ShowMoreText,
  Stars,
} from './styles'
import { Star } from 'phosphor-react'
import ImageTest from '../../assets/entendendo-algoritmos.png'
import { useState } from 'react'
// import ShowMore from "react-show-more";

type Props = {
  src: StaticImageData
  assessment: number
  nameBook: string
  author: string
  description?: string
  type?: 'big' | 'small'
  cardWithUser?: boolean
  userName?: string
  userImage?: StaticImageData
  onClickCard?: () => void
}

export default function Card({
  src,
  nameBook,
  author,
  description = "Passe a propriedade 'description' para inserir uma descrição desse filme!",
  assessment,
  userName = "Passe a propriedade 'userName' para inserir o nome do usuário!",
  type = 'big',
  cardWithUser = false,
  userImage = ImageTest,
  onClickCard = () => {},
}: Props) {
  const [showText, setShowText] = useState<boolean>(true)

  function handleShowMoreText() {
    if (showText === true) {
      setShowText(false)
    } else {
      setShowText(true)
    }
  }

  if (type === 'big') {
    return cardWithUser ? (
      <ContainerCardWithUser
        css={{
          '--type-card-width': '37.5rem',
          '--type-card-height': '17.5rem',
          '--type-card-background': '#181C2A',
        }}
        onClick={onClickCard}
      >
        <HeaderWithUser>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 43,
                height: 43,
                backgroundImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
                borderRadius: '9999px',
              }}
            >
              <Image
                src={userImage}
                alt="imagem do usuário"
                width={40}
                height={40}
                style={{ borderRadius: '100%' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '160%',
                  color: '#F8F9FC',
                }}
              >
                {userName}
              </span>
              <span
                style={{
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#8D95AF',
                }}
              >
                Hoje
              </span>
            </div>
          </div>
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
        </HeaderWithUser>
        <BodyWithUser>
          <ImageColumn
            src={src}
            alt="imagem do livro"
            css={{
              '--type-image-width': type === 'big' ? '6.75rem' : '4rem',
              '--type-image-height': type === 'big' ? '9.5rem' : '5.875rem',
            }}
          />
          <DetailsColumn>
            <DetailsBookWithUser
              css={{ '--show-text': showText ? '-webkit-box' : 'flex' }}
            >
              <h1>{nameBook}</h1>
              <p style={{ marginBottom: '20px' }} className="author">
                {author}
              </p>
              {description.length > 262 && showText ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <span className="description">
                    {description.slice(0, -50)}...{' '}
                    {showText && (
                      <ShowMoreText onClick={handleShowMoreText}>
                        ver mais
                      </ShowMoreText>
                    )}
                  </span>
                </div>
              ) : (
                <span
                  className="description"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                  }}
                >
                  {description}{' '}
                  {!showText && (
                    <ShowMoreText onClick={handleShowMoreText}>
                      ver menos
                    </ShowMoreText>
                  )}
                </span>
              )}
            </DetailsBookWithUser>
          </DetailsColumn>
        </BodyWithUser>
      </ContainerCardWithUser>
    ) : (
      <ContainerCard
        css={{
          '--type-card-width': type === 'big' ? '37.5rem' : '19.25rem',
          '--type-card-height': type === 'big' ? '12rem' : '8.125rem',
          '--type-card-background': type === 'big' ? '#252D4A' : '#181C2A',
        }}
        onClick={onClickCard}
      >
        <ImageColumn
          src={src}
          alt="imagem do livro"
          css={{
            '--type-image-width': type === 'big' ? '6.75rem' : '4rem',
            '--type-image-height': type === 'big' ? '9.5rem' : '5.875rem',
          }}
        />
        <DetailsColumn>
          <HeaderCard>
            <span>Hoje</span>
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
          </HeaderCard>
          <DetailsBook>
            <h1>{nameBook}</h1>
            <p className="author">{author}</p>
            <p className="description">{description}</p>
          </DetailsBook>
        </DetailsColumn>
      </ContainerCard>
    )
  } else {
    return (
      <ContainerCard
        css={{
          '--type-card-width': type === 'small' ? '19.25rem' : '37.5rem',
          '--type-card-height': type === 'small' ? '8.125rem' : '12rem',
          '--type-card-background': type === 'small' ? '#181C2A' : '#252D4A',
        }}
        onClick={onClickCard}
      >
        <ImageColumn
          src={src}
          alt="imagem do livro"
          css={{
            '--type-image-width': type === 'small' ? '4rem' : '6.75rem',
            '--type-image-height': type === 'small' ? '5.875rem' : '9.5rem',
          }}
        />
        <DetailsColumn>
          <DetailsBook>
            <h1>{nameBook}</h1>
            <p className="author">{author}</p>
          </DetailsBook>

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
        </DetailsColumn>
      </ContainerCard>
    )
  }
}

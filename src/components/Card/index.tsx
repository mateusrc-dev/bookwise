import Image from 'next/image'
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
} from './styles'
import { ReactNode, useState } from 'react'
import StarsComponent from '../Stars'
import { Stars } from '../Stars/styles'
import { Star } from 'phosphor-react'
// import ShowMore from "react-show-more";

type Props = {
  src: string | undefined
  assessment: number
  nameBook: string
  author: string
  description?: string
  type?: 'big' | 'small'
  cardWithUser?: boolean
  userName?: string
  userImage?: string | undefined
  onClickCard?: (id: string) => void
  idBook?: string | undefined
  date: ReactNode
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
  userImage,
  onClickCard = () => {},
  idBook = '',
  date,
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
        onClick={() => onClickCard(idBook)}
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
              {userImage !== undefined && (
                <Image
                  src={userImage}
                  alt="imagem do usuário"
                  width={40}
                  height={40}
                  quality={100}
                  style={{ borderRadius: '100%' }}
                />
              )}
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
                {date}
              </span>
            </div>
          </div>
          {idBook.length === 0 && (
            <>
              {' '}
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
            </>
          )}
          {idBook.length !== 0 && <StarsComponent idBook={idBook} />}
        </HeaderWithUser>
        <BodyWithUser>
          {src !== undefined && (
            <ImageColumn
              src={src}
              alt="imagem do livro"
              width={type === 'big' ? 108 : 64}
              height={type === 'big' ? 152 : 94}
              quality={100}
            />
          )}
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
                    {description.slice(0, 230)}...
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
        onClick={() => onClickCard(idBook)}
      >
        {src !== undefined && (
          <ImageColumn
            src={src}
            alt="imagem do livro"
            width={type === 'big' ? 108 : 64}
            height={type === 'big' ? 152 : 94}
            quality={100}
          />
        )}
        <DetailsColumn>
          <HeaderCard>
            <span>{date}</span>
            {idBook.length === 0 && (
              <>
                {' '}
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
              </>
            )}
            {idBook.length !== 0 && <StarsComponent idBook={idBook} />}
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
          '--type-card-height': type === 'small' ? '9.125rem' : '12rem',
          '--type-card-background': type === 'small' ? '#181C2A' : '#252D4A',
        }}
        onClick={() => onClickCard(idBook)}
      >
        {src !== undefined && (
          <ImageColumn
            src={src}
            alt="imagem do livro"
            width={type === 'small' ? 64 : 108}
            height={type === 'small' ? 94 : 152}
            quality={100}
          />
        )}
        <DetailsColumn>
          <DetailsBook>
            <h1>{nameBook}</h1>
            <p className="author">{author}</p>
          </DetailsBook>

          {idBook.length === 0 && (
            <>
              {' '}
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
            </>
          )}
          {idBook.length !== 0 && <StarsComponent idBook={idBook} />}
        </DetailsColumn>
      </ContainerCard>
    )
  }
}

import Image from 'next/image'
import { BodyComment, CommentContainer, HeaderComment, Stars } from './styles'
import { Star } from 'phosphor-react'
import { ReactNode } from 'react'

type Props = {
  userImage: string | undefined
  userName: string | undefined
  assessmentProp: number | undefined
  description: string | undefined
  commentUser?: boolean
  date: ReactNode
}

export default function Comment({
  userImage = '',
  userName = '',
  assessmentProp = 0,
  description = '',
  commentUser = false,
  date,
}: Props) {
  return (
    <CommentContainer
      css={{ '--color-comment': commentUser ? '#252D4A' : '#181C2A' }}
    >
      <HeaderComment>
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
              {date}
            </span>
          </div>
        </div>
        {assessmentProp === 0 && (
          <Stars>
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
          </Stars>
        )}
        {assessmentProp === 1 && (
          <Stars>
            <Star size={20} color="#8381D9" weight="fill" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
          </Stars>
        )}
        {assessmentProp === 2 && (
          <Stars>
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
          </Stars>
        )}
        {assessmentProp === 3 && (
          <Stars>
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
          </Stars>
        )}
        {assessmentProp === 4 && (
          <Stars>
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star size={20} color="#8381D9" />
          </Stars>
        )}
        {assessmentProp === 5 && (
          <Stars>
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
            <Star weight="fill" size={20} color="#8381D9" />
          </Stars>
        )}
      </HeaderComment>
      <BodyComment>{description}</BodyComment>
    </CommentContainer>
  )
}

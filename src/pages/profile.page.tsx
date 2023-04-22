import Menu from '@/components/Menu'
import {
  ContentProfile,
  ProfileContainer,
  SecondColumn,
  ThirdColumn,
} from '@/styles/pages/profile'
import { BookOpen, BookmarkSimple, Books, User, UserList } from 'phosphor-react'
import Input from '@/components/Input'
import CardProfile from '@/components/CardProfile'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'

type UserProps = {
  avatar_url: string
  created_at: string
  email: string
  id: string
  name: string
}

type RatingsUser = {
  book: {
    author: string
    categories: {
      book_id: string
      categoryId: string
    }[]
    cover_url: string
    created_at: string
    id: string
    name: string
    summary: string
    total_pages: number
  }
  book_id: string
  created_at: string
  description: string
  id: string
  rate: number
  user_id: string
}

export default function Profile() {
  const [user, setUser] = useState<UserProps>()
  const [ratingsUser, setRatingsUser] = useState<RatingsUser[]>([])

  useEffect(() => {
    async function handleFindUser() {
      const userDetails = await api.get('/users/getUser')
      setUser(userDetails.data.response)
    }
    handleFindUser()
  }, [])

  useEffect(() => {
    async function handleFindRatingsUser() {
      const ratingsUser = await api.get('/users/getAllRatingsUser')
      setRatingsUser(ratingsUser.data.response)
    }
    handleFindRatingsUser()
  }, [])

  return (
    <ProfileContainer>
      <div style={{ padding: '1.25rem 0 1.25rem 1.25rem' }}>
        <Menu
          loggedInUser={true}
          selectedMenu="profile"
          nameUser={user?.name}
          avatarUser={user?.avatar_url}
        />
      </div>
      <ContentProfile>
        <SecondColumn>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '4.5rem',
              marginBottom: '2.5rem',
            }}
          >
            <User size={32} color="#50B2C0" />{' '}
            <span
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '140%',
                color: '#F8F9FC',
              }}
            >
              Perfil
            </span>
          </div>
          <Input placeholder="Buscar livro avaliado" />
          {ratingsUser.map((item) => (
            <>
              <p
                style={{
                  marginTop: '2rem',
                  marginBottom: '0.5rem',
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#D1D6E4',
                }}
              >
                Há 2 dias
              </p>
              <CardProfile
                assessment={item.rate}
                author={item.book.author}
                description={item.description}
                image={`/${item.book.cover_url}`.replace('/public', '')}
                name={item.book.name}
              />
            </>
          ))}
        </SecondColumn>
        <ThirdColumn>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '75px',
              height: '75px',
              backgroundImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
              borderRadius: '999999px',
              marginTop: '9.125rem',
            }}
          >
            {user?.avatar_url && (
              <Image
                src={user?.avatar_url}
                alt="foto do usuário"
                width={72}
                height={72}
                style={{ borderRadius: '9999px' }}
              />
            )}
          </div>
          <h3
            style={{
              fontFamily: 'Nunito Sans',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '140%',
              color: '#F8F9FC',
              marginTop: '1.25rem',
            }}
          >
            {user?.name}
          </h3>
          <span
            style={{
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '160%',
              color: '#8D95AF',
            }}
          >
            membro desde 2019
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '4px',
                margin: '2rem auto',
                background: `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
                borderRadius: '999px',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <BookOpen size={32} color={'#50B2C0'} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 700,
                    fontSize: '1rem',
                    lineHeight: '140%',
                    color: '#E6E8F2',
                  }}
                >
                  3853
                </span>
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#D1D6E4',
                  }}
                >
                  Páginas lidas
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <Books size={32} color={'#50B2C0'} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 700,
                    fontSize: '1rem',
                    lineHeight: '140%',
                    color: '#E6E8F2',
                  }}
                >
                  {ratingsUser.length}
                </span>
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#D1D6E4',
                  }}
                >
                  Livros avaliados
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <UserList size={32} color={'#50B2C0'} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 700,
                    fontSize: '1rem',
                    lineHeight: '140%',
                    color: '#E6E8F2',
                  }}
                >
                  8
                </span>
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#D1D6E4',
                  }}
                >
                  Autores lidos
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <BookmarkSimple size={32} color={'#50B2C0'} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 700,
                    fontSize: '1rem',
                    lineHeight: '140%',
                    color: '#E6E8F2',
                  }}
                >
                  Computação
                </span>
                <span
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    color: '#D1D6E4',
                  }}
                >
                  Categoria mais lida
                </span>
              </div>
            </div>
          </div>
        </ThirdColumn>
      </ContentProfile>
    </ProfileContainer>
  )
}

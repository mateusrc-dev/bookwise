import Menu from '@/components/Menu'
import {
  BodyContainer,
  ContentContainer,
  FirstColumn,
  HeaderHome,
  HomeContainer,
  SecondColumn,
} from '@/styles/pages/home'
import { ChartLineUp } from 'phosphor-react'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'

type Ratings = {
  book: {
    author: string
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
  user: {
    avatar_url: string
    created_at: string
    email: string
    id: string
    name: string
  }
}

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false)
  const [ratings, setRatings] = useState<Ratings[]>([])
  const session: any = useSession()

  console.log(ratings)

  const isSignedIn = session.status === 'authenticated'

  useEffect(() => {
    if (isSignedIn) {
      setLoggedInUser(isSignedIn)
    }
  }, [isSignedIn])

  useEffect(() => {
    async function handleRatings() {
      const ratingsAll = await api.get('/users/getAllRatings')
      setRatings(ratingsAll.data.response)
    }
    handleRatings()
  }, [])

  return (
    <HomeContainer>
      <div style={{ padding: '1.25rem 0 1.25rem 1.25rem' }}>
        {loggedInUser ? (
          <Menu
            avatarUser={session.data?.user?.avatar_url}
            nameUser={session.data?.user?.name}
            loggedInUser={true}
          />
        ) : (
          <Menu />
        )}
      </div>
      <BodyContainer>
        <ContentContainer>
          <FirstColumn>
            <HeaderHome style={{ marginTop: '4.5rem', marginBottom: '2.5rem' }}>
              <ChartLineUp size={32} color={'#50B2C0'} />
              <h1>Início</h1>
            </HeaderHome>
            {loggedInUser && (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '160%',
                      color: '#F8F9FC',
                    }}
                  >
                    Sua última leitura
                  </h3>
                  <Link direction="right" title="Ver todos" Color="blue" />
                </div>
                <Card
                  nameBook="Lindos"
                  assessment={4}
                  author="Mateus Raimundo"
                  description="melhor livro de todos"
                  src={'https://avatars.githubusercontent.com/u/109779094?v=4'}
                />
              </>
            )}
            <h3
              style={{
                marginBottom: '1rem',
                marginTop: loggedInUser ? '2.5rem' : '3.5rem',
                fontFamily: 'Nunito Sans',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '160%',
                color: '#F8F9FC',
              }}
            >
              Avaliações mais recentes
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexDirection: 'column',
              }}
            >
              {ratings.map((rating) => (
                <Card
                  key={String(rating.id)}
                  nameBook={rating.book.name}
                  assessment={rating.rate}
                  author={rating.book.author}
                  cardWithUser={true}
                  userName={rating.user.name}
                  description={rating.description}
                  src={`/${rating.book.cover_url}`.replace('/public', '')}
                  userImage={`${rating.user.avatar_url}`}
                />
              ))}
            </div>
          </FirstColumn>
          <SecondColumn>
            <HeaderHome
              style={{
                visibility: 'hidden',
                marginTop: '4.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <ChartLineUp size={32} color={'#50B2C0'} />
              <h1>Início</h1>
            </HeaderHome>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#F8F9FC',
                }}
              >
                Livros populares
              </h3>
              <Link direction="right" title="Ver todos" Color="blue" />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexDirection: 'column',
              }}
            >
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={'https://avatars.githubusercontent.com/u/109779094?v=4'}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={'https://avatars.githubusercontent.com/u/109779094?v=4'}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={'https://avatars.githubusercontent.com/u/109779094?v=4'}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={'https://avatars.githubusercontent.com/u/109779094?v=4'}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={'https://avatars.githubusercontent.com/u/109779094?v=4'}
                type="small"
              />
            </div>
          </SecondColumn>
        </ContentContainer>
      </BodyContainer>
    </HomeContainer>
  )
}

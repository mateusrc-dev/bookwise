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
import { useRouter } from 'next/router'

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
  const [ratingUser, setRatingUser] = useState<Ratings>()
  const [booksPopular, setBooksPopular] = useState<Ratings[]>([])
  const [loading, setLoading] = useState(false)
  const session: any = useSession()
  const router = useRouter()

  const isSignedIn = session.status === 'authenticated'

  console.log(session)

  useEffect(() => {
    if (isSignedIn) {
      setLoggedInUser(isSignedIn)
    }
  }, [isSignedIn])

  useEffect(() => {
    setLoading(true)
    async function handleRatings() {
      if (isSignedIn) {
        const ratingsAll = await api.get('/users/getAllRatings')
        setRatings(ratingsAll.data.response)
      }
    }
    setLoading(false)
    handleRatings()
  }, [isSignedIn])

  useEffect(() => {
    setLoading(true)
    async function handleUserRating() {
      if (isSignedIn) {
        const ratingUser = await api.get('/users/getFirstRatingUser')
        setRatingUser(ratingUser.data.response)
      }
    }
    setLoading(false)
    handleUserRating()
  }, [isSignedIn])

  useEffect(() => {
    setLoading(true)
    async function handleBooksPopular() {
      if (isSignedIn) {
        const ratingUser = await api.get('/users/getBooksPopular')
        setBooksPopular(ratingUser.data.response)
      }
    }
    setLoading(false)
    handleBooksPopular()
  }, [isSignedIn])

  function handleNavigationExplorer() {
    router.push('/explorer')
  }

  return loading ? (
    <>Carregando...</>
  ) : (
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
            {loggedInUser && ratingUser && (
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
                  nameBook={ratingUser.book.name}
                  assessment={ratingUser.rate}
                  author={ratingUser.book.author}
                  description={ratingUser.description}
                  src={`/${ratingUser.book.cover_url}`.replace('/public', '')}
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
              <Link
                onNavigation={handleNavigationExplorer}
                direction="right"
                title="Ver todos"
                Color="blue"
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexDirection: 'column',
              }}
            >
              {booksPopular.map((book) => (
                <Card
                  key={String(book.id)}
                  nameBook={book.book.name}
                  assessment={book.rate}
                  author={book.user.name}
                  description={book.description}
                  src={`/${book.book.cover_url}`.replace('/public', '')}
                  type="small"
                />
              ))}
            </div>
          </SecondColumn>
        </ContentContainer>
      </BodyContainer>
    </HomeContainer>
  )
}

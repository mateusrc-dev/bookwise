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
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from './api/auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type Props = {
  ratings: {
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
  }[]
  booksPopular: {
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
  }[]
  ratingUser: {
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
}

export default function Home({ ratings, booksPopular, ratingUser }: Props) {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false)
  const session: any = useSession()
  const router = useRouter()

  const isSignedIn = session.status === 'authenticated'

  useEffect(() => {
    if (isSignedIn) {
      setLoggedInUser(isSignedIn)
    }
  }, [isSignedIn])

  function handleNavigationExplorer() {
    router.push('/explorer')
  }

  function handleNavigationProfile() {
    router.push('/profile')
  }

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
                  <Link
                    direction="right"
                    title="Ver todos"
                    Color="blue"
                    onNavigation={handleNavigationProfile}
                  />
                </div>
                <Card
                  nameBook={ratingUser.book.name}
                  assessment={ratingUser.rate}
                  author={ratingUser.book.author}
                  description={ratingUser.description}
                  src={`/${ratingUser.book.cover_url}`.replace('/public', '')}
                  date={formatDistanceToNow(new Date(ratingUser.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
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
                  date={formatDistanceToNow(new Date(rating.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
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
                  date={formatDistanceToNow(new Date(book.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                />
              ))}
            </div>
          </SecondColumn>
        </ContentContainer>
      </BodyContainer>
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session: any = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  const ratings: any = await prisma.rating.findMany({
    where: {
      NOT: {
        user_id: session?.user?.id,
      },
    },
    include: { user: true, book: true },
  })

  const booksPopular = await prisma.rating.findMany({
    orderBy: [
      {
        rate: 'desc',
      },
    ],
    include: {
      book: true,
      user: true,
    },
    take: 4,
  })

  const ratingUser = await prisma.rating.findFirst({
    where: {
      user_id: session.user.id,
    },
    include: { user: true, book: true },
    orderBy: [
      {
        id: 'desc',
      },
    ],
  })

  return {
    props: {
      session,
      ratings: JSON.parse(JSON.stringify(ratings)),
      booksPopular: JSON.parse(JSON.stringify(booksPopular)),
      ratingUser: JSON.parse(JSON.stringify(ratingUser)),
    },
  }
}

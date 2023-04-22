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
      category: {
        id: string
        name: string
      }
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
  const [textInput, setTextInput] = useState<string>('')
  const [authors, setAuthors] = useState<string[]>([])
  const [numberPages, setNumberPages] = useState<number>(0)
  const [categories, setCategories] = useState<string[]>([])
  const [occurrences, setOccurrences] = useState<any>()
  const [biggerOccurrence, setBiggerOccurrence] = useState<string | undefined>(
    '',
  )

  function handleSearch(text: string) {
    setTextInput(text)
  }

  useEffect(() => {
    let bigger = -Infinity
    let key
    for (const prop in occurrences) {
      // eslint-disable-next-line no-prototype-builtins
      if (occurrences.hasOwnProperty(prop)) {
        if (occurrences[prop] > bigger) {
          bigger = occurrences[prop]
          key = prop
        }
      }
    }
    setBiggerOccurrence(key)
  }, [occurrences])

  useEffect(() => {
    const occurrences = categories.reduce((acc: any, curr: any) => {
      // eslint-disable-next-line no-sequences
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
    }, {})
    setOccurrences(occurrences)
  }, [categories])

  useEffect(() => {
    const categoryName: string[] = []
    for (let i = 0; ratingsUser.length > i; i++) {
      for (let a = 0; ratingsUser[i].book.categories.length > a; a++) {
        categoryName.push(ratingsUser[i].book.categories[a].category.name)
      }
    }
    setCategories(categoryName)
  }, [ratingsUser])

  useEffect(() => {
    let sum: number = 0
    for (let i = 0; ratingsUser.length > i; i++) {
      sum = sum + ratingsUser[i].book.total_pages
    }
    setNumberPages(sum)
  }, [ratingsUser])

  useEffect(() => {
    let sum: number = 0
    for (let i = 0; ratingsUser.length > i; i++) {
      sum = sum + ratingsUser[i].book.total_pages
    }
    setNumberPages(sum)
  }, [ratingsUser])

  useEffect(() => {
    const authors: string[] = []
    for (let i = 0; ratingsUser.length > i; i++) {
      if (!authors.includes(ratingsUser[i].book.author)) {
        authors.push(ratingsUser[i].book.author)
      }
    }
    setAuthors(authors)
  }, [ratingsUser])

  useEffect(() => {
    async function handleFindUser() {
      const userDetails = await api.get('/users/getUser')
      setUser(userDetails.data.response)
    }
    handleFindUser()
  }, [])

  useEffect(() => {
    async function handleFindRatingsUser() {
      const ratingsUser = await api.get('/users/getAllRatingsUser', {
        params: { nameString: textInput },
      })
      setRatingsUser(ratingsUser.data.response)
    }
    handleFindRatingsUser()
  }, [textInput])

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
          <Input placeholder="Buscar livro avaliado" onSearch={handleSearch} />
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
                  {numberPages}
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
                  {authors.length}
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
                  {biggerOccurrence}
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

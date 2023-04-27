import Menu from '@/components/Menu'
import {
  BodyContainer,
  ContentContainer,
  FirstColumn,
  HeaderHome,
  HomeContainer,
  SecondColumn,
} from '@/styles/pages/home'
import { BookOpen, BookmarkSimple, ChartLineUp, Star } from 'phosphor-react'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from './api/auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '@/lib/axios'
import {
  ButtonsComment,
  ContainerComments,
  CreateNewComment,
  DetailsBookModal,
  HeaderOfCreateNewComment,
  Option,
  OptionsSignIn,
  TextArea,
  ToAssess,
} from '@/styles/pages/explorer'
import Image from 'next/image'
import { Stars } from '@/components/Comment/styles'
import Close from '@/components/Close'
import StarsComponent from '@/components/Stars'
import Comment from '@/components/Comment'
import GoogleIcon from '../assets/googleIcon.png'
import GithubIcon from '../assets/githubIcon.png'
import ShowLoading from '@/components/Loading'

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
    author: string
    cover_url: string
    created_at: string
    id: string
    name: string
    summary: string
    total_pages: number
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

type BookDetails = {
  author: string
  categories: {
    book_id: string
    categoryId: string
  }[]
  cover_url: string
  created_at: string
  id: string
  name: string
  ratings: {
    book_id: string
    created_at: string
    description: string
    id: string
    rate: number
    user: {
      avatar_url: string
      created_at: string
      email: string
      id: string
      name: string
    }
    user_id: string
  }[]
  summary: string
  total_pages: number
}

type CommentUser = {
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

export default function Home({ ratings, booksPopular, ratingUser }: Props) {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false)
  const [handleModal, setHandleModal] = useState<boolean>(false)
  const [handleModalLogin, setHandleModalLogin] = useState<boolean>(false)
  const [showComment, setShowComment] = useState<boolean>(false)
  const [bookDetails, setBookDetails] = useState<BookDetails>()
  const [userId, setUserId] = useState<string>()
  const [CommentUser, setCommentUser] = useState<CommentUser>()
  const [textarea, setTextarea] = useState<string>('')
  const session: any = useSession()
  const router = useRouter()
  const [commentUserExist, setCommentUserExist] = useState<boolean>(false)
  const [userNote, setUserNote] = useState<number>(0)
  const [messageError, setMessageError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (session.data?.user) {
      setUserId(session.data?.user?.id)
    }
  }, [session])

  async function handleSignInGoogle() {
    signIn('google', { callbackUrl: 'http://localhost:3000/explorer' })
  }

  async function handleSignInGithub() {
    signIn('github', { callbackUrl: 'http://localhost:3000/explorer' })
  }

  async function handleBookDetails(bookId: string) {
    try {
      setLoading(true)
      handleStateModal()
      const books = await api.get('/users/getBook', {
        params: {
          idBook: bookId,
        },
      })
      setBookDetails(books.data.responseBook)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
    try {
      setLoading(true)
      const commentUser = await api.get('/users/getRatingUser', {
        params: { idBook: bookId },
      })
      if (commentUser.data.response) {
        setCommentUserExist(true)
        setShowComment(true)
        setCommentUser(commentUser.data.response)
      } else {
        setCommentUserExist(false)
        setShowComment(false)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const isSignedIn = session.status === 'authenticated'

  function handleStateModal() {
    if (handleModal === false) {
      setHandleModal(true)
    } else {
      setHandleModal(false)
    }
  }

  function handleStateModalLogin() {
    if (!loggedInUser) {
      if (handleModalLogin === false) {
        setHandleModalLogin(true)
      } else {
        setHandleModalLogin(false)
      }
    } else {
      setShowComment((prevState) => !prevState)
    }
  }

  const handleOutsideClick = (e: any) => {
    if (e.target.id === 'modal') {
      handleStateModal()
    }
  }

  const handleOutsideClickLogin = (e: any) => {
    if (e.target.id === 'modalLogin') {
      handleStateModalLogin()
    }
  }

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

  function handleUserNote(note: number) {
    setUserNote(note)
  }

  function handleTextarea(string: string) {
    if (textarea.length >= 450) {
      setTextarea(string.slice(0, -1))
    } else {
      setTextarea(string)
    }
  }

  async function handleSubmitComment() {
    if (textarea.length === 0) {
      setMessageError('Escreva seu comentário antes de salvá-lo')
    } else {
      setMessageError('')
      try {
        await api.post('/users/createRatings', {
          bookId: bookDetails?.id,
          userId,
          description: textarea,
          rate: userNote,
        })
        alert('Comentário criado com sucesso'!)
        handleStateModal()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <HomeContainer>
      {handleModal &&
        (loading ? (
          <ShowLoading />
        ) : (
          <div
            id="modal"
            className={handleModal ? 'modal' : 'none'}
            onClick={handleOutsideClick}
          >
            <div className="modalContent">
              <button className="close" onClick={() => handleStateModal()}>
                <Close withBackground={false} />
              </button>
              <DetailsBookModal>
                <div
                  style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}
                >
                  <Image
                    src={`/${bookDetails?.cover_url}`.replace('/public', '')}
                    alt="imagem do livro"
                    width={171}
                    height={242}
                    style={{ borderRadius: '10px' }}
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
                      {bookDetails?.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Nunito Sans',
                        fontWeight: 400,
                        fontSize: '1rem',
                        lineHeight: '160%',
                        color: '#D1D6E4',
                        marginBottom: '6.875rem',
                      }}
                    >
                      {bookDetails?.author}
                    </p>
                    <StarsComponent idBook={bookDetails?.id} />
                    <p
                      style={{
                        fontFamily: 'Nunito Sans',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '160%',
                        color: '#8D95AF',
                        marginTop: '4px',
                      }}
                    >
                      {bookDetails?.ratings.length} avaliações
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '2.5rem',
                    padding: '1.5rem 0',
                    borderTop: `1px solid #252D4A`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    gap: '3.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <BookmarkSimple size={24} color="#50B2C0" />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'Nunito Sans',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '160%',
                          color: '#D1D6E4',
                        }}
                      >
                        Categorias
                      </p>
                      <div
                        style={{
                          fontFamily: 'Nunito Sans',
                          fontWeight: 700,
                          fontSize: '1rem',
                          lineHeight: '140%',
                          color: '#E6E8F2',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.2rem',
                        }}
                      >
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09' && (
                              <span key={item.categoryId}>Ficção</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              '7c8dc74a-2e03-4d72-96de-822e332e5530' && (
                              <span key={item.categoryId}>Suspense</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              '70efc33d-7d6b-4db4-bab6-524c4c4b2e2c' && (
                              <span key={item.categoryId}>Romance</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              '2e65c193-325a-40c3-98f3-6c13e9b75b02' && (
                              <span key={item.categoryId}>Geek</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              '997f8a10-21fb-4c80-bd16-17e8b79a31a3' && (
                              <span key={item.categoryId}>Fábula</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              'a0a61b53-37d7-48ec-9b92-6db074f6d9c9' && (
                              <span key={item.categoryId}>Terror</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              'a1d0ee25-9c9a-49c8-84eb-7af1e0dd356d' && (
                              <span key={item.categoryId}>Alegoria</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              'a2891eaa-6d9e-48d8-a86a-10aa017d3d3f' && (
                              <span key={item.categoryId}>Arquitetura</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              'a4d63d4e-f8ad-4a60-b7b9-9d925a2a8a92' && (
                              <span key={item.categoryId}>Autoajuda</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              'c9f22067-4978-4a24-84a1-7d37f343dfc2' && (
                              <span key={item.categoryId}>Programação</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              'e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67' && (
                              <span key={item.categoryId}>Aventura</span>
                            ),
                        )}
                        {bookDetails?.categories.map(
                          (item) =>
                            item.categoryId ===
                              'e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67' && (
                              <span key={item.categoryId}>Educação</span>
                            ),
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <BookOpen size={24} color="#50B2C0" />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'Nunito Sans',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '160%',
                          color: '#D1D6E4',
                        }}
                      >
                        Páginas
                      </p>
                      <p
                        style={{
                          fontFamily: 'Nunito Sans',
                          fontWeight: 700,
                          fontSize: '1rem',
                          lineHeight: '140%',
                          color: '#E6E8F2',
                        }}
                      >
                        {bookDetails?.total_pages}
                      </p>
                    </div>
                  </div>
                </div>
              </DetailsBookModal>
              {showComment ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '160%',
                      color: '#E6E8F2',
                    }}
                  >
                    Avaliações
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Nunito Sans',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '160%',
                      color: '#E6E8F2',
                    }}
                  >
                    Avaliações
                  </p>
                  <ToAssess onClick={() => handleStateModalLogin()}>
                    Avaliar
                  </ToAssess>
                </div>
              )}
              <ContainerComments>
                {showComment && (
                  <>
                    {commentUserExist ? (
                      <Comment
                        userImage={
                          CommentUser?.user.avatar_url
                            ? CommentUser?.user.avatar_url
                            : ''
                        }
                        userName={CommentUser?.user.name}
                        assessmentProp={CommentUser?.rate}
                        description={CommentUser?.description}
                        commentUser={true}
                        date={
                          CommentUser &&
                          formatDistanceToNow(
                            new Date(CommentUser.created_at),
                            {
                              addSuffix: true,
                              locale: ptBR,
                            },
                          )
                        }
                      />
                    ) : (
                      <CreateNewComment>
                        <HeaderOfCreateNewComment>
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
                                src={
                                  session.data.user.avatar_url
                                    ? session.data.user.avatar_url
                                    : ''
                                }
                                alt="imagem do usuário"
                                width={40}
                                height={40}
                                style={{ borderRadius: '100%' }}
                              />
                            </div>
                            <span
                              style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 400,
                                fontSize: '1rem',
                                lineHeight: '160%',
                                color: '#F8F9FC',
                              }}
                            >
                              {session.data.user.name}
                            </span>
                          </div>
                          {userNote === 0 && (
                            <Stars>
                              <button
                                onClick={() => handleUserNote(1)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(2)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(3)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(4)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(5)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                            </Stars>
                          )}
                          {userNote === 1 && (
                            <Stars>
                              <button
                                onClick={() => handleUserNote(1)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(2)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(3)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(4)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(5)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                            </Stars>
                          )}
                          {userNote === 2 && (
                            <Stars>
                              <button
                                onClick={() => handleUserNote(1)}
                                style={{ all: 'unset' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(2)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(3)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(4)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(5)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                            </Stars>
                          )}
                          {userNote === 3 && (
                            <Stars>
                              <button
                                onClick={() => handleUserNote(1)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(2)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(3)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(4)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                              <button
                                onClick={() => handleUserNote(5)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                            </Stars>
                          )}
                          {userNote === 4 && (
                            <Stars>
                              <button
                                onClick={() => handleUserNote(1)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(2)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(3)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(4)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(5)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" />
                              </button>
                            </Stars>
                          )}
                          {userNote === 5 && (
                            <Stars>
                              <button
                                onClick={() => handleUserNote(1)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(2)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(3)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(4)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                              <button
                                onClick={() => handleUserNote(5)}
                                style={{ all: 'unset', cursor: 'pointer' }}
                              >
                                <Star size={20} color="#8381D9" weight="fill" />
                              </button>
                            </Stars>
                          )}
                        </HeaderOfCreateNewComment>
                        <TextArea>
                          <textarea
                            placeholder="Escreva sua avaliação"
                            onChange={(e) => handleTextarea(e.target.value)}
                            value={textarea}
                          />
                          <span>{textarea.length}/450</span>
                        </TextArea>
                        {messageError.length !== 0 && (
                          <p style={{ color: 'red' }}>{messageError}</p>
                        )}
                        <ButtonsComment>
                          <Close onSubmitComment={handleStateModalLogin} />
                          <Close
                            icon="checked"
                            onSubmitComment={handleSubmitComment}
                          />
                        </ButtonsComment>
                      </CreateNewComment>
                    )}
                  </>
                )}
                {bookDetails?.ratings.map(
                  (item) =>
                    item.user_id !== userId && (
                      <Comment
                        key={String(item.id)}
                        userImage={item.user.avatar_url}
                        userName={item.user.name}
                        assessmentProp={item.rate}
                        description={item.description}
                        date={formatDistanceToNow(new Date(item.created_at), {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      />
                    ),
                )}
              </ContainerComments>
            </div>
          </div>
        ))}
      {handleModalLogin && (
        <div
          id="modalLogin"
          className={handleModalLogin ? 'modalLogin' : 'none'}
          onClick={handleOutsideClickLogin}
        >
          <div className="modalContentLogin">
            <button className="close" onClick={() => handleStateModalLogin()}>
              <Close withBackground={false} />
            </button>
            <h3
              style={{
                fontFamily: 'Nunito Sans',
                fontWeight: 700,
                fontSize: '1rem',
                lineHeight: '140%',
                color: '#E6E8F2',
              }}
            >
              Faça login para deixar sua avaliação
            </h3>
            <OptionsSignIn>
              <Option onClick={handleSignInGoogle}>
                <Image
                  src={GoogleIcon}
                  alt="ícone do google"
                  width={32}
                  height={32}
                />
                <strong>Entrar com o Google</strong>
              </Option>
              <Option onClick={handleSignInGithub}>
                <Image
                  src={GithubIcon}
                  alt="ícone do github"
                  width={32}
                  height={32}
                />
                <strong>Entrar com o GitHub</strong>
              </Option>
            </OptionsSignIn>
          </div>
        </div>
      )}
      <div style={{ padding: '1.25rem 0 1.25rem 1.25rem' }}>
        {loggedInUser ? (
          <Menu
            avatarUser={
              session.data?.user?.avatar_url
                ? session.data?.user?.avatar_url
                : ''
            }
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
                  onClickCard={handleNavigationProfile}
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
                  userImage={`${
                    rating.user.avatar_url ? rating.user.avatar_url : ''
                  }`}
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
                  nameBook={book.name}
                  assessment={3}
                  author={book.author}
                  src={`/${book.cover_url}`.replace('/public', '')}
                  type="small"
                  date={formatDistanceToNow(new Date(book.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                  onClickCard={handleBookDetails}
                  idBook={book.id}
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

  let ratings
  try {
    ratings = await prisma.rating.findMany({
      where: {
        NOT: {
          user_id: session?.user?.id,
        },
      },
      include: { user: true, book: true },
    })
  } catch (err) {
    console.log(err)
  }

  let booksPopular
  try {
    booksPopular = await prisma.book.findMany({
      orderBy: [
        {
          ratings: { _count: 'desc' },
        },
      ],
      take: 4,
    })
  } catch (err) {
    console.log(err)
  }

  let ratingUser
  try {
    if (session) {
      ratingUser = await prisma.rating.findFirst({
        where: {
          user_id: session.user.id,
        },
        include: { user: true, book: true },
        orderBy: [
          {
            id: 'asc',
          },
        ],
      })
    }
  } catch (err) {
    console.log(err)
  }

  if (session) {
    return {
      props: {
        session,
        ratings: JSON.parse(JSON.stringify(ratings)),
        booksPopular: JSON.parse(JSON.stringify(booksPopular)),
        ratingUser: JSON.parse(JSON.stringify(ratingUser)),
      },
    }
  } else {
    return {
      props: {
        ratings: JSON.parse(JSON.stringify(ratings)),
        booksPopular: JSON.parse(JSON.stringify(booksPopular)),
      },
    }
  }
}

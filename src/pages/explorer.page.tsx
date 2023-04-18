import Input from '@/components/Input'
import Menu from '@/components/Menu'
import {
  ButtonsComment,
  CardsContainer,
  ContainerComments,
  CreateNewComment,
  DetailsBookModal,
  ExplorerContainer,
  ExplorerContent,
  HeaderContainer,
  HeaderHome,
  HeaderOfCreateNewComment,
  Option,
  OptionsSignIn,
  Stars,
  TagsContainer,
  TextArea,
  ToAssess,
} from '@/styles/pages/explorer'
import { Binoculars, BookOpen, BookmarkSimple, Star } from 'phosphor-react'
import ImageTest from '../assets/codigo-limpo.png'
import { useState } from 'react'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import Close from '@/components/Close'
import Image from 'next/image'
import Comment from '@/components/Comment'
import GoogleIcon from '../assets/googleIcon.png'
import GithubIcon from '../assets/githubIcon.png'

export default function Explorer() {
  const [loggedInUser /* setLoggedInUser */] = useState<boolean>(true)
  const [handleModal, setHandleModal] = useState<boolean>(false)
  const [handleModalLogin, setHandleModalLogin] = useState<boolean>(false)
  const [assessment /* setAssessment */] = useState<number>(3)
  const [userNote, setUserNote] = useState<number>(0)
  const [textarea, setTextarea] = useState<string>('')
  const [commentUserExist /* setCommentUserExist */] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<string>('')

  function handleStateModal() {
    if (handleModal === false) {
      setHandleModal(true)
    } else {
      setHandleModal(false)
    }
  }

  function handleStateModalLogin() {
    if (handleModalLogin === false) {
      setHandleModalLogin(true)
    } else {
      setHandleModalLogin(false)
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

  function handleUserNote(note: number) {
    setUserNote(note)
  }

  console.log(textarea)

  function handleTextarea(string: string) {
    if (textarea.length >= 450) {
      setTextarea(string.slice(0, -1))
    } else {
      setTextarea(string)
    }
  }

  function handleSubmitComment() {
    if (textarea.length === 0) {
      setMessageError('Escreva seu comentário antes de salvá-lo')
    } else {
      setMessageError('')
      console.log('ok')
    }
  }

  return (
    <ExplorerContainer>
      {handleModal && (
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
                  src={ImageTest}
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
                    14 Hábitos de Desenvolvedores Altamente Produtivos
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
                    Zeno Rocha
                  </p>
                  {assessment === 1 && (
                    <Stars>
                      <Star size={20} color="#8381D9" weight="fill" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 2 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 3 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 4 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 5 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                    </Stars>
                  )}
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
                    3 avaliações
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
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
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
                      Categoria
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
                      Computação, educação
                    </p>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
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
                      160
                    </p>
                  </div>
                </div>
              </div>
            </DetailsBookModal>
            {loggedInUser ? (
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
              {commentUserExist ? (
                <Comment
                  userImage={ImageTest}
                  userName="Mateus Raimundo"
                  assessmentProp={2}
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
                  commentUser={true}
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
                          src={ImageTest}
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
                        Mateus Raimundo
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
                    <Close />
                    <Close
                      icon="checked"
                      onSubmitComment={handleSubmitComment}
                    />
                  </ButtonsComment>
                </CreateNewComment>
              )}
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
            </ContainerComments>
          </div>
        </div>
      )}
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
              <Option href="">
                <Image
                  src={GoogleIcon}
                  alt="ícone do google"
                  width={32}
                  height={32}
                />
                <strong>Entrar com o Google</strong>
              </Option>
              <Option href="">
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
            avatarUser={ImageTest}
            nameUser="Mateus"
            loggedInUser={true}
            selectedMenu="explorer"
          />
        ) : (
          <Menu selectedMenu="explorer" />
        )}
      </div>
      <ExplorerContent>
        <HeaderContainer>
          <HeaderHome>
            <Binoculars size={32} color={'#50B2C0'} />
            <h1>Início</h1>
          </HeaderHome>
          <Input placeholder="Buscar livro ou autor" />
        </HeaderContainer>
        <TagsContainer>
          <Tag title="Tudo" />
          <Tag title="Computação" />
          <Tag title="Educação" />
          <Tag title="Fantasia" />
          <Tag title="Ficção científica" />
          <Tag title="Horror" />
          <Tag title="HQs" />
          <Tag title="Suspense" />
        </TagsContainer>
        <CardsContainer>
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
            onClickCard={handleStateModal}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
        </CardsContainer>
      </ExplorerContent>
    </ExplorerContainer>
  )
}

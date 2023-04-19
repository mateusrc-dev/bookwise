import Menu from '@/components/Menu'
import ImageTest from '../assets/codigo-limpo.png'
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
import ImageText from '../assets/arquitetura-limpa.png'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false)
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  useEffect(() => {
    if (isSignedIn) {
      setLoggedInUser(isSignedIn)
    }
  }, [isSignedIn])

  return (
    <HomeContainer>
      <div style={{ padding: '1.25rem 0 1.25rem 1.25rem' }}>
        {loggedInUser ? (
          <Menu avatarUser={ImageTest} nameUser="Mateus" loggedInUser={true} />
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
                  src={ImageText}
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
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                cardWithUser={true}
                userName="Mateus Raimundo"
                description="melhor livro de todos hsdfhsdkjf hdskf sdkjfhs dkfhsd fklsdhf slkdfh sdlkfjhsd lkfh dslfkjs hdflksd hflskdhf sdlkf hsdklf hsdlkfhsd lkfjds hflskd hfsdkl hfsdlkfh sdlkfj hdslkjf hsdlkfj shdlfk dslfds kflhsd flksdh fsdlkjf hsdlkfj hsdlfkjdsh flsdh fldskj hfsdlkjf hsdlkfj sdkl fhdskjf dskljfhs k"
                src={ImageTest}
                userImage={ImageTest}
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                cardWithUser={true}
                userName="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                userImage={ImageTest}
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                cardWithUser={true}
                userName="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                userImage={ImageTest}
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                cardWithUser={true}
                userName="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                userImage={ImageTest}
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                cardWithUser={true}
                userName="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                userImage={ImageTest}
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                cardWithUser={true}
                userName="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                userImage={ImageTest}
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                cardWithUser={true}
                userName="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                userImage={ImageTest}
              />
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
                src={ImageTest}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                type="small"
              />
              <Card
                nameBook="Lindos"
                assessment={4}
                author="Mateus Raimundo"
                description="melhor livro de todos"
                src={ImageTest}
                type="small"
              />
            </div>
          </SecondColumn>
        </ContentContainer>
      </BodyContainer>
    </HomeContainer>
  )
}

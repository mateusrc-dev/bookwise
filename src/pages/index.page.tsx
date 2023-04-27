import Image from 'next/image'
import ImageSignIn from '../assets/ImageSignIn.png'
import GoogleIcon from '../assets/googleIcon.png'
import GithubIcon from '../assets/githubIcon.png'
import RocketIcon from '../assets/rocketIcon.png'
import {
  ColumnTwo,
  ContainerSignIn,
  Option,
  OptionsSignIn,
} from '@/styles/pages/signIn'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function SignIn() {
  const router = useRouter()
  const session = useSession()
  const userLogin = session.status === 'authenticated'

  const hasAuthError = !!router.query.error

  async function handleSignInGoogle() {
    signIn('google', { callbackUrl: 'http://localhost:3000/home' })
  }

  async function handleSignInGithub() {
    signIn('github', { callbackUrl: 'http://localhost:3000/home' })
  }

  if (userLogin) {
    router.push('/home')
  }

  function handleNavigationHome() {
    router.push('/home')
  }

  return (
    <ContainerSignIn>
      <div>
        <Image
          src={ImageSignIn}
          alt="imagem de uma pessoa deitada no sofá lendo"
          width={598}
          height={912}
          quality={100}
          priority
        />
      </div>
      <ColumnTwo>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <h1>Boas vindas!</h1>
            <strong>Faça seu login ou acesse como visitante.</strong>
          </div>
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
            {hasAuthError && <p>Falha ao se conectar com o Google!</p>}
            <Option onClick={handleSignInGithub}>
              <Image
                src={GithubIcon}
                alt="ícone do github"
                width={32}
                height={32}
              />
              <strong>Entrar com o GitHub</strong>
            </Option>
            <Option onClick={handleNavigationHome}>
              <Image
                src={RocketIcon}
                alt="ícone da rocket"
                width={32}
                height={32}
              />
              <strong>Acessar como visitante</strong>
            </Option>
          </OptionsSignIn>
        </div>
      </ColumnTwo>
    </ContainerSignIn>
  )
}

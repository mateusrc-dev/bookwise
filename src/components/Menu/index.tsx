import Image from 'next/image'
import { ContainerNavigation, LinkLogout, MenuContainer } from './styles'
import Logo from '../../assets/Logo.png'
import Navigation from '../Navigation'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

type Props = {
  loggedInUser?: boolean
  avatarUser?: string | undefined | null
  nameUser?: string | undefined | null
  selectedMenu?: 'home' | 'explorer' | 'profile'
}

export default function Menu({
  loggedInUser = false,
  nameUser = "insira o nome do usuário com a prop 'nameUser'",
  selectedMenu = 'home',
  avatarUser,
}: Props) {
  const router = useRouter()

  async function deleteSession() {
    signOut({ callbackUrl: 'http://localhost:3000' })
  }

  function handleNavigationHome() {
    router.push('/home')
  }

  function handleNavigationExplorer() {
    router.push('/explorer')
  }

  function handleNavigationProfile() {
    router.push('/profile')
  }

  return (
    <MenuContainer>
      <Image src={Logo} alt="logo" width={128} height={32} />
      <ContainerNavigation>
        <Navigation
          title="Início"
          selected={selectedMenu === 'home'}
          onNavigation={handleNavigationHome}
          path="home"
        >
          <ChartLineUp size={24} color="#F8F9FC" />
        </Navigation>
        <Navigation
          title="Explorer"
          selected={selectedMenu === 'explorer'}
          onNavigation={handleNavigationExplorer}
          path="explorer"
        >
          <Binoculars size={24} color="#F8F9FC" />
        </Navigation>
        {loggedInUser && (
          <Navigation
            title="Perfil"
            selected={selectedMenu === 'profile'}
            onNavigation={handleNavigationProfile}
            path="profile"
          >
            <User size={24} color="#F8F9FC" />
          </Navigation>
        )}
      </ContainerNavigation>
      {loggedInUser ? (
        <LinkLogout href="" onClick={deleteSession}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '35px',
              backgroundImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
              borderRadius: '999999px',
            }}
          >
            {avatarUser !== undefined && avatarUser !== null && (
              <Image
                src={`${avatarUser}`}
                alt="foto do usuário"
                width={32}
                height={32}
                style={{ borderRadius: '9999px' }}
              />
            )}
          </div>
          <p>{nameUser}</p>
          <SignIn size={20} color="#F75A68" />
        </LinkLogout>
      ) : (
        <LinkLogout href="">
          <p>Fazer login</p>
          <SignIn size={20} color="#50B2C0" />
        </LinkLogout>
      )}
    </MenuContainer>
  )
}

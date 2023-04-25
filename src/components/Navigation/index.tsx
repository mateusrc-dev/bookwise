import { ReactNode } from 'react'
import { Div, NavigationContainer } from './styles'

type NavigationProps = {
  title: string
  selected?: boolean
  children?: ReactNode
  onNavigation?: (path: string) => void
  path?: string
}

export default function Navigation({
  title,
  children,
  selected = false,
  onNavigation = () => {},
  path = '',
}: NavigationProps) {
  return (
    <NavigationContainer
      css={{
        '--selected': selected === true ? 'brightness(1)' : 'brightness(0.7)',
      }}
      onClick={() => onNavigation(path)}
    >
      {selected === true && <Div />}
      {children}
      <p>{title}</p>
    </NavigationContainer>
  )
}

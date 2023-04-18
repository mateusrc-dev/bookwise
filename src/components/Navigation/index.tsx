import { ReactNode } from 'react'
import { Div, NavigationContainer } from './styles'

type NavigationProps = {
  title: string
  selected?: boolean
  children?: ReactNode
}

export default function Navigation({
  title,
  children,
  selected = false,
}: NavigationProps) {
  return (
    <NavigationContainer
      css={{
        '--selected': selected === true ? 'brightness(1)' : 'brightness(0.7)',
      }}
      href=""
    >
      {selected === true && <Div />}
      {children}
      <p>{title}</p>
    </NavigationContainer>
  )
}

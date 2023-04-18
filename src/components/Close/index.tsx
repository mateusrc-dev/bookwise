import { CloseContainer, CloseContainerWithoutBackground } from './styles'
import { X, Check } from 'phosphor-react'

type CloseProps = {
  icon?: 'X' | 'checked'
  withBackground?: boolean
}

export default function Close({
  icon = 'X',
  withBackground = true,
}: CloseProps) {
  if (withBackground) {
    return (
      <CloseContainer>
        {icon === 'X' ? (
          <X size={24} color="#8381D9" />
        ) : (
          <Check size={24} color="#50B2C0" />
        )}
      </CloseContainer>
    )
  } else {
    return (
      <CloseContainerWithoutBackground>
        <X size={24} color="#8D95AF" />
      </CloseContainerWithoutBackground>
    )
  }
}

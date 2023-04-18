import { CloseContainer, CloseContainerWithoutBackground } from './styles'
import { X, Check } from 'phosphor-react'

type CloseProps = {
  icon?: 'X' | 'checked'
  withBackground?: boolean
  onSubmitComment?: () => void
}

export default function Close({
  icon = 'X',
  withBackground = true,
  onSubmitComment = () => {},
}: CloseProps) {
  if (withBackground) {
    return (
      <CloseContainer onClick={onSubmitComment}>
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

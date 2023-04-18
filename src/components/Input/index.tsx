import { MagnifyingGlass } from 'phosphor-react'
import { InputContainer } from './styles'

type Props = {
  placeholder?: string
}

export default function Input({ placeholder = '' }: Props) {
  return (
    <InputContainer>
      <input type="text" placeholder={placeholder} />
      <div className="icon">
        <MagnifyingGlass color="#303F73" size={22} />
      </div>
    </InputContainer>
  )
}

import { MagnifyingGlass } from 'phosphor-react'
import { InputContainer } from './styles'

type Props = {
  placeholder?: string
  onSearch?: (search: string) => void
}

export default function Input({
  placeholder = '',
  onSearch = () => {},
}: Props) {
  return (
    <InputContainer>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="icon">
        <MagnifyingGlass color="#303F73" size={22} />
      </div>
    </InputContainer>
  )
}

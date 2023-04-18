import { useState } from 'react'
import { TagContainer } from './styles'

type Props = {
  title: string
}

export default function Tag({ title }: Props) {
  const [selected, setSelected] = useState(false)

  function handleSelect() {
    if (selected === false) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }

  return (
    <TagContainer
      onClick={handleSelect}
      css={{
        '--selected-background': selected === true ? '#2A2879' : 'transparent',
        '--selected-color': selected === true ? '#F8F9FC' : '#8381D9',
        '--selected-border-color':
          selected === true ? 'transparent' : '#8381D9',
      }}
    >
      {title}
    </TagContainer>
  )
}

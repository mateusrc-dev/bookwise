import { TagContainer } from './styles'

type Props = {
  title: string
  handleSelectTag?: (title: string) => void
  selected: boolean
}

export default function Tag({
  title,
  handleSelectTag = () => {},
  selected,
}: Props) {
  function handleSelect() {
    handleSelectTag(title)
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

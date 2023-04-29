import { Container } from './styles'

type Props = {
  title?: string
}

export default function ShowLoadingSmall({ title = '' }: Props) {
  return (
    <Container>
      {title?.length !== 0 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            position: 'absolute',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          {title?.length !== 0 && <h1>{title}</h1>}
          <div className="Loading"></div>
        </div>
      ) : (
        <div className="Loading"></div>
      )}
    </Container>
  )
}

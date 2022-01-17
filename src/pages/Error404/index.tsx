import {Link as RouterLink} from 'react-router-dom'
import {Container, Header} from '../../styles/global'

export function Error404() {
  return (
    <Container>
      <Header>
        <h4>Page Not Found!</h4>
        <RouterLink to="/" className="App-link">
          Return to Home
        </RouterLink>
      </Header>
    </Container>
  )
}

import {Container, Header} from '../../styles/global'

export function About() {
  return (
    <Container>
      <Header>
        <h4>
          Would you like to know more about this repo? Click in the link below
        </h4>
        <a
          className="App-link"
          href="https://github.com/leo-pro/boilerplate-frontend-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Repo
        </a>
      </Header>
    </Container>
  )
}

import {Container, Header, Logo} from '../../styles/global'
import logo from '../../assets/images/logo.svg'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>Complete Boilerplate for ReactJS Applications</p>
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

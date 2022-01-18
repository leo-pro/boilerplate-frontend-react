import {Container, Header, Logo} from '../../styles/global'
import {userUserData} from '../../stores/useUserData'
import {getUser} from '../../services/user'

import logo from '../../assets/images/logo.svg'
import {ButtonChangeUser} from './styles'

export function Home() {
  const {name, age} = userUserData()

  async function changeUser() {
    const {data} = await getUser('leo-pro')

    userUserData.setState({
      name: data.name,
      age: 23,
    })
  }

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

        <h4>About me:</h4>
        <ul>
          <li>
            My name is {name} and I&apos;m {age} years old.
          </li>
        </ul>
        <ButtonChangeUser onClick={changeUser}>Change user!</ButtonChangeUser>
      </Header>
    </Container>
  )
}

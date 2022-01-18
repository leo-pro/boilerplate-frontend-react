import {render, screen} from '@testing-library/react'
import {Home} from '../../../pages/Home'

describe('Pages: Home', () => {
  test('renders go to Repo link', () => {
    render(<Home />)
    const linkElement = screen.getByText(/Go to Repo/)
    expect(linkElement).toBeInTheDocument()
  })
})

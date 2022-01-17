import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {About} from '../pages/About'
import {Error404} from '../pages/Error404'
import {Home} from '../pages/Home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

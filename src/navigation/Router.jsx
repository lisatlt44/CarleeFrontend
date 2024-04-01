import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

/* Pages */
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

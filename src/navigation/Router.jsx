import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

/* Pages */
import Dashboard from '../pages/protected/Dashboard'
import Home from '../pages/Home'
import PrivateRoute from './PrivateRouteMiddleware'
import Auth from '../pages/Auth'
import Indicators from '../pages/Indicators'
import Settings from '../pages/Settings'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='indicators' element={<Indicators />} />
        <Route path='settings' element={<Settings />} />
        <Route path='dashboard' element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='authentication' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

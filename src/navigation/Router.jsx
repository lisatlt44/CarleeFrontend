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
        <Route path='dashboard' element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='indicators' element={<PrivateRoute />}>
          <Route index element={<Indicators />} />
        </Route>
        <Route path='settings' element={<PrivateRoute />}>
          <Route index element={<Settings />} />
        </Route>
        <Route path='authentication' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

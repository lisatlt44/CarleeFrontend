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
import Cars from '../pages/Cars'
import Account from '../pages/Account'
import Calendrier from '../pages/Calendrier'

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
        <Route path='cars' element={<PrivateRoute />}>
          <Route index element={<Cars />} />
        </Route>
        <Route path='account' element={<PrivateRoute />}>
          <Route index element={<Account />} />
        </Route>
        <Route path='calendar' element={<PrivateRoute />}>
          <Route index element={<Calendrier />} />
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

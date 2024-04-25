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
import Calendar from '../pages/Calendar'
import Cars from '../pages/Cars'
import Account from '../pages/Account'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='indicators' element={<Indicators />} />
        <Route path='settings' element={<Settings />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='cars' element={<Cars />} />
        <Route path='account' element={<Account />} />
        <Route path='dashboard' element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='authentication' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

function PrivateRoute () {
  const { state: { access_token, user } } = useAuth()

  return (
    access_token && user ? <Outlet /> : <Navigate to='/' />
  )
}

export default PrivateRoute

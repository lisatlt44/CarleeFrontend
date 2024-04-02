import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext';

function Dashboard () {
  const navigate = useNavigate()

  const { logout } = useAuth()


  const handleLogout = () => {    
    // Supprimer le token du local storage
    logout()
    // Rediriger vers la page d'accueil
    navigate('/')
  };

  return (
    <>
      <h2>Dashboard</h2>
      <Button onClick={handleLogout}>
        Se déconnecter
      </Button>
    </>
  )
}

export default Dashboard

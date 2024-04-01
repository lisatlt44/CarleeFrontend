import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom';

function Dashboard () {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token du local storage
    localStorage.removeItem('token');
    // Rediriger vers la page d'accueil
    navigate('/');
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

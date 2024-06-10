import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/forms/RegisterForm'
import LoginForm from '../components/forms/LoginForm'
import { useAuth } from '../contexts/authContext'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()

  const { state: { jwt, user } } = useAuth()

  useEffect(() => {
    if (jwt && user) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <>
          <a className='p-10 cursor-pointer flex justify-center' onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
          </a>
      {
        isRegister
          ? <RegisterForm />
          : <LoginForm className='place-content-center'/>
      }
    </>
  )
}

export default Auth

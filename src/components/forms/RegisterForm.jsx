import { Button, Input } from '@nextui-org/react'
import { useEffect, useMemo, useState } from 'react'
import { validateRegisterForm } from '../../services/formAuthValidation'
import { toast } from 'react-toastify'
import { EyeSlashFilledIcon } from "../Icons/EyeSlashFilledIcon"
import { EyeFilledIcon } from "../Icons/EyeFilledIcon"
import { useAuth } from "../../contexts/authContext"
import { useNavigate } from 'react-router-dom'

function RegisterForm () {
  const [errors, setErrors] = useState({
    firstname: null,
    lastname: null,
    phone: null,
    email: null,
    password: null
  })

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const { state: { user, access_token, error, loading}, register } = useAuth()

  useEffect(() => {
    if (user && access_token) {
      navigate('/dashboard')
    }
  }, [user, access_token])

  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState("")

  const validateEmail = (value) => {
    if (!value) return false
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
  }

  const isInvalid = useMemo(() => {
    if (value === "") return false

    return validateEmail(value) ? false : true
  }, [value])

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const _errors = validateRegisterForm(formData)
    
    if (Object.keys(_errors).length > 0) {
      Object.values(_errors).forEach((error) => {
        toast.error(error)
      })
    } else {
      try {
        await register(formData)
        toast.success(`Votre compte a correctement été créé.`)
      } catch (error) {
        toast.error(error.message)
      }
    }
  }
  
  return (
    <div className="flex justify-center min-h-screen">
      <div className='max-w-[420px]'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col bg-white gap-4'>
            <Input
              label='Prénom'
              name='firstname'
              labelPlacement="outside"
              variant="bordered"
              placeholder='Jean'
              className="font-semibold"
              size="lg"
              radius="sm"
              value={formData.firstname}
              onChange={handleChange}
              error={errors.firstname}
            />
            <Input
              label='Nom'
              name='lastname'
              labelPlacement="outside"
              variant="bordered"
              placeholder='Dupont'
              className="font-semibold"
              size="lg"
              radius="sm"
              value={formData.lastname}
              onChange={handleChange}
              error={errors.lastname}
            />
            <Input
              label="Numéro de téléphone"
              name='phone'
              labelPlacement="outside"
              variant="bordered"
              placeholder="** ** ** ** **"
              className="font-semibold"
              size="lg"
              radius="sm"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              label='Email'
              name='email'
              labelPlacement="outside"
              variant="bordered"
              type="email"
              placeholder="jean.dupont@gmail.com"
              className="font-semibold"
              size="lg"
              radius="sm"
              value={formData.email}
              onChange={handleChange}
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "default"}
              errorMessage={isInvalid && value.length > 0 && "Veuillez entrer une adresse e-mail valide"}
              onValueChange={setValue}
            />
            <Input
              label='Mot de passe'
              name='password'
              labelPlacement="outside"
              variant="bordered"
              placeholder="**********"
              className="font-semibold"
              radius="sm"
              size="lg"
              endContent={
                <button 
                  className="focus:outline-none" 
                  type="button" 
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button
            type='submit'
            color='primary'
            radius="sm"
            size="lg"
            className="p-4 font-bold text-white"
            isLoading={loading}
          >
            S'inscrire
          </Button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm

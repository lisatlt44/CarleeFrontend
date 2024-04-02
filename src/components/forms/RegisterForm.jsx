import { Button, Input } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { validateRegisterForm } from '../../services/formAuthValidation'
import { toast } from 'react-toastify'
import { EyeSlashFilledIcon } from "../Icons/EyeSlashFilledIcon"
import { EyeFilledIcon } from "../Icons/EyeFilledIcon"
import { useAuth } from "../../contexts/authContext"

function RegisterForm () {
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    password: null
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  })

  const { state: { loading } } = useAuth()

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

  const handleSubmit = (event) => {
    event.preventDefault()
    const _errors = validateRegisterForm(formData)
    if (_errors) {
      setErrors(_errors)
    } else {
      toast.info(`Formulaire soumis : ${formData.firstName} ${formData.lastName}`)
    }
  }

  return (
    <div className='p-10 max-w-[420px]'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col bg-white gap-4'>
          <Input
            name='firstName'
            label='Prénom : '
            labelPlacement="outside"
            variant="bordered"
            placeholder='Jean'
            className="font-semibold"
            size="lg"
            radius="sm"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Input
            name='lastName'
            label='Nom : '
            labelPlacement="outside"
            variant="bordered"
            placeholder='Dupont'
            className="font-semibold"
            size="lg"
            radius="sm"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <Input
            name='phone'
            label="Numéro de téléphone : "
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
            name='email'
            label='Email : '
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
            name='password'
            label='Mot de passe : '
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
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
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
          {'S\'enregistrer'}
        </Button>
      </form>
    </div>
  )
}

export default RegisterForm

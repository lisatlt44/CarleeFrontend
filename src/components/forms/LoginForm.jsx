import { Input, Button, Checkbox } from "@nextui-org/react"
import { useEffect, useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { EyeSlashFilledIcon } from "../Icons/EyeSlashFilledIcon"
import { EyeFilledIcon } from "../Icons/EyeFilledIcon"
import { useAuth } from "../../contexts/authContext"

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const navigate = useNavigate()

  const { state: { user, access_token, error, loading}, login } = useAuth()

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

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
    // setError(null)

    // try {
    //   const response = fetch("https://carlee.lisa-tallet.mds-nantes.yt/api/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    //   })

    //   if (!response.ok) {
    //     throw new Error("Identifiants incorrects")
    //   }

    //   const data = await response.json()
    //   localStorage.setItem("token", data.access_token)
    //   navigate('/dashboard')
    // } catch (error) {
    //   toast.error(error.message)
    // }
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-10 max-w-[420px]">
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col bg-white gap-4'>
            <Input
              label="Email"
              name="email"
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
              label="Mot de passe"
              name="password"
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
          <div className="flex flex-row justify-between gap-4">
            <Checkbox radius="sm">Se souvenir de moi</Checkbox>
            <h2>Mot de passe oublié ?</h2>
          </div>
          <Button 
            type='submit'
            color='primary'
            radius="sm"
            size="lg"
            className="p-4 font-bold text-white"
            isLoading={loading}
          >
            Se connecter
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm

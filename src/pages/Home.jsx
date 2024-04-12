import { Navigate } from "react-router"
import { useAuth } from "../contexts/authContext"
import Auth from "./Auth"

function Home () {
  const { state: { isLoggedIn } } = useAuth()

  return (
    <div>
      <div>
        <h3 className="font-playpen font-semibold text-3xl">Bienvenue.</h3>
      </div>
      <Auth />
    </div>
  )
}

export default Home
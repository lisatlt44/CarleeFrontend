import { Navigate } from "react-router"
import { useAuth } from "../contexts/authContext"
import Auth from "./Auth"

function Home () {
  const { state: { isLoggedIn } } = useAuth()

  return (
    <div>
      <div>
      <img src={require("../assets/CarleeWhite.png")} alt="" className='w-36 pt-10 pl-10' />
        <h3 className="font-playpen font-semibold text-2xl p-10">Bienvenue.</h3>
      </div>
      <Auth />
    </div>
  )
}

export default Home
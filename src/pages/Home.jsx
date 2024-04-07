import { useState } from "react"
import { useAuth } from "../contexts/authContext"
import Auth from "./Auth"
import Dashboard from "./protected/Dashboard"
import RegisterForm from "../components/forms/RegisterForm"

function Home () {
  const { state: { isLoggedIn, user }, logout } = useAuth()

  return (
    <div>
      <div>
        <h3 className="font-playpen font-semibold text-3xl">Bienvenue.</h3>
      </div>
      {
        
        isLoggedIn ? (<Dashboard />): (<Auth />)
      }
    </div>
  )
}

export default Home
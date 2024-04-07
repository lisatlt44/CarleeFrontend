import { useState } from "react"
import { useAuth } from "../contexts/authContext"
import Auth from "./Auth"
import Dashboard from "./protected/Dashboard"
import RegisterForm from "../components/forms/RegisterForm"

function Home () {
  const { state: { isLoggedIn, user }, logout } = useAuth()

  return (
    <>
      {
        isLoggedIn ? (<Dashboard />): (<Auth />)
      }
    </>
  )
}

export default Home
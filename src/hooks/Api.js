import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../contexts/authContext'

const useFetch = (endpoint, options = {}) => {
  const { state: { access_token } } = useAuth()
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${access_token}`,
            ...options.headers
          }
        }
        const response = await axios.get(process.env.REACT_APP_API_URL + endpoint, config)
        setResponse(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
        setIsLoading(false)
      }
    }
    getData()
  }, [endpoint, options.headers, access_token])

  return { response, error, isLoading }
}

export {
  useFetch
}

import axios from 'axios'
import { useAuth } from '../contexts/authContext'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

const addCarApiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

addCarApiInstance.interceptors.request.use(
  (config) => {
    const { state: { access_token } } = useAuth()
    if (access_token && !config.url.includes('login') && !config.url.includes('register')) {
      config.headers.Authorization = `Bearer ${access_token}`
    }
    return config
  },
  (error) => {
    Promise.reject(error);
  }
)

/**
 * Call API Login route
 * @param {object} credentials { identifier, password }
 * @return {object} { jwt, user }
 */
const loginApi = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials)
  return response?.data
}

const registerApi = async (credentials) => {
  const response = await axiosInstance.post('/auth/register', credentials)
  return response?.data
}

const addCarApi = async (data, access_token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  };

  const response = await axiosInstance.post('/cars', data, config);
  return response
}

export {
  loginApi,
  registerApi,
  addCarApi
}

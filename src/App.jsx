import { NextUIProvider } from '@nextui-org/react'
import Router from './navigation/Router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './contexts/authContext.jsx';
import Header from './components/header/Header.jsx';

function App() {
  
  return (
    <>
      <NextUIProvider>
        <AuthProvider>
          <Router />
          <ToastContainer />
        </AuthProvider>
      </NextUIProvider>
    </>
  )
}

export default App

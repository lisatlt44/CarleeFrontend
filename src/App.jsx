import { NextUIProvider } from '@nextui-org/react'
import Header from './components/header/Header';
import Router from './navigation/Router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <NextUIProvider>
        <Router />
        <ToastContainer />
      </NextUIProvider>
    </>
  );
}

export default App;

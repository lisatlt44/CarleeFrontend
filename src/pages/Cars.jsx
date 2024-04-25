import React from 'react'
import Sidebar from '../components/molecules/Sidebar'

function Cars() {
  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-16'>
        <span>Mes véhicules</span>
      </div>
      </div>
  )
}

export default Cars
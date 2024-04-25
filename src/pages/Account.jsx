import React from 'react'
import Sidebar from '../components/molecules/Sidebar'

function Account() {
  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-16'>
        <span>Mon compte</span>
      </div>
      </div>
  )
}

export default Account
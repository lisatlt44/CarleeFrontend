import React from 'react'
import Sidebar from '../components/molecules/Sidebar'

function Calendar() {
  return (
    <div className='flex w-full h-full absolute'>
      <Sidebar />
      <div className='w-full min-h-auto flex flex-col flex-grow p-16'>
        <span>Calendar</span>
      </div>
      </div>
  )
}

export default Calendar
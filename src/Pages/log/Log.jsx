import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Log = () => {
  return (
    <div className='flex'>
      <div className={`left w-2/12`}>
        <Sidebar />
      </div>

      <div>
        Log
      </div>

    </div>
  )
}

export default Log
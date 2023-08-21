import React from 'react'

const IconButton = ({icon}) => {
  return (

    // <div className="inline-block rounded-full border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
    <div  className="inline-block rounded-full border-gray-700 p-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring active:bg-gray-50 active:text-gray-900">
      <span className="sr-only"> Download </span>
      {icon}
    </div>
  )
}

export default IconButton

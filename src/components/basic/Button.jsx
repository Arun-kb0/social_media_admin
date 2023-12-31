import React from 'react'

const Button = ({name}) => {
  return (
      <button
        className="inline-block rounded-xl bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
      >
        {name}
      </button>
  )
}

export default Button
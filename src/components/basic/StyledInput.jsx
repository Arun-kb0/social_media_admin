import React, { useEffect, useRef } from 'react'

const StyledInput = ({ id, placeholder, type, label, value, name, onChange, isError }) => {
  

  return (
    <div className='pt-3 '>
      <label
        htmlFor={id}
        className={isError ? "inputLabelError"  : "inputLablelNormal"}
      >
        <input
          className="px-2 w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        <span
          className=" pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
          {label}
        </span>
      </label>

      {isError &&
        <span className='flex justify-start px-2 text-red-500 text-sm '>
          Invalid {name}
      </span>}

    </div>

  )
}

export default StyledInput
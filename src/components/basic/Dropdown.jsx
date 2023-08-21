import React from 'react'

const Dropdown = ({ ListItemNames, ListItemIcons, position }) => {

  return (
    <div className="relative">
      <div className={`${position} z-10 w-auto absolute max-w-64 rounded-md border border-gray-100 bg-white shadow-lg`}
        role="menu"
      >
        <div className="p-2">
          {ListItemNames?.map((name, index) => (
            <span 
              className="flex justify-start items-center rounded-lg gap-2 px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
              key={name}
            >
              {ListItemIcons[index]}
              {name}
            </span>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Dropdown
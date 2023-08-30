
import React from 'react'
import { BsSearch } from 'react-icons/bs'


const Search = () => {
  return (
    <div className="relative  rounded-xl">
      <label htmlFor="Search" className="sr-only font-semibold "> Search </label>
      <input
        type="text"
        id="Search"
        placeholder=" Search..."
        className="w-full rounded-xl border-gray-200 py-2.5 pe-10 px-1 shadow-sm sm:text-sm outline-none"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <BsSearch size={24}  className='opacity-70 active:text-green-700 active:opacity-100'/>
        </button>
      </span>
    </div>
  )
}


export default Search
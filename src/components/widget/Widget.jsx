import React, { useState } from 'react'
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'


const Widget = ({ title, isMoney, count, icon }) => {

  const [isInc, setIsInc] = useState(false)

  return (

    <article className=" hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className=" rounded-[10px]  bg-white pt-10 xl:p-30 lg:p-10 lg:px-20  md:p-4  sm:p-1 ">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-medium text-gray-900">{isMoney ? `$${count}` : count}</p>
          </div>

          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            {icon}
          </span>
        </div>

        <div className={isInc ? 'text-green-600' : ` mt-1 flex gap-2 text-red-600`}>
          {isInc
            ? <BsGraphUpArrow size={24} />
            : <BsGraphDownArrow size={24} />
          }

          <p className="flex gap-2 text-xs">
            <span className="font-medium"> 67.81% </span>
            <span className="text-gray-500"> Since last week </span>
          </p>
        </div>

      </div>
    </article>

  )
}

export default Widget
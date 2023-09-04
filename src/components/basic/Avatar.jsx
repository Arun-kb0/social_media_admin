import React from 'react'

const Avatar = ({ image, name, letterSize }) => {
  return (
    <>
      { image && image.length > 1
        ? <img class="h-full w-full rounded-full" src={image} alt="" />
        : <div className={`bg-red-500 text-gray-900 capitalize rounded-full h-full w-full text-xl font-semibold flex justify-center items-center`}>
          {name && name[0]}
        </div>
      }
    </>
  )
}

export default Avatar
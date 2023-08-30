import React, { useEffect, useState } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

const AlertBox = ({ error, isError }) => {

  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {

    if (error) {
      let timeOutId
      setIsVisible(true)
      timeOutId = setTimeout(() => {
        setIsVisible(false)
      }, [5000])

      return () => {
        timeOutId && clearTimeout(timeOutId)
      }
    }
  }, [error])

  return (
    <div
      className={isVisible && error ? "absolute top-20  rounded border-s-4 border-red-500 bg-red-50 p-4 " : "hidden"}
      role="alert"
    >
      <div className="flex items-center gap-2 text-red-800">
        <FiAlertTriangle />
        <strong className="block font-medium"> {error} </strong>
      </div>

      {/* <p className="mt-2 text-sm text-red-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi
        assumenda numquam deserunt consectetur autem nihil quos debitis dolor culpa.
      </p> */}
    </div>
  )
}

export default AlertBox
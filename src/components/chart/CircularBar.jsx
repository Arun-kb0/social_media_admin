import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'


const Circularbar = ({ growthPercentage }) => {


  return (
    <div className="px-10 py-8 shadow-xl rounded-3xl">
        <h2 className="flex justify-center mt-3 text-xl text-gray-400 font-medium py-4">Todays Posts </h2>

      <CircularProgressbar
        value={growthPercentage}
        text={`${growthPercentage}%`}
        strokeWidth={5}
      />
     
      <div className="flex justify-center mt-3">
        <h2 className="text-2xl text-gray-800 font-medium">{growthPercentage} </h2>
      </div>

      
      {/* <div className="flex justify-around mt-3">
        {true
          ? <div className="text-red-600 flex gap-2">
            100
            <BsGraphDownArrow size={24} />
          </div>
          : <div className="text-green-600 flex">
            <BsGraphUpArrow size={24} />
            100
          </div>
        }
      </div> */}

    </div>
  )
}

export default Circularbar

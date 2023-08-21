import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Widget from '../../components/widget/Widget'
import Circularbar from '../../components/chart/CircularBar'
import Chart from '../../components/chart/Chart'


const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="flex">
        <div className="left flex-1 w-4/12 ">
          <Sidebar />
        </div>
        <div className="right flex-6 w-10/12 h-[91vh] overflow-y-auto p-1">
          <div className="top flex gap-2 justify-evenly ">
            <Widget
              title={"Users"}
              isMoney={false}
              count={100}
              icon={<AiOutlineUser />}
            />
            <Widget
              title={"Posts"}
              isMoney={false}
              count={100}
              icon={<BsFillFileEarmarkPostFill />}
            />
            <Widget
              title={"Adds"}
              isMoney={false}
              count={100}
              icon={<BsFillFileEarmarkPostFill />}
            />
            <Widget
              title={"Earnings"}
              isMoney={true}
              count={100}
              icon={<RiMoneyDollarCircleLine />}
            />
          </div>

          <div className="mid flex p-2 mt-5 gap-5">
            <div className="w-4/12">
              <Circularbar/>
            </div>
            <div className="pt-10 w-8/12 shadow-2xl rounded-3xl">
              <h3 className='text-gray-400 py-4 font-medium text-lg flex justify-center '>Total Posts(last 6 months)</h3>
              <div className='flex justify-center'>
              <Chart/>
              </div>
            </div>
          </div>
          <div className="top">
            bottom
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
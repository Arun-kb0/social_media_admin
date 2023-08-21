import React from 'react'
import { BiSolidDashboard, BiBell, BiServer, BiLogIn, BiLogOut } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { AiFillSetting, AiOutlineUser } from 'react-icons/ai'



const Sidebar = () => {
  return (
    <div className='flex bg-slate-100 h-[91vh] overflow-y-auto '>
      <div className='flex-col w-full'>

        <div className='flex justify-center'>
          <h3 className='font-semibold text-lg text-teal-600'>Main</h3>
        </div>
        <span className="sidebarListItem">
          <BiSolidDashboard size={32} />
          Dashbord
        </span>
        <div className='flex justify-center'>

          <h3 className='font-semibold text-lg text-teal-600'>Lists</h3>
        </div>
        <span className="sidebarListItem">
          <HiOutlineUsers size={32} />
          Users
        </span>
        <span className="sidebarListItem">
          <BsFillFileEarmarkPostFill size={32} />
          Posts
        </span>

        <div className='flex justify-center'>
          <h3 className='font-semibold text-lg text-teal-600'>Usefull</h3>
        </div>
        <span className="sidebarListItem">
          <BiBell size={32} />
          Notifications
        </span>
        
        <div className='flex justify-center'>
          <h3 className='font-semibold text-lg text-teal-600'>Service</h3>
        </div>
        <span className="sidebarListItem">
          <BiServer size={32} />
          System Health
        </span>
        <span className="sidebarListItem">
          <HiOutlineClipboardDocumentList size={32} />
          Log
        </span>
        <span className="sidebarListItem">
          <AiFillSetting size={32} />
          Settings
        </span>

        
        <div className='flex justify-center'>
          <h3 className='font-semibold text-lg text-teal-600'>User</h3>
        </div>
        <span className="sidebarListItem">
          <AiOutlineUser size={32} />
          Profile
        </span>
        <span className="sidebarListItem">
          <BiLogOut size={32} />
          Logout
        </span>
        <span className="sidebarListItem">
          <BiLogIn size={32} />
          Login
        </span>

      </div>

    </div>
  )
}

export default Sidebar
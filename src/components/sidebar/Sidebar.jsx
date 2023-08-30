import React from 'react'
import { BiSolidDashboard, BiBell, BiServer, BiLogIn, BiLogOut } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { AiFillSetting, AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/features/auth/authActions'


const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()




  const handleUsers = () => {
    if (window.location !== '/users') {
      navigate('/users')
    }
  }

  const handlePosts = () => {
    if (window.location !== '/posts') {
      navigate('/posts')
    }
  }

  const handleLog = () => {
    if (window.location !== '/users') {
      navigate('/users')
    }
  }


  const handleDashbord= () => {
    if (window.location !== '/') {
      navigate('/')
    }
  }


  const hadleLogin = () => {
    if (window.location !== '/auth') {
      navigate('/auth')
    }
  }


  const hadleLogout = () => {
    dispatch(logout())
    if (window.location !== '/auth') {
      navigate('/auth')
    }
  }

  


  return (
    <div className='flex bg-slate-100 h-[91vh] overflow-y-auto no-scrollbar'>
      <div className='flex-col w-full'>

        <div className='flex justify-center'>
          <h3 className='font-semibold text-lg text-teal-600'>Main</h3>
        </div>
        <span className="sidebarListItem" onClick={handleDashbord} >
          <BiSolidDashboard size={32} />
          Dashbord
        </span>
        <div className='flex justify-center'>

          <h3 className='font-semibold text-lg text-teal-600'>Lists</h3>
        </div>
        <span className="sidebarListItem" onClick={handleUsers}>
          <HiOutlineUsers size={32} />
          Users
        </span>
        <span className="sidebarListItem" onClick={handlePosts}> 
          <BsFillFileEarmarkPostFill size={32} />
          Posts
        </span>

        <div className='flex justify-center'>
          <h3 className='font-semibold text-lg text-teal-600'>Usefull</h3>
        </div>
        <span className="sidebarListItem" onClick={handleDashbord}>
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
        <span className="sidebarListItem" onClick={hadleLogout}>
          <BiLogOut size={32} />
          Logout
        </span>
        <span className="sidebarListItem" onClick={hadleLogin}>
          <BiLogIn size={32} />
          Login
        </span>

      </div>

    </div>
  )
}

export default Sidebar
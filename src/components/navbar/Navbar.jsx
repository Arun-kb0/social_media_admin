import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { MdOutlineDarkMode } from 'react-icons/md'
import { BsChatRightDots } from 'react-icons/bs'
import { BiBell, BiLogIn, BiLogOut } from 'react-icons/bi'
import IconButton from '../basic/IconButton'
import Search from '../basic/Search'
import Dropdown from '../basic/Dropdown'
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/features/auth/authActions'
import Avatar from '../basic/Avatar'


const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const { token, photo, name } = useSelector(state => state.auth)


  const handleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
    console.log(isProfileMenuOpen)
  }

  const handleLogin = () => {
    window.location.pathname !== '/auth' && navigate('/auth')
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/auth')
  }

  const handleProfile = () => {
    window.location.pathname !== '/profile' && navigate('/profile')
  }

  const listItem = [
    token
      ? {
        name: "Logout",
        icon: <BiLogIn size={22} />,
        onClick: handleLogout
      }
      : {
        name: "Login",
        icon: <BiLogIn size={22} />,
        onClick: handleLogin
      },
    {
      name: "Profile",
      icon: <AiOutlineUser size={22} />,
      onClick: handleProfile
    },
  ]


  return (
    <div className=' h-16 flex justify-between items-center bg-slate-100'>

      <div className="p-1 w-3/12 flex items-center gap-2">
        <IconButton icon={<IoMenu size={24} />} />
        <p>Social Media Admin</p>
      </div>

      <div className='w-4/12'>
        <Search />
      </div>

      <div className="search gap-1 flex w-5/12 justify-end pr-2">
        <IconButton icon={<MdOutlineDarkMode size={24} />} />
        <IconButton icon={<BiBell size={24} />} />
        <IconButton icon={<BsChatRightDots size={24} />} />

        {token && <div className='w-11 h-11 '>
          <Avatar image={photo} name={name} />
        </div>}


      </div>

      {isProfileMenuOpen && <Dropdown
        ListItems={listItem}
        position={"end-2 mt-7"}
      />}

    </div>
  )
}


export default Navbar
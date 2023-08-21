import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { MdOutlineDarkMode } from 'react-icons/md'
import { BsChatRightDots } from 'react-icons/bs'
import { BiBell, BiLogIn ,BiLogOut } from 'react-icons/bi'
import IconButton from '../basic/IconButton'
import Search from '../basic/Search'
import Dropdown from '../basic/Dropdown'
import { AiOutlineUser } from 'react-icons/ai'


const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
// ! temp url
  const imageUrl = new window.URL("https://images.pexels.com/photos/17086829/pexels-photo-17086829/free-photo-of-woman-posing-with-hands-on-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

  const handleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
    console.log(
      isProfileMenuOpen
    )
  }

  
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

        {imageUrl
          ? < img
          className=' w-11 h-11 rounded-full object-cover'
          src={imageUrl}
          alt=""
          onClick={handleProfileMenu}
          />
          : <div className='flex justify-center items-center w-11 h-11 rounded-full bg-orange-600 text-3xl'>
            {"A"}
          </div>
        }
      </div>

      {isProfileMenuOpen && <Dropdown
        ListItemNames={["Profile", "Login","Logout"]}
        ListItemIcons={[<AiOutlineUser  size={22}/>, <BiLogIn  size={22}/>, <BiLogOut size={22}/>]}
        position={"end-2 mt-7"}
      />}
      
    </div>
  )
}


export default Navbar
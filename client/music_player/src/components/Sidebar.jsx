import React, { useState } from 'react'
import { Logo } from '../assets/img'
import { NavLink } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/fa';
import { VscLibrary } from 'react-icons/vsc'
import { PiPlusSquareFill } from 'react-icons/pi'
import { isActiveStyles, isNotActiveStyles } from '../utills/styles'
import { useStateValue } from '../context/StateProvider'
import { actionType } from "../context/reducer";
import '../styles/sidebar.css'

function Sidebar() {

  const [{ songSearch }, dispatch] = useStateValue();
  const [toggleSearch, setToggleSearch] = useState(false)

  function handleSearch() {
    setToggleSearch(!toggleSearch)
    console.log('songsearch : ', songSearch, toggleSearch)
    dispatch({
      type: actionType.SET_SONG_SEARCH,
      songSearch: toggleSearch,
    })
  }


  return (
    <div className='bg-black flex flex-col items-center w-225 h-full z-5' id='sidebar'>
      <div className='mx-5 text-lg m-5'> <NavLink to={'/home'} >
        <img src={Logo} alt="logo" className='max-w-12 max-h-12' />
      </NavLink>

        <ul className='flex flex-col justify-center items-center m-14 gap-4'>
          <li className='gap-5 flex flex-row'>
            <FaHome className='text-3xl' />
            <NavLink to={'/home'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} >Home</NavLink>
          </li>
          <li className='gap-5 text-lg flex flex-row'
            onClick={() => {
              handleSearch()
              console.log(toggleSearch)
            }}
          >
            <FaSearch className='text-3xl' />
            <NavLink to={'/'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} >Search</NavLink>
          </li>
          <hr className='text-textColor bg-white' />
          <li className='gap-5 text-lg flex flex-row'>
            <VscLibrary className='text-3xl' />
            <NavLink to={'/dashboard/albums'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} >Albums</NavLink>
          </li>
          <li className='gap-5 text-lg flex flex-row'>
            <PiPlusSquareFill className='text-3xl' />
            <NavLink to={'/dashboard/newSong'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} >Add Songs</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
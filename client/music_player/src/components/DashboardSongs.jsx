import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoAdd, IoPause, IoPlay, IoTrash } from 'react-icons/io5'
import { AiOutlineClear } from 'react-icons/ai'
import { useStateValue } from '../context/StateProvider'
import { getAllSongs } from '../api'
import { actionType } from '../context/reducer'
import SongCard  from './SongCard'

function DashboardSongs() {
  const [songFilter, setSongFilter] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  const [{allSongs} , dispatch] = useStateValue();
  const [filteredSongs, setFilteredSongs] = useState(null)
  useEffect(() => {
      if (!allSongs){
        getAllSongs().then( data => {
          dispatch({
            type: actionType.SET_ALL_SONGS,
            allSongs : data.songs,
          })
        })
      }
  } , [])

  useEffect(()=> {
    if (songFilter.length > 0){
      const filtered = allSongs.filter(
        (data)=>
        data.artist.toLowerCase().includes(songFilter) || data.language.toLowerCase().includes(songFilter) || data.name.toLowerCase().includes(songFilter)
      )
      setFilteredSongs(filtered)
    }
    else{
      setFilteredSongs(null)
    }
  } , [songFilter])

  return (
      <div className="w-full h-screen p-4 flex items-center justify-start flex-col overflow-auto">
        <div className='w-full flex justify-center items-center gap-20'>
          <NavLink to={"/dashboard/newSong"} className="flex  justify-center items-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-500 hover:shadow-md cursor-pointer">
            <IoAdd className='text-textColor'/>
          </NavLink>

          <input type="text" className={`w-52 px-4 py-2 border ${isFocus ? "border-gray-500 shadow-md" : "border-gray-300"} rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold`} placeholder='Search  Here....'  onChange={(e) => setSongFilter(e.target.value)} value={songFilter} onBlur={() => setIsFocus(false)} onFocus={() => setIsFocus(true)}/>
          <i onClick={()=> setSongFilter("")}>
            <AiOutlineClear className='text-3xl text-textColor cursor-pointer'></AiOutlineClear>
          </i>
        </div>

        {/* Main Container */}
        <div className="relative w-full my-4 p-4 py-16 rounded-md">
          {/* The Count */}
          <div className="absolute top-4 left-4">
            <p className='text-xl font-bold text-textColor'>
              <span className='text-sm font-semibold text-textColor'>Count :  </span>
             { allSongs?.length }
            </p>
          </div>

          <SongContainer data={filteredSongs ? filteredSongs :  allSongs} />

        </div>
      </div>
  )
}

export const SongContainer = ( {data} ) => {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center justify-evenly">
      {data && data.map((song , i) => (
        <SongCard key={song._id} data={song} index={i} type="song"/>
      ))}
    </div>
  )
}
export default DashboardSongs
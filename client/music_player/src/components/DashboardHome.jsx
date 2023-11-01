import React, { useEffect } from 'react'
import { useStateValue } from "../context/StateProvider"
import { getAllAlbums, getAllUsers, getAllArtists, getAllSongs } from '../api'
import { motion } from 'framer-motion'
import { actionType } from '../context/reducer'
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { bgColors } from '../utills/styles'
export const DashboardCard = ({ icon, name, count }) => {
  const bg_color = bgColors[parseInt(Math.random() * bgColors.length)];

  return (
    <div
      style={{ background: `${bg_color}` }}
      className={`p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center`}
    >
      {icon}
      <p className="text-xl text-stone-950 font-semibold">{name}</p>
      <p className="text-sm text-stone-950">{count}</p>
    </div>
  );
};

function DashboardHome() {
  const [{ allUsers, allSongs, allArtists, allAlbums }, dispatch] = useStateValue()

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data,
        })
      })
    }

    if (!allArtists) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist
        })
      })
    }

    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album,
        })
      })
    }
    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.song,
        })
      })
    }
  }, [])


  return (
    <div className='w-full h-screen p-6 flex items-start  justify-evenly flex-wrap bg-darkBg'>
      <DashboardCard icon={<FaUsers className="text-3xl text-stone-950" />} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0} />
      <DashboardCard icon={<GiLoveSong className="text-3xl text-stone-950" />} name={"Songs"} count={allSongs?.length > 0 ? allSongs?.length : 0} />
      <DashboardCard icon={<RiUserStarFill className="text-3xl text-stone-950" />} name={"Artist"} count={allArtists?.length > 0 ? allArtists?.length : 0} />
      <DashboardCard icon={<GiMusicalNotes className="text-3xl text-stone-950" />} name={"Album"} count={allAlbums?.length > 0 ? allAlbums?.length : 0} />
    </div>
  )
}

export default DashboardHome
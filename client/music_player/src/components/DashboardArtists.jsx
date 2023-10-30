import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { getAllArtists } from '../api';
import SongCard from './SongCard';

function DashboardArtists() {
  const [{allArtists} , dispatch] = useStateValue();

  useEffect(() => {
    if (!allArtists) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist
        })
      })
    }
} , [])

  return (
    <div className='w-full h-screen p-4 flex justify-start flex-col'>
      {/* Main Container  */}
      <div className="relative w-full my-4 p-4 py-16  rounded-md">
          <ArtistContainer data={allArtists} />
        </div>
    </div>
  )
}

export const ArtistContainer = ( {data} ) => {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center justify-evenly">
      {data && data.map((song , i) => (
        <SongCard key={song._id} data={song} index={i} type="artist"/>
      ))}
    </div>
  )
}

export default DashboardArtists
import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { getAllAlbums } from '../api';
import SongCard from './SongCard';

function DashboardAlbums() {

  const [{ allAlbums }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album,
        })
      })
    }
  }, [])
  
  return (
    <div className='w-full p-4 flex h-screen items-center justify-start flex-col'>
      {/* Main Container  */}
      <div className="relative w-full my-4 p-4 py-16 rounded-md">
        <AlbumsContainer data={allAlbums} />
      </div>
    </div>
  )
}

export const AlbumsContainer = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center justify-evenly">
      {data && data.map((song, i) => (
        <SongCard key={song._id} data={song} index={i} type="album"/>
      ))}
    </div>
  )
}

export default DashboardAlbums
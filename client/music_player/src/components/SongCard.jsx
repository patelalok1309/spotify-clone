import React from 'react'
import { motion } from 'framer-motion'
// import { IoTrash } from 'react-icons/io5'
// import { deleteAlbumById, deleteArtistById, deleteSongById, getAllAlbums, getAllArtists, getAllSongs } from '../api'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

function SongCard({ data, index, type }) {
    const [{ songIndex , isSongPlaying }, dispatch] = useStateValue();

    const addToContext = () => {
        if(!isSongPlaying) {
            dispatch({
                type : actionType.SET_ISSONG_PLAYING,
                isSongPlaying : true,
            })
        }

        if(songIndex !== index) {
            dispatch({
                type: actionType.SET_SONG_INDEX,
                songIndex : index
            })
        }
    }

    return (
        <motion.div className='relative w-40 min-w-210 px-2  py-4 cursor-pointer bg-card hover:bg-emerald-950 shadow-md rounded-lg flex flex-col items-center '
            onClick={type === 'song' && addToContext }
        >
            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
                <motion.div>
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={data.imageURL}
                        className='w-40 h-40 rounded-lg object-cover'
                         />
                </motion.div>
            </div>

            {/* Artist's Name  */}
            <p className='text-base text-headingColor text-center font-semibold my-2'>
                {data.name.length > 25 ? `${data.name.slice(0, 25)}..` : data.name}

                {data.artist && (
                    <span className='block text-sm text-gray-400 my-1'>{data.artist.length > 25 ? `${data.artist.slice(0, 25)}...` : data.artist}</span>
                )}
            </p>
        </motion.div>
    )
}

export default SongCard
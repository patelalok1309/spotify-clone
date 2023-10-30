import React, { useEffect } from 'react'
import { getAllSongs } from '../api'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

function ListSongs() {

    const [{ allSongs }, dispatch] = useStateValue("");

    useEffect(() => {
        if (!allSongs) {
            getAllSongs((data) => {
                dispatch({
                    type: actionType.SET_ALL_SONGS,
                    allSongs: data.songs
                })
            })
        }
    }, []);


    return (
        <div>
            <p>ListSongs</p>
        </div>
    )
}

export default ListSongs
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { isActiveStyles, isNotActiveStyles } from '../utills/styles'
import { FaCrown } from 'react-icons/fa'
import { useStateValue } from '../context/StateProvider'
import { app } from '../config/firebase.config'
import { getAuth } from 'firebase/auth'
import { color, motion } from 'framer-motion'


function Header() {

    const [{ user }, dispatch] = useStateValue()
    const [isMenu, setIsMenu] = useState(false);

    const navigate = useNavigate()

    const logOut = () => {
        const firebaseAuth = getAuth(app);
        firebaseAuth.signOut().then(() => {
            window.localStorage.setItem("auth", "false")
        }).catch((e) => console.log(e))

        navigate("/login", { replace: true })
    }
    return (
        <header 
        style={{width : 'calc(100vw - 225px)' , backgroundColor : '#101010'}}
        className='flex items-center p-4 md:py-2 md:px-6 h-20 w-full'>
            

            <ul className='flex justify-center ml-7'>
                <li className='mx-5 text-lg'> <NavLink to={'/home'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} >Home</NavLink> </li>
                <li className='mx-5 text-lg' > <NavLink to={'/musics'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Musics</NavLink> </li>
                <li className='mx-5 text-lg'> <NavLink to={'/premium'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Premium</NavLink> </li>
                <li className='mx-5 text-lg'> <NavLink to={'/contact'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Contact us</NavLink> </li>
            </ul>

            <div
                onMouseEnter={() => setIsMenu(true)}
                onMouseLeave={() => setIsMenu(false)}
                className="flex items-center ml-auto cursor-pointer gap-2 relative">
                <img src={user?.user.imageURL} alt="" className='w-12 min-w-[44px] object-cover rounded-full shadow-lg' referrerPolicy='no-referrer' />
                <div className='flex flex-col'>
                    <p className='text-textColor text-lg hover:text-headingColor font-semibold'>{user?.user?.name}</p>
                    <p className='flex items-center gap-2 text-xs text-gray-500 font-normal'>Premium Member <FaCrown className="text-sm -ml-1 text-yellow-500" /> </p>
                </div>

                {isMenu && <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    style={{backgroundColor : 'rgba(255,255,255,0.4)'}}
                    className='absolute z-10 top-12 right-0 w-275 gap-2  shadow-lg backdrop-blur-sm flex flex-col items-start p-3 rounded-md'>
                    <NavLink to={'/userProfile'}>
                        <p className='text-base text-textColor hover:font-semibold duration-150 translate-all ease-in-out'>Profile</p>
                    </NavLink>

                    <p className='text-base text-textColor hover:font-semibold duration-150 translate-all ease-in-out'>My Favourites</p>

                    <hr />

                    {user?.user?.role === 'admin' && (<>
                        <NavLink to={"/dashboard/home"}>
                            <p className='text-base text-textColor hover:font-semibold duration-150 translate-all ease-in-out'>DashBoard</p>
                        </NavLink>
                    </>)}

                    <hr />

                    <p className='text-base text-textColor hover:font-semibold duration-150 translate-all ease-in-out' onClick={logOut}>Sign-out</p>
                </motion.div>}
            </div>


        </header>
    )
}

export default Header
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard, Home, Login, MusicPlayer } from './components';
import { useEffect, useState } from 'react';
import { app } from './config/firebase.config';
import { getAuth } from 'firebase/auth'
import { AnimatePresence } from 'framer-motion';
import { validateUser } from './api';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
import { motion  } from "framer-motion"

function App() {

  // Initializing firebase authentication 
  const firebaseAuth = getAuth(app)
  const naviagte = useNavigate();

  const [{user , isSongPlaying}, dispatch] = useStateValue();

  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

  // Uses the useEffect hook to listen for changes in the user's authentication state using onAuthStateChanged. If a user is authenticated, it retrieves their ID token, validates it using the validateUser function, and updates the user state accordingly. If no user is authenticated, it sets auth to false, clears local storage, and navigates to the login page.
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          // console.log(token)
          validateUser(token).then((data) => {
            dispatch({
              type: actionType.SET_USER,
              user : data
            })
          })
        })
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", false);
        dispatch({
          type: actionType.SET_USER,
          user: null,
        })
        naviagte("/login")
      }
    })
  }, [])

  return (
    <AnimatePresence mode='wait'> 
      <div className="App h-auto min-w-[680px] bg-darkBg flex justify-center items-center">
        <Routes>
          <Route path='/login' element={<Login setAuth={setAuth} />} />
          <Route path='/*' element={<Home />} />
          <Route path='/dashboard/*' element={<Dashboard />}/> 
        </Routes>

        {isSongPlaying && (
          <motion.div
            initial = {{ opacity : 0 , y : 50}}
            animate = {{ opacity : 1 , y : 0}}
            className={`fixed min-w-[700px] h-26  inset-x-0 bottom-0  bg-cardOverlay drop-shadow-2xl backdrop-blur-md flex items-center justify-center`}
          >
            <MusicPlayer />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}

export default App;

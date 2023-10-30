import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'

function Home() {
  return (
    <div className='bg-darkBg text-textColor w-screen h-screen flex'>
      <Sidebar className='w-225 text-textColor sidebar' />
      <Body style={{calc : '(100vw - 225px)'}}/>
      {/* col-span-9 bg-white p-4 */}
    </div>
  )
}

export default Home
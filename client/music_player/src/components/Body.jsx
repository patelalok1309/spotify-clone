import React from 'react'
import Header from './Header'
import DashboardSongs from './DashboardSongs'
import { HomeSongs } from '.'

function Body() {

  return (
    <div className='flex flex-col'>
      <Header className='w-auto text-textColor p-4' />
      {/* <DashboardSongs className='w-auto'/> */}
      <HomeSongs />
    </div>
  )
}

export default Body
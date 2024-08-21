import React from 'react'
import Header from './home/Header'
import Sidebar from './home/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className=' w-full h-full'>
      <Header/>
      <Sidebar/>
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout

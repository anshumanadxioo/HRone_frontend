import React from 'react'
import Header from './home/Header'
import Sidebar from './home/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='fixed w-full h-full'>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout

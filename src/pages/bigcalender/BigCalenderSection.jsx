import React from 'react'
import Header from "../../home/header/Header"
import Sidebar from "../../home/sidebar/Sidebar"
import FavoriteSection from "../../pages/profile/FavoriteSection"
import MyCalender from './MyCalender'
import { Outlet } from 'react-router-dom'
const BigCalenderSection = () => {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <Outlet/> */}
      <div className="flex justify-start bg-gray-200 h-[100vh]">
        <FavoriteSection />
        <MyCalender />
      </div>
    </>
  )
}

export default BigCalenderSection
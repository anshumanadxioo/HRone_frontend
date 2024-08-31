import React from 'react'
import Header from "../../home/header/Header"
import Sidebar from "../../home/sidebar/Sidebar"
import FavoriteSection from "../../pages/profile/FavoriteSection"
import MyCalender from './MyCalender'
import { Outlet } from 'react-router-dom'

const BigCalenderSection = () => {
  return (
    <>
      <div className="flex flex-between bg-gray-200">
        <FavoriteSection />
        <MyCalender />
      </div>
    </>
  )
}

export default BigCalenderSection
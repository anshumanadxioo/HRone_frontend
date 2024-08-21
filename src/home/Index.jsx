import React from 'react'
import UserInfo from './UserInfo'
import HighlightAccordion from './highlights/Accordian'
import UserFeed from './UserFeed'
import Inbox from './Inbox'
import { Outlet } from 'react-router-dom'


function Index() {
  return (
    <div className='w-full h-full '>
        <UserInfo/>
        <div className="flex items-center justify-between h-[90vh] flex-grow">
        <HighlightAccordion/>
        <UserFeed/>
        <Inbox />
        </div> 
    </div>
  )
}

export default Index

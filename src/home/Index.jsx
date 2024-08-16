import React from 'react'
import UserInfo from './UserInfo'
import HighlightAccordion from './highlights/Accordian'
import UserFeed from './UserFeed'
import Inbox from './Inbox'


function Index() {
  return (
    <div className=' bg-slate-100 w-full  '>
        <UserInfo/>
        <div className="flex items-center justify-between  h-screen px-4 -mt-2  ">
        <HighlightAccordion/>
        <UserFeed/>
        <Inbox />
        </div> 
    </div>
  )
}

export default Index

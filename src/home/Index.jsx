import React from 'react'
import UserInfo from './UserInfo'
import Sidebar from './Sidebar'
import Header from './Header'
import HighlightAccordion from './highlights/Accordian'


function Index() {
  return (
    <div className=' bg-slate-100 w-full'>
        <Header/>
        <Sidebar/>
        <UserInfo/>
        <HighlightAccordion/>
        
    </div>
  )
}

export default Index

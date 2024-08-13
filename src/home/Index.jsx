import React from 'react'
import UserInfo from './UserInfo'
import Sidebar from './Sidebar'
import Header from './Header'
import UserFeed from './UserFeed'
import Inbox from './Inbox'


function Index() {
  return (
    <div >
        <Header/>
        <Sidebar/>
        <UserInfo/>
        <div className="flex items-center justify-between w-full h-screen p-4 mt-20 ">
        <UserFeed/>
        <Inbox />
        </div>
      
        
    </div>
  )
}

export default Index

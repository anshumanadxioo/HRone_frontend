import React, { useState } from 'react';
import Header from '../../home/Header';
import Sidebar from '../../home/Sidebar';
import FavoriteSection from "./FavoriteSection";
import UserProfile from "./UserProfile";

function SocialProfile() {
 

  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <FavoriteSection/>
        <div className= '  h-screen overflow-y-auto'>

        <UserProfile/>        
        </div>

          
      </div>
    </>
  );
}

export default SocialProfile;

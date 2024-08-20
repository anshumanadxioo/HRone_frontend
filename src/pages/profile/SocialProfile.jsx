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
        <UserProfile/>
        

        
      </div>
    </>
  );
}

export default SocialProfile;

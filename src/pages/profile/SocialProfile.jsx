import React, { useState } from 'react';
import FavoriteSection from "./FavoriteSection";
import UserProfile from "./UserProfile";
import { Outlet } from 'react-router-dom';

function SocialProfile() {
 

  return (
    <>
      <div>
        <Outlet/>
        <div className=' relative flex justify-start'>
        <div className='fixed h-[100vh] '><FavoriteSection/></div>
        <div className=' absolute left-[30%] mt-24'><UserProfile/></div>
        </div>
      </div>
    </>
  );
}

export default SocialProfile;

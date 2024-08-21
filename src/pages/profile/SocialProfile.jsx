import React, { useState } from 'react';
import FavoriteSection from "./FavoriteSection";
import UserProfile from "./UserProfile";
import { Outlet } from 'react-router-dom';

function SocialProfile() {
 

  return (
    <>
      <div>
        <Outlet/>
        <FavoriteSection/>
        <UserProfile/>
      </div>
    </>
  );
}

export default SocialProfile;

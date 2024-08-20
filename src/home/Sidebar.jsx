import React, { useState } from 'react';
import { FaHome, FaInbox, FaEnvelope, FaUser } from 'react-icons/fa';
import { TiPin } from "react-icons/ti";
import PinPage from '../pages/pin/PinPage';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  // Navigation
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/home/profile');
  };

  const handleHomeClick = () => {
    navigate('/home'); 
  };

  const [isOpenPin, setIsOpenPin] = useState(false);

  const toggleSliderPin = () => {
    setIsOpenPin(!isOpenPin);
  };

  return (
    <div className='absolute'>
      <div className='w-[60px] min-h-[100vh] bg-slate-100 shadow-lg rounded-lg flex flex-col items-center py-4'>
        {/* Home Icon */}
        <div className='p-3 rounded-lg hover:bg-gray-200 flex items-center justify-center'>
          <FaHome className='text-gray-600 hover:text-gray-900 text-xl cursor-pointer ' onClick={handleHomeClick}/>
        </div>

        {/* Inbox Icon */}
        <div className='p-3 rounded-lg hover:bg-gray-200 mt-4 flex items-center justify-center'>
          <FaInbox className='text-gray-600 hover:text-gray-900 text-xl cursor-pointer'  />
        </div>

        {/* Request Icon */}
        <div className='p-3 rounded-lg hover:bg-gray-200 mt-4 flex items-center justify-center'>
          <FaEnvelope className='text-gray-600 hover:text-gray-900 text-xl cursor-pointer' />
        </div>

        {/* Spacer to push Profile Icon to the bottom */}
        <div className='flex-grow'></div>

        {/* Pin Icon */}
        <div className='p-4 rounded-full mb-14 flex items-center justify-center'>
          <TiPin className='text-gray-700 text-4xl cursor-pointer' onClick={toggleSliderPin} />
        </div>

        {/* Profile Icon */}
        <div className='p-3 rounded-full bg-slate-300 mb-14 flex items-center justify-center' onClick={handleProfileClick}>
          <FaUser className='text-gray-700 text-xl cursor-pointer' />
        </div>
      </div>

      {/* Conditionally render PinPage based on isOpenPin */}
      {isOpenPin && (
        <PinPage isOpenPin={isOpenPin} toggleSliderPin={toggleSliderPin} />
      )}
    </div>
  );
}

export default Sidebar;

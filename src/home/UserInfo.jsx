import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import SettingPage from '../pages/settings/SettingPage'; // Import the SettingPage component

function UserInfo() {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleBackClick = () => {
    setShowSettings(false);
  };

  return (
    <div className='ml-[64px] bg-customGreen text-white p-4'>
      {showSettings ? (
        <SettingPage onBackClick={handleBackClick} />
      ) : (
        <div className='flex justify-between'>
          <div>
            <p className='text-2xl font-bold'>Hello, Anshuman!</p>
            <p className='mt-2'>Hope you are having a great day</p>
          </div>
          <div className='bg-orange-500 text-white rounded w-[44px] h-[36px] mr-9'>
            <FiSettings
              className='text-xl text-center ml-3 mt-2 cursor-pointer'
              onClick={handleSettingsClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;

import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import SettingPage from '../pages/settings/SettingPage';
import { useColor } from '../pages/colorcontext/ColorContext';

function UserInfo() {
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const { color } = useColor();

  const toggleSliderSetting = () => {
    setIsOpenSetting(!isOpenSetting);
  };


  const colorMapping = {
    '#02563D': '#357864',
    '#237DD1': '#4F97DA',
    '#1D2435': '#282F3F',
    '#645788': '#746894',
    '#AF42AE': '#BF68BE',
    '#12C4AC': '#59D6C9',
    '#E6793B': '#E98D4E',
  };

 
  const backgroundColor = colorMapping[color] || '#357864'; 

  return (
    <>
    <div className='ml-[64px]  bg-customGreen text-white p-4 mt-14'>
      <div className='flex justify-between'>
        <div>
          <p className='text-2xl font-bold'>Hello, Anshuman!</p>
          <p className='mt-2'>Hope you are having a great day</p>
        </div>
        <div className='bg-orange-500 text-white rounded w-[44px] h-[36px] mr-9'>
          <FiSettings
            className='text-xl text-center ml-3 mt-2 cursor-pointer'
            onClick={toggleSliderSetting}
          />
        </div>
      </div>

        {/* Conditionally render SettingPage based on isOpenSetting */}
        {isOpenSetting && (
          <SettingPage
            isOpenSetting={isOpenSetting}
            toggleSliderSetting={toggleSliderSetting}
          />
        )}
      </div>
    </>
  );
}

export default UserInfo;

import React, { useState } from 'react';
import { BiSitemap } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdNotificationAdd } from 'react-icons/md';
import Notification from '../pages/notification/Notification'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-green-900 text-white p-2 flex items-center justify-between relative'>
      <div className='text-lg font-semibold'>
        ADIXOO BRAND PVT LTD
      </div>

      <div className='flex items-center flex-grow justify-center'>
        <div className='flex items-center bg-white text-gray-900 rounded-lg p-1 w-full max-w-md'>
          <FaMagnifyingGlass className='text-gray-500' />
          <input
            type='text'
            placeholder='Search for actions, pages, requests, reports, people...'
            className='flex-grow px-2 py-1 text-gray-900 border-none rounded-lg focus:outline-none'
          />
        </div>
        <div className='ml-8 bg-white text-gray-900 rounded p-2'>
          <BiSitemap className='text-gray-500' />
        </div>
      </div>

      <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
        <MdNotificationAdd className='text-xl' onClick={toggleSlider} />
      </div>


      <Notification isOpen={isOpen} toggleSlider={toggleSlider} />
    </div>
  );
}

export default Header;

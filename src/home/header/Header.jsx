import React, { useState } from 'react';
import { MdNotificationAdd } from 'react-icons/md';
import Notification from '../../pages/notification/Notification';
import { useColor } from '../../pages/colorcontext/ColorContext';
import Searchbar from './searchbar/Searchbar';
import { RiOrganizationChart } from "react-icons/ri";
import OrganizationChart from "../../pages/organizationchart/organizationChart"; // Capitalized 'OrganizationChart'

function Header() {
  const [isOpenChart, setIsOpenChart] = useState(false);
  const toggleChart = () => {
    setIsOpenChart(!isOpenChart);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  const { color } = useColor();
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
    <div className='text-white p-2 h-[60px] flex items-center justify-between fixed w-full z-40 top-0'
      style={{ backgroundColor: color }}>
      <div className='text-[20px] font-bold'>
        ADIXOO BRAND PVT LTD
      </div>

      <div className='flex items-center flex-grow justify-center'>
        <Searchbar />
        <div className='ml-2 bg-white text-gray-900 p-2 rounded-sm cursor-pointer'>
          <RiOrganizationChart className='text-gray-500 text-xl' onClick={toggleChart} />
        </div>
      </div>

      <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
        <MdNotificationAdd className='text-3xl cursor-pointer' onClick={toggleSlider} />
      </div>

      <OrganizationChart isOpenChart={isOpenChart} toggleSliderChart={toggleChart} />
      <Notification isOpen={isOpen} toggleSlider={toggleSlider} />
    </div>
  );
}

export default Header;

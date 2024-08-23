import React, { useState } from 'react';
import { FaHome, FaInbox, FaEnvelope, FaUser } from 'react-icons/fa';
import { TiPin } from "react-icons/ti";
import PinPage from '../../pages/pin/PinPage';
import { NavLink } from 'react-router-dom';
import { FaCodePullRequest } from 'react-icons/fa6';
import { useColor } from '../pages/colorcontext/ColorContext';


function Sidebar() {
  const {color } = useColor();
  const [isOpenPin, setIsOpenPin] = useState(false);

  const toggleSliderPin = () => {
    setIsOpenPin(!isOpenPin);
  };

  return (
    <div className='w-[60px] min-h-[100vh] bg-slate-100 shadow-lg rounded-lg flex flex-col items-center py-4 fixed z-10 top-12'>
      {/* Home Icon */}
      <div
        className='p-3 rounded-lg flex items-center justify-center'
        style={{ backgroundColor: 'white', borderColor: color }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.querySelector('svg').style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.querySelector('svg').style.color = color;
        }}
      >
        <NavLink to='home'>
          <FaHome
            className='text-color text-xl cursor-pointer'
            style={{ color }}
          />
        </NavLink>
      </div>

      {/* Inbox Icon */}
      <div
        className='p-3 rounded-lg mt-4 flex items-center justify-center'
        style={{ backgroundColor: 'white', borderColor: color }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.querySelector('svg').style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.querySelector('svg').style.color = color;
        }}
      >
        <NavLink to="inbox" >
        <FaInbox
          className='text-color text-xl cursor-pointer'
          style={{ color }}
          />
          </NavLink>
      </div>

      {/* Request Icon */}
      <div
        className='p-3 rounded-lg mt-4 flex items-center justify-center'
        style={{ backgroundColor: 'white', borderColor: color }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.querySelector('svg').style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.querySelector('svg').style.color = color;
        }}
      >
        <NavLink to='requests'>
          <FaCodePullRequest
            className='text-color text-xl cursor-pointer'
            style={{ color }}
          />
        </NavLink>
      </div>

      {/* Spacer to push Profile Icon to the bottom */}
      <div className='flex-grow'></div>

      {/* Pin Icon */}
      <div
        className='m-32 rounded-full mb-14 flex items-center justify-center'
        style={{ backgroundColor: 'white', borderColor: color }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.querySelector('svg').style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.querySelector('svg').style.color = color;
        }}
      >
        <TiPin
          className='text-color text-4xl cursor-pointer'
          style={{ color }}
          onClick={toggleSliderPin}
        />
      </div>

      {/* Profile Icon */}
      <div
        className='p-3 rounded-full bg-slate-300 mb-14 flex items-center justify-center'
        style={{ backgroundColor: 'white', borderColor: color }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.querySelector('svg').style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.querySelector('svg').style.color = color;
        }}
      >
        <NavLink to='socialprofile'>
          <FaUser
            className='text-color text-xl cursor-pointer'
            style={{ color }}
          />
        </NavLink>
      </div>

      {/* Conditionally render PinPage based on isOpenPin */}
      {isOpenPin && (
        <PinPage isOpenPin={isOpenPin} toggleSliderPin={toggleSliderPin} />
      )}
    </div>
  );
}

export default Sidebar;

import React from 'react';
import { FaHome, FaInbox, FaEnvelope, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate=useNavigate();
  return (
    <div className='fixed'>
      <div className='w-[60px] min-h-[100vh] bg-slate-100  shadow-lg rounded-lg flex flex-col items-center py-4'>
        {/* Home Icon */}
        <div className='p-3 rounded-lg hover:bg-gray-200 flex items-center justify-center'>
          <FaHome className='text-gray-600 hover:text-gray-900 text-xl' />
        </div>
        
        {/* Inbox Icon */}
        <div className='p-3 rounded-lg hover:bg-gray-200 mt-4 flex items-center justify-center'>
          <FaInbox className='text-gray-600 hover:text-gray-900 text-xl' />
        </div>

        {/* Request Icon */}
        <div className='p-3 rounded-lg hover:bg-gray-200 mt-4 flex items-center justify-center'>
          <FaEnvelope className='text-gray-600 hover:text-gray-900 text-xl' />
        </div>

        {/* Spacer to push Profile Icon to the bottom */}
        <div className='flex-grow'></div>

        {/* Profile Icon */}
        <div className='p-3 rounded-full bg-slate-300  mb-14 flex items-center justify-center cursor-pointer'>
          <FaUser className='text-gray-700 text-xl ' onClick={()=>navigate('/myprofile/social-profile')} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

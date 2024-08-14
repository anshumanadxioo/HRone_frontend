import React from 'react';
import { FaHandsClapping } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";

const UserFeed = () => {
  return (
    <div className='pl-2'>
      <div className="relative ml-4 mt-[220px] ">
        <p className="text-xl font-semibold mb-4">Feed</p>
        <IoFilterOutline className="absolute top-0 right-0 mr-1  text-2xl " />
      </div>
      <div className="flex flex-col items-start ml-2   w-full max-w-lg px-4  shadow-2xl ">
        <div className="flex items-center mb-2">
          <img
            src="/temp-profile.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className='mt-4'>
            <p className="font-bold text-base mb-[-3px]">Ankur Chourasiya</p>
            <p className="text-gray-600  text-sm mb-[-3px]">Adixoo Brand</p>
            <p className="text-gray-600 text-sm mb-[-3px]">software intern</p>
            <p className="text-gray-500 text-sm mb-2">2 hours ago</p>
          </div>
        </div>
        <hr className="border-t border-gray-300 w-full" />
        <div className="mt-4">
          <p className="text-gray-700 text-base mb-4">This is a brief description of the post. It provides some context or details about the content shared by the user.</p> {/* Post description */}
          <img
            src="/temp-profile.jpg"
            alt="Post"
            className="w-full h-96 object-cover"
          />
        </div>
        <hr className="border-t border-gray-300 w-full" />
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-4 text-gray-600">
              {/* we just have to add our desired icon here  */}
              <span>Cheers: 123</span>
              <span>Comments: 45</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-pink-100 p-4 rounded-lg shadow-md w-full h-16">
            <FaHandsClapping className="text-black text-4xl p-2 rounded-full bg-white shadow-sm" />
            <span className="text-black font-semibold">Cheers</span>
            <FaRegComments className="text-black text-4xl p-2 rounded-full bg-white shadow-sm" />
            <span className="text-black font-semibold">Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFeed;


// {/* <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
// <div className="flex flex-col items-start mb-4 w-full max-w-lg px-4 mt-12">
//   <div className="flex items-center mb-2">
//     <img
//       src="/temp-profile.jpg"
//       alt="Profile"
//       className="w-12 h-12 rounded-full object-cover mr-4"
//     />
//     <div>
//       <p className="font-bold text-lg">John Doe</p>
//       <p className="text-gray-600">Position Title</p>
//       <p className="text-gray-600">Company Inc.</p>
//       <p className="text-gray-500 text-sm mb-2">2 hours ago</p> {/* Time section */}
//     </div>
//   </div>
//   <hr className="border-t border-gray-300 w-full" /> {/* Thin line */}
// </div>
// </div> */}
import React from 'react';
import { FaHandsClapping } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
const UserFeed = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div className="flex flex-col items-start mb-4 w-full max-w-lg px-4 mt-12 shadow-2xl">
        <div className="flex items-center mb-2">
          <img
            src="/temp-profile.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-bold text-lg">John Doe</p>
            <p className="text-gray-600">Position Title</p>
            <p className="text-gray-600">Company Inc.</p>
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
          <div className="flex space-x-2">
          <FaHandsClapping  className=" text-white px-4 py-2 rounded"/>
          <FaRegComments className=" text-white px-4 py-2 rounded" />


         
            
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
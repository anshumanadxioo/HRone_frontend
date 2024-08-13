import React from 'react'
import { FiSettings } from 'react-icons/fi'


function UserInfo() {
  return (
    <div className='ml-[64px] bg-customGreen text-white p-4'>
     <div className='flex justify-between'>
     <div>
     <p className='text-3xl font-bold'>Hello, Anshuman!</p>
     <p className='mt-2'>Hope you are having the great day</p>
     </div>
     <div className='bg-orange-800 text-white rounded w-[44px] h-[36px]'>
        <FiSettings className=' text-xl text-center ml-3 mt-2 cursor-pointer'/>
     </div>
     </div>
      
    </div>
  )
}

export default UserInfo

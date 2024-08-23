import React, { useEffect, useState } from 'react'

function Rejected() {
    const [isRejected, setisRejected] = useState(false);
    const rejectedRequestsArray = [
        {
          id: 1,
          type: "Attendance Regularization ",
          user:"aishyawarya",
          date: "2024-08-21",
          reason: "Late submission of request",
          rejectedBy: "Anshuman Mishra"
        },
        {
          id: 2,
          type: "Attendance Regularization ",
          user: "rakul",
          date: "2024-08-20",
          reason: "Incomplete documentation",
          rejectedBy: "Anshuman Mishra"
        },
        {
          id: 3,
          type: "Attendance Regularization ",
          user: "Anshuman",
          date: "2024-08-19",
          reason: "Unauthorized absence",
          rejectedBy: "Ritika Singh"
        },
        {
          id: 4,
          type: "Attendance Regularization ",
          user: "Anshuman",
          date: "2024-08-18",
          reason: "Request made outside allowed period",
          rejectedBy: "Vikas Sharma"
        },
        {
          id: 5,
          type: "Attendance Regularization ",
          user: "Sakshi",
          date: "2024-08-17",
          reason: "Repeated similar requests",
          rejectedBy: "Neha Sharma"
        },
        {
          id: 6,
          type: "Attendance Regularization ",
          user:"Anshuman",
          date: "2024-08-16",
          reason: "Missing supervisor approval",
          rejectedBy: "Manish Gupta"
        }
      ];
      
    const [rejectRequests, setrejectRequests] = useState(rejectedRequestsArray);
    useEffect(()=>{
        if(rejectRequests.length===0) setisRejected(true);
    },[rejectedRequestsArray.length])
  return (
    <div>
      {isRejected&&(<div className='mt-2 ml-1'>
       <p className='text-4xl text-gray-800 font-bold'> NO</p>
       <p className='text-4xl text-gray-800 font-bold'>REQUEST</p>
       <p className='text-gray-500 font-bold text-sm  mt-2'>You have no rejected requests.</p>
      </div>)}
      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
        {
            rejectRequests.map((item)=>(
            <div key={item?.id} className='mt-3' >
               <div className='bg-lightgreen flex flex-col py-1 mb-2 '>
               <p className='text-[12px] font-semibold'>{item.type} for {item.user}  </p>
               <p className='text-gray-600 text-[10px]'>{item.date}</p>
               <p className='text-green-900 text-[12px] font-bold'>REJECTED BY: {item.rejectedBy}</p>
               </div>
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default Rejected

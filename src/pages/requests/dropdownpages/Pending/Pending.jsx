import React, { useEffect, useState } from 'react'

function Pending() {
    const [pendingTask, setpendingTask] = useState(false);
    const [pendingRequests, setpendingRequests] = useState([
        {
            id: 1,
            type: "Attendance Regularization Request",
            user: "Ankur",
            dateToRegularize: "2024-08-15",
            timeInterval:"10:30-20:30",
            requestDate: "2024-08-21",
            approver: "Anshuman Mishra"
          },
          {
            id: 2,
            type: "Attendance Regularization Request",
            user: "Abhilash",
            dateToRegularize: "2024-08-14",
            timeInterval:"10:30-20:30",
            requestDate: "2024-08-21",
            approver: "Anshuman Mishra",
          },
          {
            id: 3,
            type: "Attendance Regularization Request",
            user: "Pravendra",
            dateToRegularize: "2024-08-13",
            timeInterval:"10:30-20:30",
            requestDate: "2024-08-21",
            approver: "Anshuman Mishra"
          },
          {
            id: 4,
            type: "Attendance Regularization Request",
            user: "Tanishka",
            dateToRegularize: "2024-08-12",
            timeInterval:"10:30-20:30",
            requestDate: "2024-08-21",
            approver: "Anshuman Mishra",
          },
          {
            id: 5,
            type: "Attendance Regularization Request",
            user: "Sakshi",
            dateToRegularize: "2024-08-12",
            timeInterval:"10:30-20:30",
            requestDate: "2024-08-21",
            approver: "Anshuman Mishra",
          },
    ])
    useEffect(()=>{
        if(pendingRequests.length===0) setpendingTask(true)
    },[pendingRequests])
  return (
    <div className=''>
      {pendingTask&&(<div className='mt-2 ml-1'>
       <p className='text-4xl text-gray-800 font-bold'> NO</p>
       <p className='text-4xl text-gray-800 font-bold'>REQUEST</p>
       <p className='text-gray-500 font-bold text-sm  mt-2'>You have no pending requests.</p>
      </div>)}
      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
        {
            pendingRequests.map((item)=>(
            <div key={item?.id} className='mt-3' >
               <div className='bg-lightgreen flex flex-col py-1 mb-2 '>
               <p className='text-sm font-semibold'> {item.type} for {item.user} </p>
               <p className='text-gray-600'>{item.dateToRegularize}|{item.timeInterval}</p>
               <p className='text-sm text-gray-700'>{item.requestDate}</p>
               <p className='text-green-900 text-[12px] font-bold'>WITH:{item.approver}(#ADI149)</p>
               </div>
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default Pending

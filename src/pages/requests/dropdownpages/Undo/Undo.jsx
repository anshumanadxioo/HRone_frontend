import React, { useEffect, useState } from 'react'

function Undo() {
    const [isUndo, setisUndo] = useState(false);
    const undoArray = [
        {
          id: 1,
          type: "Attendance Regularization ",
          user:"aishyawarya",
          date: "2024-08-21",
          reason: "Late submission of request",
          rejectedBy: "Anshuman Mishra"
        }
      ];
      
    const [undoRequests, setundoRequests] = useState(undoArray);
    useEffect(()=>{
        if(undoRequests.length===0) setisUndo(true);
    },[undoRequests.length])
  return (
    <div>
      {isUndo&&(<div className='mt-2 ml-1'>
       <p className='text-4xl text-gray-800 font-bold'> NO</p>
       <p className='text-4xl text-gray-800 font-bold'>REQUEST</p>
       <p className='text-gray-500 font-bold text-sm  mt-2'>You have no Undo requests.</p>
      </div>)}
      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
        {
            undoRequests.map((item)=>(
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

export default Undo

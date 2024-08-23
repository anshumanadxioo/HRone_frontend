import React, { useEffect, useState } from 'react'

function Draft() {
    const [isDraft, setisDraft] = useState(false);
    const DraftArray = [
        {
          id: 1,
          type: "Mark Attendence ",
          user:"aishyawarya",
          date: "2024-08-21"
        }
      ];
      
    const [DraftRequests, setDraftRequests] = useState(DraftArray);
    useEffect(()=>{
        if(DraftRequests.length===0) setisDraft(true);
    },[DraftRequests.length])
  return (
    <div>
      {isDraft&&(<div className='mt-2 ml-1'>
       <p className='text-4xl text-gray-800 font-bold'> NO</p>
       <p className='text-4xl text-gray-800 font-bold'>REQUEST</p>
       <p className='text-gray-500 font-bold text-sm  mt-2'>You have no Draft requests.</p>
      </div>)}
      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
        {
            DraftRequests.map((item)=>(
            <div key={item?.id} className='mt-3' >
               <div className='bg-lightgreen flex flex-col py-1 mb-2 '>
               <p className='text-[12px] font-semibold'>{item.type} for {item.user}  </p>
               <p className='text-gray-600 text-[10px]'>{item.date}</p>
               </div>
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default Draft


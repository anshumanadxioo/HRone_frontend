import React, { useEffect, useState } from 'react';

function Rejected() {
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [isRejected, setIsRejected] = useState(false);

  useEffect(() => {
    // Fetch the rejected requests from the API
    const fetchRejectedRequests = async () => {
      try {
        const response = await fetch('http://localhost:3000/rejected-requests');
        const data = await response.json();

        const combinedRequests = [
          ...data.rejectedLeaveRequests.map(request => ({
            id: request.id,
            type: "Leave Request",
            user: request.user_id,
            date: request.start_date.split('T')[0],
            reason: request.comments,
            rejectedBy: "Admin",
          })),
          ...data.rejectedRegularizationRequests.map(request => ({
            id: request.id,
            type: "Attendance Regularization",
            user: request.user_id,
            date: request.start_date.split('T')[0],
            reason: request.comments,
            rejectedBy: "Admin", 
          }))
        ];

        setRejectedRequests(combinedRequests);

        if (combinedRequests.length === 0) {
          setIsRejected(true);
        }
      } catch (error) {
        console.error("Error fetching rejected requests:", error);
      }
    };

    fetchRejectedRequests();
  }, []);

  return (
    <div>
      {isRejected && (
        <div className='mt-2 ml-1'>
          <p className='text-4xl text-gray-800 font-bold'> NO</p>
          <p className='text-4xl text-gray-800 font-bold'>REQUEST</p>
          <p className='text-gray-500 font-bold text-sm mt-2'>
            You have no rejected requests.
          </p>
        </div>
      )}
      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
        {rejectedRequests.map((item) => (
          <div key={item} className='mt-3'>
            <div className='bg-lightgreen flex flex-col py-1 mb-2 '>
              <p className='text-[12px] font-semibold'>
                {item.type} 
              </p>
              <p className='text-gray-600 text-[12px]'>{item.date}</p>
              <p className='text-green-900 text-[12px] font-bold'>
                REJECTED BY: {item.rejectedBy}
              </p>
              <p className='text-gray-600 text-[12px] '>Your Reason : {item.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rejected;

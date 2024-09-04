import React, { useEffect, useState } from 'react';

function Undo() {
  const [isUndo, setIsUndo] = useState(false);
  const [undoRequests, setUndoRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/undo-requests');
        const data = await response.json();

        // Merge the undoLeaveRequests and undoRegularizationRequests into one array
        const combinedRequests = [
          ...data.undoLeaveRequests.map(item => ({
            id: item.id,
            type: 'Leave',
            user: `User ID: ${item.user_id}`, // Adjust this to show the actual user name if available
            date: new Date(item.start_date).toLocaleDateString(),
            reason: item.comments,
            status: item.status
          })),
          ...data.undoRegularizationRequests.map(item => ({
            id: item.id,
            type: 'Attendance Regularization',
            user: `User ID: ${item.user_id}`, // Adjust this to show the actual user name if available
            date: new Date(item.start_date).toLocaleDateString(),
            reason: item.comments,
            status: item.status
          })),
        ];

        setUndoRequests(combinedRequests);
      } catch (error) {
        console.error('Error fetching undo requests:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (undoRequests.length === 0) setIsUndo(true);
  }, [undoRequests.length]);

  return (
    <div>

      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
        {undoRequests.map((item) => (
          <div key={item.id} className='mt-3'>
            <div className='bg-lightgreen flex flex-col py-1 mb-2 '>
              <p className='text-[12px] font-semibold'>
                {item.type}
              </p>
              <p className='text-gray-600 text-[12px]'>{item.date}</p>
              <p className='text-green-900 text-[12px] font-bold'>
                Status: {item.status}
              </p>
              <p className='text-gray-600 text-[12px]'>
                Reason: {item.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Undo;

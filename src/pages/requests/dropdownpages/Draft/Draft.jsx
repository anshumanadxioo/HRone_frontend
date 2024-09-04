import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Draft() {
  const [isDraft, setIsDraft] = useState(false);
  const [draftLeaveRequests, setDraftLeaveRequests] = useState([]);
  const [draftRegularizationRequests, setDraftRegularizationRequests] = useState([]);

  useEffect(() => {
    // Fetch draft requests from API
    axios.get('http://localhost:3000/draft-requests')
      .then(response => {
        const { draftLeaveRequests, draftRegularizationRequests } = response.data;

        setDraftLeaveRequests(draftLeaveRequests);
        setDraftRegularizationRequests(draftRegularizationRequests);

        if (draftLeaveRequests.length === 0 && draftRegularizationRequests.length === 0) {
          setIsDraft(true);
        }
      })
      .catch(error => {
        console.error('Error fetching draft requests:', error);
      });
  }, []);

  return (
    <div>
      {isDraft && (
        <div className='mt-2 ml-1'>
          <p className='text-4xl text-gray-800 font-bold'>NO</p>
          <p className='text-4xl text-gray-800 font-bold'>REQUEST</p>
          <p className='text-gray-500 font-bold text-sm mt-2'>You have no Draft requests.</p>
        </div>
      )}

      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
        {/* Display Draft Leave Requests */}
        {draftLeaveRequests.map(item => (
          <div key={item.id} className='mt-3'>
            <div className='bg-lightgreen flex flex-col py-1 mb-2'>
              <p className='text-[12px] font-semibold'>{item.leave_type}</p>
              <p className='text-gray-600 text-[12px]'>{new Date(item.start_date).toLocaleDateString()} - {item.comments}</p>
            </div>
          </div>
        ))}

        {/* Display Draft Regularization Requests */}
        {draftRegularizationRequests.map(item => (
          <div key={item.id} className='mt-3'>
            <div className='bg-lightgreen flex flex-col py-1 mb-2'>
              <p className='text-[12px] font-semibold'>Regularization Request </p>
              <p className='text-gray-600 text-[12px]'>
                {new Date(item.start_date).toLocaleDateString()} - {item.start_time} to {item.end_time} - {item.comments}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Draft;

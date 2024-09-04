import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Pending() {
    const [pendingLeaveRequests, setPendingLeaveRequests] = useState([]);
    const [pendingRegularizationRequests, setPendingRegularizationRequests] = useState([]);
    const [pendingTask, setPendingTask] = useState(false);

    useEffect(() => {
        // Fetch the data from API
        axios.get('http://localhost:3000/pending-requests')
            .then(response => {
                const { leaveRequests, regularizationRequests } = response.data;
                const hasPendingRequests = leaveRequests.length > 0 || regularizationRequests.length > 0;

                setPendingLeaveRequests(leaveRequests);
                setPendingRegularizationRequests(regularizationRequests);
                setPendingTask(!hasPendingRequests);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setPendingTask(true);
            });
    }, []);

    return (
        <div className=''>
            {pendingTask && (
                <div className='mt-2 ml-1'>
                    <p className='text-4xl text-gray-800 font-bold'>NO</p>
                    <p className='text-4xl text-gray-800 font-bold'>REQUEST</p>
                    <p className='text-gray-500 font-bold text-sm mt-2'>You have no pending requests.</p>
                </div>
            )}
            <div className='overflow-y-auto max-h-[80vh] custom-scrollbar'>
                {pendingLeaveRequests.map(item => (
                    <div key={item.id} className='mt-3'>
                        <div className='bg-lightgreen flex flex-col py-1 mb-2'>
                            <p className='text-sm font-semibold'>Leave Request: {item.leave_type}</p>
                            <p className='text-gray-600 text-sm'>{new Date(item.start_date).toLocaleDateString()} - {new Date(item.end_date).toLocaleDateString()}</p>
                            <p className='text-sm text-gray-700'>Created At: {new Date(item.created_at).toLocaleDateString()}</p>
                            <p className='text-green-900 text-[12px] font-bold'>Comments: {item.comments}</p>
                        </div>
                    </div>
                ))}

                {pendingRegularizationRequests.map(item => (
                    <div key={item.id} className='mt-3'>
                        <div className='bg-lightgreen flex flex-col py-1 mb-2'>
                            <p className='text-sm font-semibold'>Regularization Request</p>
                            <p className='text-gray-600 text-sm'>{new Date(item.start_date).toLocaleDateString()} | {item.start_time} - {item.end_time}</p>
                            <p className='text-sm text-gray-700'>Created At: {new Date(item.created_at).toLocaleDateString()}</p>
                            <p className='text-green-900 text-[12px] font-bold'>Comments: {item.comments}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pending;

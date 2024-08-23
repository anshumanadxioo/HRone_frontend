import React from 'react';

const MarkAttendanceNotificationData = [
    {
        id: 1,
        type: 'Leave Request',
        user: 'John Doe',
        Date: '20/08/2024',
        time: '10:30 AM',
        By: 'Jane Smith',
    },
    {
        id: 2,
        type: 'Work from Home',
        user: 'Emily Clark',
        Date: '19/08/2024',
        time: '9:00 AM',
        By: 'Michael Brown',
    },
    {
        id: 3,
        type: 'Work from Home',
        user: 'Emily Clark',
        Date: '19/08/2024',
        time: '9:00 AM',
        By: 'Michael Brown',
    },
    {
        id: 4,
        type: 'Work from office',
        user: 'Emily Clark',
        Date: '19/08/2025',
        time: '9:00 AM',
        By: 'Michael Brown',
    },
];

const MarkAttendanceNotification = () => {
    return (
        <div className='overflow-y-auto max-h-[80vh] custom-scrollbar scroll-container'>
            {MarkAttendanceNotificationData.map((item) => (
                <div key={item.id} className='mt-3 py-1 px-2'>
                    <div className='bg-lightgreen flex flex-col py-2 mb-2'>
                        <p className='text-base font-semibold'>
                            {item.type} for {item.user} (#ADI149)
                        </p>
                        <p className='text-gray-600  text-sm'>{item.Date} | {item.time}</p>
                        <p className='text-green-900 text-sm font-bold mt-2'>
                            WITH: {item.By} (#ADI149)
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MarkAttendanceNotification;

import React from 'react';

function AskAssetNotification() {
    const notifications = [
        {
            title: 'Ack asset',
            asset: 'Latitude 3420 Dell',
            dateTime: '11/07/2024 , 12:34 PM',
            status: 'OVERDUE',
            statusColor: 'text-red-600',
        },
        {
            title: 'Ack asset',
            asset: 'HP EliteBook 850',
            dateTime: '15/08/2024 , 09:00 AM',
            status: 'REVIEW',
            statusColor: 'text-yellow-600',
        },
        {
            title: 'Ack asset',
            asset: 'Cisco Router 2901',
            dateTime: '22/08/2024 , 03:45 PM',
            status: 'OK',
            statusColor: 'text-green-600',
        },
    ];

    return (
        <div className='overflow-y-auto max-h-[80vh] custom-scrollbar scroll-container'>
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className='mt-3 py-1 px-2'
                >
                    <div className='bg-lightblue flex flex-col py-2 mb-2'>
                        <p className='text-base font-semibold'>
                            {notification.title} for {notification.asset}
                        </p>
                        <p className='text-gray-600 text-sm'>{notification.dateTime}</p>
                        <p className={` text-sm font-bold mt-2 ${notification.statusColor}`}>
                            {notification.status}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AskAssetNotification;

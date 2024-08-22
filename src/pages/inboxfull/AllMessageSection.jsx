import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import { useColor } from '../../pages/colorcontext/ColorContext';

function AllMessageSection() {
    const { color } = useColor();
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

    const approvedRequest = [
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
    ];

    const [visibleItems, setVisibleItems] = useState(approvedRequest.length);

    return (
        <div>
            <div
                className="fixed top-14 pl-4 pr-4 border-gray-300 shadow-md h-full w-[25%] ml-[62px] z-30 pt-3 overflow-y-auto bg-white"
            >
                <div className="flex justify-between items-center">
                    <button
                        className="p-2 rounded flex items-center text-white"
                        style={{ backgroundColor: color }}
                    >
                        All Messages
                        <CiMenuFries className="ml-2 mr-2" />
                    </button>
                    <IoMdSearch className="cursor-pointer text-3xl text-black" />
                </div>
                <div className="mt-4 border-b border-gray-200"></div>

                {/* Notifications Section */}
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        className="relative max-w-sm mx-auto my-4 p-4 border rounded-lg bg-white shadow-md"
                    >
                        <div className="text-sm text-gray-600">{notification.title}</div>
                        <div className="font-semibold text-lg mt-1">{notification.asset}</div>
                        <div className="text-sm text-gray-500 mt-1">{notification.dateTime}</div>
                        <div className={`absolute top-2 right-2 p-2 ${notification.statusColor} text-center`}>
                            {notification.status}
                        </div>
                        <div className="mt-4 border-b border-gray-200"></div>
                    </div>
                ))}

                {/* Approved Request Section */}
                <div className="overflow-y-auto max-h-[80vh] custom-scrollbar scroll-container">
                    {approvedRequest.slice(0, visibleItems).map((item) => (
                        <div key={item.id} className="mt-3 py-1 px-2">
                            <div className="bg-lightgreen flex flex-col py-2 mb-2">
                                <p className="text-[12px] font-semibold">
                                    {item.type} for {item.user} (#ADI149)
                                </p>
                                <p className="text-gray-600 text-[10px]">
                                    {item.Date} | {item.time}
                                </p>
                                <p className="text-green-900 text-[10px] font-bold mt-2">
                                    WITH: {item.By} (#ADI149)
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllMessageSection;

import React from 'react';

const NewAnnouncementData = [
    {
        id: 1,
        title: 'Office Closure',
        date: '25/08/2024',
        description: 'The office will be closed on 25th August due to a public holiday.',
        announcedBy: 'HR Department',
    },
    {
        id: 2,
        title: 'New Policy Update',
        date: '22/08/2024',
        description: 'A new remote work policy has been updated. Please check the HR portal for details.',
        announcedBy: 'Management Team',
    },
    {
        id: 3,
        title: 'Team Outing',
        date: '28/08/2024',
        description: 'A team outing is scheduled for the last weekend of August. Please RSVP by 20th August.',
        announcedBy: 'Events Committee',
    },
];

const NewAnnouncement = () => {
    return (
        <div className='overflow-y-auto max-h-[80vh] custom-scrollbar scroll-container'>
            {NewAnnouncementData.map((item) => (
                <div key={item.id} className='mt-3 py-1 px-2'>
                    <div className='bg-lightblue flex flex-col py-2 mb-2'>
                        <p className='text-[12px] font-semibold'>
                            {item.title} - {item.date}
                        </p>
                        <p className='text-gray-600 text-[10px]'>{item.description}</p>
                        <p className='text-blue-900 text-[10px] font-bold mt-2'>
                            Announced by: {item.announcedBy}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewAnnouncement;

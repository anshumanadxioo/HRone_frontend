import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import ApprovedModalContent from './ApprovedModalContent';

function Approved() {
  const [visibleItems, setVisibleItems] = useState(10);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/approved-requests');
        const data = await response.json();

     
        const combinedRequests = [
          ...data.approvedLeaveRequests.map(req => ({
            id: req.id,
            type: 'Leave Request',
            user: req.user_id,
            time: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true
            }),
            Date: new Date(req.start_date).toLocaleDateString(),
            By: 'Unknown' 
          })),
          ...data.approvedRegularizationRequests.map(req => ({
            id: req.id,
            type: 'Regularization Request',
            user: req.user_id, 
            time: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true
            }),
            Date: new Date(req.start_date).toLocaleDateString(),
            By: 'Unknown' 
          }))
        ];

        setApprovedRequests(combinedRequests);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMoreApprovedRequests = () => {
    setVisibleItems(prev => prev + 5);
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMoreApprovedRequests();
    }
  };

  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar scroll-container'>
        {loading ? (
          <p>Loading...</p>
        ) :
        approvedRequests.slice(0, visibleItems).map((item) => (
          <React.Fragment key={item.id}>
              <button
                onClick={() => {
                  setSelectedItem(item);
                  onOpen();
                }}
                className='w-full text-start'
                >
                <div className='mt-3 py-1 px-2 cursor-pointer'>
                  <div className='bg-lightgreen flex flex-col py-2 mb-2'>
                    <p className='text-[14px] font-semibold'>{item.type}  </p>
                    <p className='text-gray-600 text-[10px] pt-2'>Date:  {item.Date} | Time: {item.time}</p>
                    <p className='text-green-900 text-[10px] font-bold mt-2'>WITH:{item.By}(#ADI149)</p>
                  </div>
                </div>
              </button>
              {selectedItem && (
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="absolute top-[15%] right-[8%]">
                  <ModalContent>
                    <ModalBody className='mt-10'>
                      <ApprovedModalContent item={selectedItem} />
                    </ModalBody>
                  </ModalContent>
                
                </Modal>
              )}
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
}

export default Approved;

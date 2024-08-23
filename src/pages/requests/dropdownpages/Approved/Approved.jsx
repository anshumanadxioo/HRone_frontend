import React, { useEffect, useState } from 'react'
// sepecific for the modals
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ApprovedModalContent from './ApprovedModalContent';
// import '../../../../App.css'
function Approved() {
    const currentTime=new Date().toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: true
        
    })
    const ApprovedRequestsData = [
        {
          id: 1,
          type: "Mark Attendence",
          user: "Ankur",
          time: currentTime,
          Date: "2024-08-21",
          By: "Anshuman Mishra"
        },
        {
          id: 2,
          type: "Mark Attendence",
          user: "Abhilash",
          time: currentTime,
          Date: "2024-08-21",
          By: "Anshuman Mishra"
        },
        {
          id: 3,
          type: "Mark Attendence",
          user: "Pravendra",
          time: currentTime,
          Date: "2024-08-21",
          By: "Anshuman Mishra"
        },
        {
          id: 4,
          type: "Mark Attendence",
          user: "Tanishka",
          time: currentTime,
          Date: "2024-08-21",
          By: "Anshuman Mishra"
        },
        {
          id: 5,
          type: "Mark Attendence",
          user: "Sakshi",
          time: currentTime,
          Date: "2024-08-21",
          By: "Anshuman Mishra"
        },
        {
          id: 6,
          type: "Mark Attendence",
          user: "Aman",
          time: currentTime,
          Date: "2024-08-20",
          By: "Ritika Singh"
        },
        {
          id: 7,
          type: "Mark Attendence",
          user: "Priya",
          time: currentTime,
          Date: "2024-08-20",
          By: "Ritika Singh"
        },
        {
          id: 8,
          type: "Mark Attendence",
          user: "Rahul",
          time: currentTime,
          Date: "2024-08-19",
          By: "Vikas Sharma"
        },
        {
          id: 9,
          type: "Mark Attendence",
          user: "Neha",
          time: currentTime,
          Date: "2024-08-19",
          By: "Vikas Sharma"
        },
        {
          id: 10,
          type: "Mark Attendence",
          user: "Rohit",
          time: currentTime,
          Date: "2024-08-18",
          By: "Ravi Kumar"
        },
        {
          id: 11,
          type: "Mark Attendence",
          user: "Sneha",
          time: currentTime,
          Date: "2024-08-18",
          By: "Ravi Kumar"
        },
        {
          id: 12,
          type: "Mark Attendence",
          user: "Vivek",
          time: currentTime,
          Date: "2024-08-17",
          By: "Neha Sharma"
        },
        {
          id: 13,
          type: "Mark Attendence",
          user: "Ananya",
          time: currentTime,
          Date: "2024-08-17",
          By: "Neha Sharma"
        },
        {
          id: 14,
          type: "Mark Attendence",
          user: "Raj",
          time: currentTime,
          Date: "2024-08-16",
          By: "Manish Gupta"
        },
        {
          id: 15,
          type: "Mark Attendence",
          user: "Arjun",
          time: currentTime,
          Date: "2024-08-16",
          By: "Manish Gupta"
        },
        {
          id: 16,
          type: "Mark Attendence",
          user: "Riya",
          time: currentTime,
          Date: "2024-08-15",
          By: "Sakshi Verma"
        },
        {
          id: 17,
          type: "Mark Attendence",
          user: "Karan",
          time: currentTime,
          Date: "2024-08-15",
          By: "Sakshi Verma"
        },
        {
          id: 18,
          type: "Mark Attendence",
          user: "Alok",
          time: currentTime,
          Date: "2024-08-14",
          By: "Anuradha Singh"
        },
        {
          id: 19,
          type: "Mark Attendence",
          user: "Swati",
          time: currentTime,
          Date: "2024-08-14",
          By: "Anuradha Singh"
        },
        {
          id: 20,
          type: "Mark Attendence",
          user: "Vikas",
          time: currentTime,
          Date: "2024-08-13",
          By: "Rohan Mehta"
        },
        {
          id: 21,
          type: "Mark Attendence",
          user: "Nidhi",
          time: currentTime,
          Date: "2024-08-13",
          By: "Rohan Mehta"
        },
        {
          id: 22,
          type: "Mark Attendence",
          user: "Harshit",
          time: currentTime,
          Date: "2024-08-12",
          By: "Priya Patel"
        },
        {
          id: 23,
          type: "Mark Attendence",
          user: "Ritika",
          time: currentTime,
          Date: "2024-08-12",
          By: "Priya Patel"
        },
        {
          id: 24,
          type: "Mark Attendence",
          user: "Gaurav",
          time: currentTime,
          Date: "2024-08-11",
          By: "Aditya Sharma"
        },
        {
          id: 25,
          type: "Mark Attendence",
          user: "Simran",
          time: currentTime,
          Date: "2024-08-11",
          By: "Aditya Sharma"
        },
        {
          id: 26,
          type: "Mark Attendence",
          user: "Pooja",
          time: currentTime,
          Date: "2024-08-10",
          By: "Nitin Malhotra"
        },
        {
          id: 27,
          type: "Mark Attendence",
          user: "Deepak",
          time: currentTime,
          Date: "2024-08-10",
          By: "Nitin Malhotra"
        },
        {
          id: 28,
          type: "Mark Attendence",
          user: "Aditi",
          time: currentTime,
          Date: "2024-08-09",
          By: "Varun Khanna"
        },
        {
          id: 29,
          type: "Mark Attendence",
          user: "Kunal",
          time: currentTime,
          Date: "2024-08-09",
          By: "Varun Khanna"
        },
        {
          id: 30,
          type: "Mark Attendence",
          user: "Mansi",
          time: currentTime,
          Date: "2024-08-08",
          By: "Ravi Kumar"
        },
        {
          id: 31,
          type: "Mark Attendence",
          user: "Arun",
          time: currentTime,
          Date: "2024-08-08",
          By: "Ravi Kumar"
        },
        {
          id: 32,
          type: "Mark Attendence",
          user: "Naveen",
          time: currentTime,
          Date: "2024-08-07",
          By: "Ritika Singh"
        },
        {
          id: 33,
          type: "Mark Attendence",
          user: "Isha",
          time: currentTime,
          Date: "2024-08-07",
          By: "Ritika Singh"
        },
        {
          id: 34,
          type: "Mark Attendence",
          user: "Sahil",
          time: currentTime,
          Date: "2024-08-06",
          By: "Vikas Sharma"
        },
        {
          id: 35,
          type: "Mark Attendence",
          user: "Shivani",
          time: currentTime,
          Date: "2024-08-06",
          By: "Vikas Sharma"
        },
        {
          id: 36,
          type: "Mark Attendence",
          user: "Varun",
          time: currentTime,
          Date: "2024-08-05",
          By: "Neha Sharma"
        },
        {
          id: 37,
          type: "Mark Attendence",
          user: "Megha",
          time: currentTime,
          Date: "2024-08-05",
          By: "Neha Sharma"
        },
        {
          id: 38,
          type: "Mark Attendence",
          user: "Sourabh",
          time: currentTime,
          Date: "2024-08-04",
          By: "Manish Gupta"
        },
        {
          id: 39,
          type: "Mark Attendence",
          user: "Tanvi",
          time: currentTime,
          Date: "2024-08-04",
          By: "Manish Gupta"
        },
        {
          id: 40,
          type: "Mark Attendence",
          user: "Rakesh",
          time: currentTime,
          Date: "2024-08-03",
          By: "Sakshi Verma"
        },
        {
          id: 41,
          type: "Mark Attendence",
          user: "Manoj",
          time: currentTime,
          Date: "2024-08-03",
          By: "Sakshi Verma"
        },
        {
          id: 42,
          type: "Mark Attendence",
          user: "Shubham",
          time: currentTime,
          Date: "2024-08-02",
          By: "Anuradha Singh"
        },
        {
          id: 43,
          type: "Mark Attendence",
          user: "Ayushi",
          time: currentTime,
          Date: "2024-08-02",
          By: "Anuradha Singh"
        },
        {
          id: 44,
          type: "Mark Attendence",
          user: "Gopal",
          time: currentTime,
          Date: "2024-08-01",
          By: "Rohan Mehta"
        },
        {
          id: 45,
          type: "Mark Attendence",
          user: "Shalini",
          time: currentTime,
          Date: "2024-08-01",
          By: "Rohan Mehta"
        },
        {
          id: 46,
          type: "Mark Attendence",
          user: "Nikhil",
          time: currentTime,
          Date: "2024-07-31",
          By: "Priya Patel"
        },
        {
          id: 47,
          type: "Mark Attendence",
          user: "Divya",
          time: currentTime,
          Date: "2024-07-31",
          By: "Priya Patel"
        },
        {
          id: 48,
          type: "Mark Attendence",
          user: "Sameer",
          time: currentTime,
          Date: "2024-07-30",
          By: "Aditya Sharma"
        },
        {
          id: 49,
          type: "Mark Attendence",
          user: "Ekta",
          time: currentTime,
          Date: "2024-07-30",
          By: "Aditya Sharma"
        },
        {
          id: 50,
          type: "Mark Attendence",
          user: "Kabir",
          time: currentTime,
          Date: "2024-07-29",
          By: "Nitin Malhotra"
        }
      ];
      const [visibleItems, setvisibleItems] = useState(10);
      const [approvedRequest, setapprovedRequest] = useState(ApprovedRequestsData);
      const loadMoreApprovedRequests=()=>{
        setvisibleItems(prev=>prev+5);
      }
      const handleScroll=(e)=>{
        const {scrollTop,scrollHeight,clientHeight}=e.target;
        if(scrollTop+clientHeight>=scrollHeight-5){
            loadMoreApprovedRequests();
        }
      }
      useEffect(()=>{
       const container=document.querySelector('.scroll-container');
       container.addEventListener('scroll',handleScroll);

       return ()=>{
        container.removeEventListener('scroll',handleScroll);
       }
      },[])
// Implementation of the modal
         const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <div>
      <div className='overflow-y-auto max-h-[80vh] custom-scrollbar scroll-container'>
        {
            approvedRequest.slice(0,visibleItems).map((item)=>(
            <>
            <button onClick={onOpen} className='w-full text-start'>
            <div key={item?.id} className='mt-3 py-1 px-2 cursor-pointer' >
               <div className='bg-lightgreen flex flex-col py-2 mb-2 '>
               <p className='text-[12px] font-semibold '> {item.type} for {item.user}(#ADI149) </p>
               <p className='text-gray-600 text-[10px]'>{item.Date}  |  {item.time}</p>
               <p className='text-green-900 text-[10px] font-bold mt-2'>WITH:{item.By}(#ADI149)</p>
               </div>
            </div>
            </button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="absolute top-[15%] right-[8%] " 
            >
          <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='mt-10'>
                <ApprovedModalContent item={item}/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
            </>
            ))
        }
      </div>
    </div>
  )
}

export default Approved

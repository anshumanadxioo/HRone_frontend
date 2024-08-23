import React from 'react';
import '../../../../home/highlights/scrollbar.css'
function ApprovedModalContent({ item }) {
    const stepper_data = [
        {   
            "role": "Request Raiser",
            "img": '/req-raiser.jpg',
            "name": "Parvendra",
            "date": "12/04/2024",
            "status": "Completed"
        },
        {
            "role": "Functional Manager",
            "img": '/functional-manager.jpg',
            "name": 'Faizanuddin Khan',
            "status": "Pending..."
        },
        {
            "role": "Manager",
            "img": '/manager.jpg',
            "name": 'Rahul Maharajan',
            "status": "Pending..."
        },
        {
            "role": "CEO",
            "img": '/CEO.jpg',
            "name": 'Aditya Singh',
            "status": "Pending..."
        }
    ]
  return (
    <div>
      <div className="p-4 max-h-[70vh] bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-y-auto custom-scrollbar">
        <div className="flex w-full items-center mb-3">
          <div className="flex-grow h-[2px] bg-gray-900"></div>
          <div className="w-auto px-4 py-2 mx-2 bg-gray-200 bg-opacity-70 rounded-md font-semibold text-center shadow-md">
            <p>Pending</p>
          </div>
          <div className="flex-grow h-[2px] bg-gray-900 "></div>
        </div>
        <p className="font-semibold text-lg text-gray-900 mb-4">Your Request Workflow:-</p>
        <div className="flex flex-col space-y-4">
          {
            stepper_data.map((step,index)=>(
                <div key={index} className='flex items-center'>
                 <div className='relative mb-2'>
                                <img src={step.img} alt={step.role} width='40px' height='40px' className='rounded-full' />
                            </div>
                  <div className='flex flex-col ml-4 py-4 border-[2px] px-4 w-[80%] rounded '>
                  <div className="font-semibold"> {step.name}</div>
                  {step.date && <p className="text-sm text-gray-600">Date: {step.date}</p>}
                  <div>{step.role==='Request Raiser'&&(<p>Regularization Request for {step.name}</p>)}</div>
                  <p className={`text-sm font-medium ${step.status === 'Pending...' ? 'text-yellow-600' : 'text-green-600'}`}>
                                    Status: {step.status}
                                </p>
                 </div>
                 {index<stepper_data.length-1&&(
                     <div className="absolute ml-4 w-[2px] h-[60px] bg-gray-500 mt-[95px] mb-1 "></div>
                 )}
                </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default ApprovedModalContent;


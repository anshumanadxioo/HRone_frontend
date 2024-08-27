import React from 'react';
import Calendar from 'react-calendar';
import "./MyCalender.css";
import CalenderHeader from './CalenderHeader';

const MyCalender = () => {
  return (
    <div className=' w-4/5 mt-14 p-4'>
      <CalenderHeader />

      <div className='mt-5  border-gray-300 w-full h-auto bg-gray-100 rounded-lg'>
        <div className="indicator-box">
          <Calendar />
          <div className="mt-4 flex flex-wrap gap-6 ml-2">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <p className="text-sm">Today</p>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <p className="text-sm">Present</p>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
              <p className="text-sm">Leave</p>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              <p className="text-sm">Absent</p>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
              <p className="text-sm">Week off</p>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
              <p className="text-sm">Holiday</p>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
              <p className="text-sm">Home</p>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
              <p className="text-sm">Office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCalender;

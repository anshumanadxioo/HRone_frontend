import React, { useState, useEffect } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { FcLeave } from "react-icons/fc";
import Calendar from 'react-calendar';
import "./calendar.css";
import { NavLink } from 'react-router-dom';

const Inbox = () => {
  const [date, setDate] = useState(new Date());
  const [leaveBalance, setLeaveBalance] = useState(null);



  useEffect(() => {
    // Fetch leave balance data from the API
    const fetchLeaveBalance = async () => {
      try {
        const response = await fetch('https://tzqnlpfh-3000.inc1.devtunnels.ms/leave-balance?user_id=4');
        const data = await response.json();
        setLeaveBalance(data.leaveBalance); // Accessing the leaveBalance from the API response
      } catch (error) {
        console.error("Failed to fetch leave balance:", error);
      }
    };

    fetchLeaveBalance();
  }, []);

  return (
    <>
      <div className="w-full max-w-96 mx-0 pl-6 h-full overflow-y-auto mt-10">
        <div className="">
          {/* Inbox */}
          <p className="text-xl font-semibold mb-2">Inbox</p>
          <div className="bg-white shadow-xl rounded-lg h-30 mb-6">
            <div className="flex items-center w-full">
              <IoIosNotifications className="text-5xl ml-2" />
              <div className="ml-2">
                <h2 className="text-xl">5</h2>
                <p className="text-lg">Pending Tasks</p>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="w-full p-6 bg-white shadow-2xl rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Calendar</h2>
              <NavLink to="calender"
              >
                <p className="font-semibold cursor-pointer text-sky-800">Go to calendar</p>
              </NavLink>
            </div>

            <Calendar
              className="react-calendar border rounded-lg shadow-sm"
            />
            <div className="mt-4 flex space-x-6">
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
            </div>
            <div className="flex justify-center mt-2">
              <span className="w-3 h-3 rounded-full bg-gray-500 mr-2 mt-1"></span>
              <p className="text-sm">Holiday</p>
            </div>
          </div>


          {/* Leave Balance */}
          <div className="bg-white shadow-lg border rounded-lg mt-4 pl-2 mb-6">
            <h1 className="text-xl ml-2">Leave Balance</h1>
            <div className="flex items-center w-full mt-2">
              <FcLeave className="text-6xl" />
              <div className="ml-4">
                <h2 className="text-base font-semibold">Your leave balance is</h2>
                <h2 className="text-xl font-bold">
                  {leaveBalance !== null ? leaveBalance : 'Loading...'}
                </h2>
              </div>
            </div>
          </div>

          {/* Yesterday's Attendance */}
          <div className="bg-white shadow-lg rounded-lg h-auto pl-4 pt-[2px] pb-3 ">
            <h1 className="text-xl pt-2">Yesterday's Attendance</h1>
            <div className="mt-4">
              <div className="flex w-80">
                <div className="text-center">
                  <p className="text">10:30 PM</p>
                  <p className="text-sm text-gray-500">Working Hours</p>
                </div>
                <div className="ml-auto flex flex-col items-center text-center">
                  <p className="text-sm">10:20 AM</p>
                  <p className="text-sm text-gray-500">Check-in Time</p>
                </div>
                <div className="ml-auto flex flex-col items-center text-center">
                  <p className="text-sm">09:00 PM</p>
                  <p className="text-sm text-gray-500">Checkout Time</p>
                </div>
              </div>
            </div>
          </div>

          <div className='h-[420px]'>

          </div>
        </div>
      </div>
    </>
  );
}

export default Inbox;

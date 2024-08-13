import React, { useState } from 'react';

import { IoIosNotifications } from "react-icons/io";
import { FcLeave } from "react-icons/fc";
import Calendar from 'react-calendar';
import "./calendar.css"


const Inbox = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };


    return (


        <div className="w-full max-w-md mx-auto p-4">

            {/* inbox  */}

            <div className="p-6 bg-white shadow-xl rounded-lg mt-44 h-30">
                <h1 className="text-xl">Inbox</h1>
                <div className="flex items-center w-full mt-2">
                    <IoIosNotifications className="text-6xl mr-4" />

                    <div className="">
                        <h2 className="text-2xl">5</h2>
                        <p className="text-lg mt-1">Pending Tasks</p>
                    </div>
                </div>
            </div>




            {/* calender */}
            <div className="mt-6 w-full p-6 bg-white shadow-2xl rounded-lg ">
                <h2 className="text-xl font-semibold mb-4">Calendar</h2>
                <div>
                <Calendar
            className="react-calendar border rounded-lg shadow-sm"
            onChange={onChange}
            value={date}
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
                        <div className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
                            <p className="text-sm">Holiday</p>
                        </div>
                    </div>
                </div>




            </div>



            {/* leave balance */}
            <h1 className="text-xl mt-8 ">Leave balance</h1>
            <div className="flex items-center w-full mt-2  ">
                <FcLeave  className="text-6xl " />
                <div className="">

                    <h2 className="text-base">Your leave balance is </h2>
                    <h2 className="">{10}</h2>
                </div>
            </div>






            {/* yesterday balanace */}
                <h1 className="text-xl mt-8">Yesterday's Attendance</h1>
            <div className=" bg-white shadow- rounded-lg">
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











        </div>
    );
}

export default Inbox;

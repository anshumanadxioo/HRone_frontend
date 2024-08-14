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
        <>
           


        <div className="w-full max-w-96 mx-0 ">
        <p className="text-xl font-semibold  mt-[175px] mb-2 ">Inbox</p>



            {/* inbox  */}

            <div className=" bg-white shadow-xl rounded-lg  h-30">
                <div className="flex items-center w-full">
                    <IoIosNotifications className="text-5xl ml-2" />

                    <div className=" ml-2">
                        <h2 className="text-xl">5</h2>
                        <p className="text-lg">Pending Tasks</p>
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
                        {/* <div className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
                            <p className="text-sm">Holiday</p>
                        </div> */}
                    </div>
                </div>
            </div>






            {/* leave balance */}
            <div className="bg-white shadow-lg border rounded-lg mt-4 pl-2">
                <h1 className="text-xl ml-2 ">Leave balance</h1>
                <div className="flex items-center w-full mt-2">
                    <FcLeave className="text-6xl" />
                    <div className="ml-4">
                        <h2 className="text-base font-semibold">Your leave balance is</h2>
                        <h2 className="text-xl font-bold">{10}</h2>
                    </div>
                </div>
            </div>







            {/* yesterday balanace */}
            <div className=" bg-white shadow- rounded-lg">
            <h1 className="text-xl mt-8 pl-2 ml-2">Yesterday's Attendance</h1>

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
        </>
    );
}

export default Inbox;

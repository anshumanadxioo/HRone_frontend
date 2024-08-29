import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  subMonths,
  addMonths,
  getDay,
  differenceInMinutes
} from 'date-fns';
import "./MyCalender.css";
import CalenderHeader from './CalenderHeader';
import { useColor } from '../colorcontext/ColorContext';

const calendarData = {
  "punchTimes": {
    "2024-08-01": { "punchIn": "9:00 AM", "punchOut": "5:00 PM" },
    "2024-08-02": { "punchIn": "8:30 AM", "punchOut": "4:30 PM" },
    "2024-08-05": { "punchIn": "9:15 AM", "punchOut": "5:15 PM" },
    "2024-08-06": { "punchIn": "8:45 AM", "punchOut": "5:00 PM" },
    "2024-08-07": { "punchIn": "9:00 AM", "punchOut": "5:30 PM" },
    "2024-08-08": { "punchIn": "9:30 AM", "punchOut": "5:00 PM" },
    "2024-08-09": { "punchIn": "8:00 AM", "punchOut": "4:00 PM" },
    "2024-08-12": { "punchIn": "9:00 AM", "punchOut": "5:00 PM" },
    "2024-08-13": { "punchIn": "9:00 AM", "punchOut": "5:00 PM" },
    "2024-08-14": { "punchIn": "8:30 AM", "punchOut": "4:30 PM" },
    "2024-08-15": { "punchIn": "9:15 AM", "punchOut": "5:15 PM" },
    "2024-08-16": { "punchIn": "8:45 AM", "punchOut": "5:00 PM" },
    "2024-08-19": { "punchIn": "9:00 AM", "punchOut": "5:00 PM" },
    "2024-08-20": { "punchIn": "9:30 AM", "punchOut": "5:00 PM" },
    "2024-08-21": { "punchIn": "8:00 AM", "punchOut": "4:00 PM" },
    "2024-08-22": {},
    "2024-08-23": {},
    "2024-08-26": {},
    "2024-08-27": { "punchIn": "9:00 AM", "punchOut": "5:00 PM" },
    "2024-08-28": { "punchIn": "8:45 AM", "punchOut": "5:00 PM" },
    "2024-08-29": { "punchIn": "9:00 AM", "punchOut": "5:00 PM" },
    "2024-08-30": { "punchIn": "9:00 AM", "punchOut": "5:00 PM" }
  },
  "weekendStatus": {
    "WO": { "bgColor": "bg-gray-400", "textColor": "text-white" },
    "P": { "bgColor": "bg-green-500", "textColor": "text-white" },
    "A": { "bgColor": "bg-red-500", "textColor": "text-white" },
    "Holiday": { "bgColor": "bg-amber-300", "textColor": "text-white" }
  }
};

const parseTime = (timeString) => {
  const [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier === 'PM' && hours < 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;
  return new Date(2000, 0, 1, hours, minutes);
};

const calculateWorkingHours = (punchIn, punchOut) => {
  const punchInDate = parseTime(punchIn);
  const punchOutDate = parseTime(punchOut);
  const diffInMinutes = differenceInMinutes(punchOutDate, punchInDate);
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;
  return `${hours}h ${minutes}m`;
};

const MyCalender = () => {
  const { color } = useColor();
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <div key={index} className="text-center font-semibold p-2 border-b-2 border-gray-200">
        {day}
      </div>
    ));
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'd');
        const formattedDateISO = format(day, 'yyyy-MM-dd');
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isWeekend = getDay(day) === 0 || getDay(day) === 6;

        const punchInTime = calendarData.punchTimes[formattedDateISO]?.punchIn || "";
        const punchOutTime = calendarData.punchTimes[formattedDateISO]?.punchOut || "";
        const punchTimeRange = punchInTime && punchOutTime ? `${punchInTime} - ${punchOutTime}` : "";
        const workingHours = punchInTime && punchOutTime ? calculateWorkingHours(punchInTime, punchOutTime) : "";

        const hasPunchTime = punchInTime && punchOutTime;
        const presenceStatus = hasPunchTime ? 'P' : 'A';
        const presenceColor = hasPunchTime ? calendarData.weekendStatus.P.bgColor : calendarData.weekendStatus.A.bgColor;
        const weekendStatus = isWeekend ? 'WO' : presenceStatus;
        const weekendColor = isWeekend ? calendarData.weekendStatus.WO.bgColor : presenceColor;

        const isHoliday = formattedDateISO === '2024-08-15' || formattedDateISO === '2024-08-19';
        const holidayColor = isHoliday ? calendarData.weekendStatus.Holiday.bgColor : weekendColor;

        days.push(
          <div
            className={`relative flex flex-col items-center justify-between p-6 text-center cursor-pointer border border-gray-300 ${isCurrentMonth ? (isHoliday ? holidayColor : (isWeekend ? weekendColor : 'bg-white')) : (isHoliday ? holidayColor : (isWeekend ? weekendColor : 'bg-gray-200 text-gray-400'))}`}
            key={day}
          >
            <span>{formattedDate}</span>
            {isCurrentMonth && (
              <>
                {!isHoliday && (
                  <>
                    <div className={`absolute bottom-1 right-1 w-6 h-6 flex items-center justify-center rounded-full text-white ${weekendColor}`}>
                      {weekendStatus}
                    </div>
                    {punchTimeRange && !isWeekend && (
                      <div className="text-xs text-gray-600 mt-2">
                        {punchTimeRange}
                        <div className="text-xs text-gray-600">
                          Total Hours: {workingHours}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7" key={day}>{days}</div>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className='w-4/5 mt-14 mx-auto'>
      <CalenderHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        subMonths={() => setCurrentDate(subMonths(currentDate, 1))}
        addMonths={() => setCurrentDate(addMonths(currentDate, 1))}
        format={format}
      />
      <div className='mt-7 border-2 border-gray-300 overflow-hidden  ml-4 mr-4'>
        <div className='days-header grid grid-cols-7'>{renderDaysOfWeek()}</div>
        <div className="calendar-body h-96 overflow-y-auto">{renderCells()}</div>
      </div>

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
          <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
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
          <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
          <p className="text-sm">Holiday</p>
        </div>


      </div>
    </div>
  );
};

export default MyCalender;

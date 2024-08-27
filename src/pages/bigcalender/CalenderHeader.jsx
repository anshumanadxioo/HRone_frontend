import React, { useState, useEffect, useRef } from 'react';
import { useColor } from '../colorcontext/ColorContext';

const data = {
  leftSection: {
    title: "Pravendra Rajput (#ADI146)",
    attendanceFor: "Attendance for",
    monthYear: "Aug, 2024",
    attendance: "Attendance",
    company: "ADIXOO BRAND PVT LTD",
    role: "Intern"
  },
  middleSection: {
    workingHours: "Working Hours",
    expectedHours: {
      label: "Expected",
      value: "237 hh 30 mm"
    },
    actualHours: {
      label: "Actual",
      value: "167 hh 48 mm"
    },
    deductedHours: {
      label: "Deducted Hours",
      value: "00 hh 00 mm"
    }
  },
  attendanceDropdown: [
    {
      id: "attendance",
      label: "Attendance"
    },
    {
      id: "check-in",
      label: "Check In"
    }
  ],
  rightDropdown: [
    {
      label: "Leave"
    },
    {
      label: "On Duty"
    }
  ]
};

const CalenderHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMiddleDropdownOpen, setIsMiddleDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const middleDropdownRef = useRef(null);

  const { color } = useColor();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (middleDropdownRef.current && !middleDropdownRef.current.contains(event.target)) {
        setIsMiddleDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMiddleDropdown = () => {
    setIsMiddleDropdownOpen(!isMiddleDropdownOpen);
  };

  const { leftSection, middleSection, attendanceDropdown, rightDropdown } = data;

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md w-full h-32 rounded-lg">
      {/* Left Section */}
      <div className="flex flex-col items-start">
        <p className="font-bold text-lg">{leftSection.title}</p>
        <p className="text-sm">{leftSection.attendanceFor}</p>
        <p className="font-semibold text-sm">{leftSection.monthYear}</p>
        <p className="text-sm">{leftSection.attendance}</p>
        <p className="text-sm">{leftSection.company}</p>
        <p className="text-sm">{leftSection.role}</p>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center space-y-2">
        {/* Attendance Dropdown */}
        <div className="relative" ref={middleDropdownRef}>
          <button
            onClick={toggleMiddleDropdown}
            className="bg-blue-500 text-white py-1 px-4 rounded-lg shadow-md focus:outline-none"
            style={{ backgroundColor: color }}
          >
            Attendance
          </button>
          {isMiddleDropdownOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul className="list-none p-2">
                {attendanceDropdown.map((item) => (
                  <li key={item.id} className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                    <input
                      type="checkbox"
                      id={item.id}
                      className="mr-2"
                    />
                    <label htmlFor={item.id} className="text-xs">{item.label}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-row space-x-2">
          {/* Working Hours Box */}
          <div className="flex flex-col items-center justify-center p-2 bg-white border border-gray-300 rounded-lg shadow-md">
            <p className="font-bold text-xs">{middleSection.workingHours}</p>
          </div>

          {/* Expected Hours Box */}
          <div className="flex flex-col items-center justify-center p-2 bg-white border border-gray-300 rounded-lg shadow-md">
            <p className="text-xs">{middleSection.expectedHours.label}</p>
            <p className="font-semibold text-xs">{middleSection.expectedHours.value}</p>
          </div>

          {/* Actual Hours Box */}
          <div className="flex flex-col items-center justify-center p-2 bg-white border border-gray-300 rounded-lg shadow-md">
            <p className="text-xs">{middleSection.actualHours.label}</p>
            <p className="font-semibold text-xs">{middleSection.actualHours.value}</p>
          </div>

          {/* Deducted Hours Box */}
          <div className="flex flex-col items-center justify-center p-2 bg-white border border-gray-300 rounded-lg shadow-md">
            <p className="text-xs">{middleSection.deductedHours.label}</p>
            <p className="font-semibold text-xs">{middleSection.deductedHours.value}</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none"
          style={{ backgroundColor: color }}
        >
          Attendance Regularization
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="list-none p-2">
              {rightDropdown.map((item, index) => (
                <li key={index} className="hover:bg-gray-100 p-2 cursor-pointer">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalenderHeader;

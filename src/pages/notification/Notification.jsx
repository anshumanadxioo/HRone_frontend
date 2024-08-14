import React from 'react';

const Notification = ({ isOpen, toggleSlider }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleSlider}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <div className="mb-4 p-2 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Notification Title</p>
            <p className="text-gray-600">This is a sample notification message.</p>
          </div>
          <div className="mb-4 p-2 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">Another Notification</p>
            <p className="text-gray-600">Here's another example of a notification message.</p>
          </div>
          {/* Add more notifications as needed */}
        </div>
      </div>
    </div>
  );
};

export default Notification;

import React, { useState } from 'react';

const SingleStepper = ({ isLastStep }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-col items-center z-10">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 bg-blue-500 text-white`}
        >
          AM
        </div>
        {!isLastStep && (
          <div
            className="w-px bg-black z-0"
            style={{
              height: '50px',
              opacity: 1,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

const Notification = ({ isOpen, toggleSlider }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Regularization update', message: 'You have 5 regularization left' },
    { id: 2, title: 'Leave update', message: 'You have 10 leaves left' },
    { id: 3, title: 'Pending task update', message: 'You have pending tasks' },
    { id: 4, title: 'Update profile', message: 'You can update your profile picture ' },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-green-50 bg-opacity-50 z-40"
          onClick={toggleSlider}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="relative mb-4">
              <h2 className="text-xl font-semibold text-black">NOTIFICATIONS</h2>
              <hr className="border-b-2 border-black border-r-2 my-2 w-12" />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={toggleSlider}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
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
            <button
              className="absolute top-0 right-16 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={clearNotifications}
            >
              Clear All
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-center text-gray-600">No notifications at the moment.</p>
            ) : (
              notifications.map((notification, index) => (
                <div key={notification.id} className="flex items-start mb-4">
                  <div className="mr-4 flex flex-col items-center">
                    <SingleStepper
                      isLastStep={index === notifications.length - 1}
                    />
                  </div>
                  <div className="flex-grow p-4 bg-gray-100 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      <p className="text-sm font-semibold text-black">{notification.title}</p>
                    </div>
                    <p className="text-gray-600">{notification.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;

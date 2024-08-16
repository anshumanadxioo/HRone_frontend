import React, { useState } from 'react';

const PinPage = ({ isOpenPin, toggleSliderPin }) => {
  const [activeTab, setActiveTab] = useState('allPins'); // State to manage the active tab

  return (
    <>
      {isOpenPin && (
        <div
          className="fixed inset-0 bg-green-50 bg-opacity-50 z-40"
          onClick={toggleSliderPin}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-white shadow-lg z-50 transform ${isOpenPin ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full ">
          <div className="relative mb-4 p-4">
            <h2 className="text-xl font-semibold text-black ">PINNED ITEMS</h2>
            <hr className="border-b-2 border-black border-r-2 my-2 w-12" />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={toggleSliderPin}
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
          </div>

          {/* Tab */}
     {/* Tab Buttons */}
<div className='bg-gray-200 w-full'>
  <div className="flex justify-start  w-full">
    <button
      className={`flex-shrink-0 ml-8  text-center relative ${activeTab === 'allPins' ? 'text-green-950 border-b-2 border-green-950 bg-transparent ' : ' text-gray-700 border-b-2 border-gray-300 bg-gray-200'} `}
      onClick={() => setActiveTab('allPins')}
    >
      All Pins (0)
    </button>
    <button
      className={`flex-shrink-0 py-4  ml-8  text-center relative ${activeTab === 'request' ? 'text-green-950 border-b-2 border-green-950 bg-transparent' : 'text-gray-700 border-b-2 border-gray-300 bg-gray-200'} `}
      onClick={() => setActiveTab('request')}
    >
      Request (0)
    </button>
  </div>
</div>









          {/* Content Area */}
          <div className="flex-grow overflow-y-auto p-4">
            {activeTab === 'allPins' ? (
              <div className="text-gray-600">
                <p>All Pins section content goes here.</p>
                {/* Add more content as needed */}
              </div>
            ) : (
              <div className="text-gray-600">
                <p>Request section content goes here.</p>
                {/* Add more content as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PinPage;

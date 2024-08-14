import React, { useState } from 'react';

const SettingPage = ({ isOpenSetting, toggleSliderSetting }) => {
  const [activeTab, setActiveTab] = useState('organization');

  return (
    <>
      {isOpenSetting && (
        <div
          className="fixed inset-0 bg-green-50 bg-opacity-50 z-40"
          onClick={toggleSliderSetting}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-white shadow-lg z-50 transform ${isOpenSetting ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col h-full p-4 ">
          <div className="relative mb-4">
            <h2 className="text-xl font-semibold text-black">SETTINGS</h2>
            <hr className="border-b-2 border-black border-r-2 my-2 w-12" />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={toggleSliderSetting}
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

          <div className='mt-10 pl-5 pr-5'>
            <div className="mb-6 flex border-b border-gray-300">
              <button
                className={`flex-1 py-2 text-center ${
                  activeTab === 'organization'
                    ? 'bg-[#052e16] text-white font-semibold'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } border rounded-l-xl transition-colors duration-300 ease-in-out`}
                onClick={() => setActiveTab('organization')}
              >
                Organization Widgets
              </button>
              <button
                className={`flex-1 py-2 text-center ${
                  activeTab === 'personal'
                    ? 'bg-[#052e16] text-white font-semibold'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } border rounded-r-xl transition-colors duration-300 ease-in-out`}
                onClick={() => setActiveTab('personal')}
              >
                Personal Widgets
              </button>
            </div>
          </div>


          <div className="flex-grow overflow-y-auto">
            {activeTab === 'organization' && (
              <div>
                <p className="text-gray-600">Here you can configure organization-specific widgets.</p>
              </div>
            )}
            {activeTab === 'personal' && (
              <div>
                <p className="text-gray-600">Here you can configure personal widgets.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;

import React, { useState } from 'react';
import { useColor } from "../../pages/colorcontext/ColorContext";


const cards = [
  {
    id: 1,
    employeeId: 'ADI001',
    name: 'Rampal Verma',
    designation: 'Manager and software consultant ',
    subEmployees: [
      { id: 2, employeeId: 'ADI002', name: 'Abhilash', designation: 'senior developer' },
      { id: 3, employeeId: 'ADI003', name: 'Sakshi rajput', designation: 'junior Designer' },
      { id: 3, employeeId: 'ADI004', name: 'Anshuman', designation: 'Sde 2' },
    ]
  },
  
];

const OrganizationChart = ({ isOpenChart, toggleSliderChart }) => {
  const { color } = useColor();
  const [isExpanded, setIsExpanded] = useState(cards.reduce((acc, card) => ({ ...acc, [card.id]: false }), {}));

  const toggleExpand = (id) => {
    setIsExpanded(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <>
      {isOpenChart && (
        <div
          className="fixed inset-0 bg-gray-50 bg-opacity-50 z-40"
          onClick={toggleSliderChart}
        />
      )}

      <div
        className={`p-4 fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transform ${isOpenChart ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="relative mb-4 p-4">
            <h2 className="text-base font-semibold text-black">ORGANIZATION CHART</h2>
            <hr className="border-b-2 border-black border-r-2 my-2 w-12" />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={toggleSliderChart}
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

          <div className="flex items-center w-full mb-4">
            <input
              type="text"
              placeholder="Search by name, designation, or email ID..."
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none text-black"
            />
            <button
              className="text-white ml-2 mr-2 px-4 py-2 rounded-md"
              style={{ background: color }}
            >
              Search
            </button>
          </div>

          <div className="flex-grow border border-gray-400 m-4">
            {cards.map((card) => (
              <div key={card.id} className="relative w-80 mx-auto mb-16">

                <div className="flex flex-col items-center relative">
                  <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition-colors duration-300 w-full">
                    <div className="card-body p-4">
                      <h5 className="card-title text-base font-bold text-gray-900">{card.name}</h5>
                      <p className="card-text text-sm text-gray-700">{card.designation}</p>
                      <p className="card-text text-xs text-gray-500">Employee ID: {card.employeeId}</p>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <button
                      className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg focus:outline-none"
                      style={{ background: color }}
                      onClick={() => toggleExpand(card.id)}
                    >
                      {isExpanded[card.id] ? '-' : '+'}
                    </button>
                  </div>

                  {isExpanded[card.id] && (
                    <div className="mt-4">
                      {card.subEmployees.map(sub => (
                        <div key={sub.id} className="card bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition-colors duration-300 p-4 mb-2 w-80">
                          <h6 className="font-semibold text-gray-800">{sub.name}</h6>
                          <p className="text-sm text-gray-600">{sub.designation}</p>
                          <p className="text-xs text-gray-500">Employee ID: {sub.employeeId}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationChart;

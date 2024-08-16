import React, { useState, useEffect } from 'react';
import { useColor } from '../colorcontext/ColorContext';
import "./SettingPage.css";

const SettingPage = ({ isOpenSetting, toggleSliderSetting }) => {
  const [activeTab, setActiveTab] = useState('organization');
  const [checkedItems, setCheckedItems] = useState(Array(7).fill(false));
  const [selectedColor, setSelectedColor] = useState('#052e16');
  const { setColor } = useColor();

  const itemNames = [
    'Wish', 'Wall of fame: Badges', 'Wall of fame: Rewards', 'Team Leave',
    'Referral', 'People on leave today', 'Core values'
  ];

  const itemNames2 = [
    'Inbox', 'Calendar', 'Leave balance', 'Goal', 'Initiative', 'Profile completion',
    'Open position', 'Yesterday attendance'
  ];

  const colors = [
    '#052e16',
    '#237DD1',
    '#1D2435',
    '#645788',
    '#AF42AE',
    '#12C4AC',
    '#E6793B',
  ];

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColor(color); // Update the color in the context immediately
  };

  const handleApplyColor = () => {
    setColor(selectedColor);
    localStorage.setItem('appliedColor', selectedColor);
  };

  useEffect(() => {
    // Load the saved color from localStorage when the component mounts
    const savedColor = localStorage.getItem('appliedColor');
    if (savedColor) {
      setSelectedColor(savedColor);
      setColor(savedColor); // Set the color in the context
    }
  }, [setColor]);

  useEffect(() => {
    document.documentElement.style.setProperty('--checkbox-color', selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    document.documentElement.style.setProperty('--applied-color', selectedColor);
  }, [selectedColor]);

  return (
    <>
      {/* Overlay */}
      {isOpenSetting && (
        <div
          className={`fixed inset-0 bg-green-50 bg-opacity-50 z-40 setting-overlay ${isOpenSetting ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleSliderSetting}
        />
      )}

      {/* Sliding panel */}
      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-white shadow-lg z-50 transform ${isOpenSetting ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full overflow-y-auto p-4">
          <div className="relative mb-1">
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

          <div className='mt-0 pl-5 pr-5'>
            <div className="mb-6 flex">
              <button
                className={`flex-1 py-2 text-center border rounded-l-xl transition-colors duration-300 ease-in-out`}
                style={{
                  backgroundColor: activeTab === 'organization' ? selectedColor : 'transparent',
                  color: activeTab === 'organization' ? '#fff' : 'black'
                }}
                onClick={() => setActiveTab('organization')}
              >
                Organization Widgets
              </button>
              <button
                className={`flex-1 py-2 text-center border rounded-r-xl transition-colors duration-300 ease-in-out`}
                style={{
                  backgroundColor: activeTab === 'personal' ? selectedColor : 'transparent',
                  color: activeTab === 'personal' ? '#fff' : 'black'
                }}
                onClick={() => setActiveTab('personal')}
              >
                Personal Widgets
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 px-5">
            <span className="font-bold text text-black">Widgets</span>
            <button className="text-[#052e16] font-semibold">Reorder</button>
          </div>

          <div className="pl-5 pr-5 mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="flex-grow overflow-y-auto ml-3">
            {activeTab === 'organization' && (
              <div>
                {/* List with checkboxes */}
                <div className="px-5">
                  <ul className="space-y-2">
                    {itemNames.map((name, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                          style={{ accentColor: selectedColor }}
                          className="form-checkbox custom-checkbox cursor-pointer"
                        />
                        <span className="text-gray-700">{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'personal' && (
              <div>
                <div className="px-4">
                  <ul className="space-y-2">
                    {itemNames2.map((name, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                          style={{ accentColor: selectedColor }}
                          className="form-checkbox custom-checkbox cursor-pointer"
                        />
                        <span className="text-gray-700">{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {/* Color box section */}
            <div className="px-4 mt-5">
              <span className="font-bold text-lg text-black">Background color</span>
              <div className="flex flex-wrap gap-5 mt-2 ">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-md cursor-pointer ${color === selectedColor ? 'border-4 border-white' : 'border-2 border-transparent'} border-solid`}
                    style={{ backgroundColor: color, boxShadow: `0 0 0 2px ${color === selectedColor ? '#000' : 'transparent'}` }}
                    onClick={() => handleColorClick(color)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 mb-4" onClick={toggleSliderSetting}>
            <button
              className="w-56 py-2 px-4 rounded-md"
              style={{ backgroundColor: selectedColor, color: '#fff' }}
              onClick={handleApplyColor}

            >
              APPLY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;


import React, { useState } from 'react';
 
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useColor } from "../../pages/colorcontext/ColorContext";
 
function favoriteSection() {
  const { color } = useColor();
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
  const [isRecentSearchersOpen, setIsRecentSearchersOpen] = useState(false);
 
 
  const toggleFavorite = () => setIsFavoriteOpen(!isFavoriteOpen);
  const toggleRecentSearchers = () => setIsRecentSearchersOpen(!isRecentSearchersOpen);
 
  const colorMapping = {
    '#02563D': '#357864',
    '#237DD1': '#4F97DA',
    '#1D2435': '#282F3F',
    '#645788': '#746894',
    '#AF42AE': '#BF68BE',
    '#12C4AC': '#59D6C9',
    '#E6793B': '#E98D4E',
  };
 
 
  const backgroundColor = colorMapping[color] || '#357864';
 
  return (
   
    <>
      <div>
        {/* green BG */}
        <div className='absolute ml-[62px] h-24  text-white p-4 z-20 w-[100vw]'  
        style={{ backgroundColor: backgroundColor }} ></div>
 
        {/* search bar section  */}
 
        <div className="fixed top-14 pl-4 pr-4 bg-white shadow-xl h-full w-[15%] ml-[62px] z-30 pt-3 overflow-y-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded focus:outline-none mb-2"
          />
          <div className="border-b border-gray-200"></div>
 
          {/* Favorite Section */}
          <div
            className="cursor-pointer font-semibold text-gray-700 flex justify-between items-center mt-2 text-sm"
            onClick={toggleFavorite}
          >
            Favorite
            <span className="ml-2">
              {isFavoriteOpen ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isFavoriteOpen ? "max-h-96" : "max-h-0"}`}
          >
            <ul className="mt-2">
              {["Social Profile", "Attendance", "HR Handbook", "Holiday Calendar", "Leave Balance", "Letter", "Payslip", "Profile"].map((item, index) => (
                <li
                  key={index}
                  className="p-2 border-b border-gray-200 text-xs"
                  style={{ transition: "background-color 0.3s, color 0.3s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F0F5F2";
                    e.currentTarget.style.color = "#02563D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "black";
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
 
          {/* Recent Searchers Section */}
          <div
            className="cursor-pointer font-semibold text-gray-700 flex justify-between items-center mt-2 text-sm"
            onClick={toggleRecentSearchers}
          >
            Recent Searches
            <span className="ml-2">
              {isRecentSearchersOpen ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isRecentSearchersOpen ? "max-h-96" : "max-h-0"}`}
          >
            <ul className="mt-2">
              {["Social profile", "Attendance ", "Holiday calender  "].map((item, index) => (
                <li
                  key={index}
                  className="p-2 border-b border-gray-200 text-xs"
                  style={{ transition: "background-color 0.3s, color 0.3s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F0F5F2";
                    e.currentTarget.style.color = "#02563D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "black";
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
 
 
          </div>
          <div className="mt-4">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded  transition-colors duration-300"
              style={{ backgroundColor: color }}
 
            >
              View All
            </button>
 
 
          </div>
          <div className="border-b border-gray-300 mt-4"></div>
 
 
 
          <ul className="mt-4 space-y-2 " >
            <li className="text-gray-700 cursor-pointer">Offer</li>
            <li className="text-gray-700 cursor-pointer">QR code </li>
            <li className="text-gray-700 cursor-pointer">Logout</li>
          </ul>
          <div className='h-[220px]'>
 
          </div>
 
 
        </div>
 
        {/* Social profile section  */}
     
 
      </div>
    </>
  );
}
 
export default favoriteSection;
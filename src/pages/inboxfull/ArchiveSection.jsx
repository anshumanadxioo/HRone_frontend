import React, { useState } from 'react';
import { MdFiberNew } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useColor } from "../../pages/colorcontext/ColorContext";

function ArchiveSection() {
  const { color } = useColor();

  // Separate states for each section
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Toggle functions for each section
  const toggleNew = () => setIsNewOpen(!isNewOpen);
  const toggleArchive = () => setIsArchiveOpen(!isArchiveOpen);

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
        {/* dynamic background */}
        <div className='absolute ml-[62px] h-24 text-white p-4 z-20 w-[100vw]' style={{ backgroundColor: backgroundColor }}></div>

        {/* new and archive bar section */}
        <div className="fixed top-14 pl-4 pr-4 bg-white shadow-xl h-full w-[15%] ml-[62px] z-30 pt-3 overflow-y-auto">
          {/* New Section */}
          <div className="cursor-pointer flex items-center justify-between mb-2" onClick={toggleNew}>
            <div className="flex items-center">
              <MdFiberNew className="text-lg mr-2" />
              <span>New</span>
            </div>
            <span>{isNewOpen ? <FaArrowUp /> : <FaArrowDown />}</span>
          </div>
          <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isNewOpen ? "max-h-96" : "max-h-0"}`}>
            <ul className="mt-0">
              {["All", "Ask asset"].map((item, index) => (
                <li
                  key={index}
                  className="p-2 border-b border-gray-200 text-xs cursor-pointer"
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

          <div className='m-2'></div>

          {/* Archive Section */}
          <div className="cursor-pointer flex items-center justify-between mb-2" onClick={toggleArchive}>
            <div className="flex items-center">
              <BiArchiveIn className="mr-2" />
              <span>Archive</span>
            </div>
            <span>{isArchiveOpen ? <FaArrowUp /> : <FaArrowDown />}</span>
          </div>
          <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isArchiveOpen ? "max-h-96" : "max-h-0"}`}>
            <ul className="mt-0 mb-6">
              {["Ack asset", "Mark attendance", "New announcement"].map((item, index) => (
                <li
                  key={index}
                  className="p-2 border-b border-gray-200 text-xs cursor-pointer"
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
        </div>
      </div>
    </>
  );
}

export default ArchiveSection;

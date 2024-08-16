
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MdOutlineCelebration } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaBullhorn, FaCalendarCheck, FaHandHoldingHeart } from "react-icons/fa";
import ReferTalent from "./ReferTalent";
import { FaHandHolding } from "react-icons/fa6";
import { BiCalendarEvent, BiSolidParty } from "react-icons/bi";
import './scrollbar.css'
import { useColor } from "../../pages/colorcontext/ColorContext";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function HighlightAccordion() {
  const { color } = useColor();

  const [open, setOpen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleReferTalent = () => {
    setIsOpen(!isOpen);
    console.log("calling the function");
  };

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="ml-[64px] h-[calc(100vh-50px)] overflow-y-auto custom-scrollbar">
        <p className="text-[18px] font-semibold mb-3 -ml-3  w-[26vw] px-5 ">Highlights</p>
        <div className="space-y-4 h-[105vh]   ">
          {/* Accordion Item 1 */}
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="p-4 text-gray-800"
            >
              <div className="flex">
                <div>
                  <BiSolidParty className="text-orangered text-4xl mt-[2px] ml-1 absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-7 text-sm">Today's Celebration</p>
                  <p className="text-sm text-start ml-7 text-gray-500">0 celebrations</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              <div className="flex justify-between">
                <div className="ml-2">image</div>
                <p className="text-slate-500 mr-2">No celebration today</p>
              </div>
            </AccordionBody>
          </Accordion>

          {/* Accordion Item 2 */}
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="p-4 text-gray-800"
            >
              <div className="flex">
                <div>
                  <BiCalendarEvent className="text-orangered text-4xl mt-[5px] absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-6 text-sm">Team Planned Leaves</p>
                  <p className="text-sm text-start ml-6 text-gray-500">0 Members</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              <div className="flex justify-between">
                <div className="ml-2">image</div>
                <p className="text-slate-500 mr-2">No planned leaves today</p>
              </div>
            </AccordionBody>
          </Accordion>

          {/* Accordion Item 3 */}
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="p-4 text-gray-800"
            >
              <div className="flex">
                <div>
                  <FaCalendarCheck className="text-orangered text-4xl mt-[2px] -ml-3 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-[3px] text-sm">People on Leave Today</p>
                  <p className="text-sm text-start ml-1 text-gray-500">0 Members</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              <div className="flex justify-between">
                <div className="ml-2">image</div>
                <p className="text-slate-500 mr-2">No leave applied for today</p>
              </div>
            </AccordionBody>
          </Accordion>

          {/* Accordion Item 4 */}
          <Accordion
            open={open === 4}
            icon={<Icon id={4} open={open} />}
            className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="p-4 text-gray-800"
            >
              <div className="flex">
                <div>
                  <FaBullhorn className="text-orangered text-4xl mt-[4px] absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex responsive-button-col">
                  <div className="flex flex-col">
                    <p className="ml-2 text-sm">Referrals/IJP</p>
                    <p className="text-sm text-start ml-6 text-gray-500 w-[100px]">0 referrals|0 IJP</p>
                  </div>
                  <button
                    className="h-[30px] w-[100px] border border-green-900 bg-transparent text-green-900 text-sm  mt-1 ml-4 px-1 rounded transition-colors duration-300 hover:bg-green- text-white"
                    onClick={toggleReferTalent}
                    style={{ backgroundColor: color }}
                  >
                    Refer Talent
                  </button>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              <div className="flex justify-between">
                <div className="ml-2">image</div>
                <p className="text-slate-500 mr-2">No Referrals/IJP available</p>
              </div>
            </AccordionBody>
          </Accordion>

          {/* Accordion Item 5 */}
          <Accordion
            open={open === 5}
            icon={<Icon id={5} open={open} />}
            className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="p-4 text-gray-800"
            >
              <div className="flex">
                <div>
                  <FaHandHoldingHeart className="text-orangered text-4xl mt-[5px] absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-6 text-sm">Core Values</p>
                  <p className="text-sm text-start ml-6 text-gray-500">0 core values</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              <div className="flex justify-between">
                <div className="ml-2">image</div>
                <p className="text-slate-500 mr-2">No core values</p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <ReferTalent isOpen={isOpen} toggleReferTalent={toggleReferTalent} />
      </div>
    </>
  );
}

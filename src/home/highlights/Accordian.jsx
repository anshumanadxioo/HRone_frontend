import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MdOutlineCelebration } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaBullhorn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/highlights/refertalent')
  }
  return (
    <>
      <div className="ml-[64px] max-w-[26vw]">
        <p className="text-xl font-semibold mb-3 mt-3 ml-2">Highlights</p>
        <div className="space-y-4 h-[80vh] overflow-y-auto">
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
                  <MdOutlineCelebration className="text-orangered text-4xl mt-[6px] ml-1 absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-7">Today's Celebration</p>
                  <p className="text-sm text-start ml-7 text-gray-500">0 celebrations</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody
              className={`overflow-hidden ${open === 1 ? "max-h-60" : "max-h-0"} transition-max-height duration-100 ease-in-out`}
              style={{ transitionDelay: "1ms" }}
            >
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
                  <SlCalender className="text-orangered text-4xl mt-[5px] absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-6">Team Planned Leaves</p>
                  <p className="text-sm text-start ml-6 text-gray-500">0 Members</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody
              className={`overflow-hidden ${open === 2 ? "max-h-60" : "max-h-0"} transition-max-height duration-100 ease-in-out`}
              style={{ transitionDelay: "1ms" }}
            >
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
                  <SlCalender className="text-orangered text-4xl mt-[5px] -ml-3 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-[2px]">People on Leave Today</p>
                  <p className="text-sm text-start ml-6 text-gray-500">0 Members</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody
              className={`overflow-hidden ${open === 3 ? "max-h-60" : "max-h-0"} transition-max-height duration-100 ease-in-out`}
              style={{ transitionDelay: "1ms" }}
            >
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
                  <FaBullhorn className="text-orangered text-4xl mt-[5px] absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex responsive-button-col">
                  <div className="flex flex-col">
                    <p className="ml-6">Referrals/IJP</p>
                    <p className="text-sm text-start ml-6 text-gray-500">0 referrals | 0 IJP</p>
                  </div>
                  <button className="h-[34px] border border-green-900 bg-transparent text-green-900 text-sm lg:ml-[20px] mt-2 px-1 rounded
                   transition-colors duration-300 hover:bg-green-900 hover:text-white"
                   onClick={handleClick}
                   >
                    ReferTalent
                  </button>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody
              className={`overflow-hidden ${open === 4 ? "max-h-60" : "max-h-0"} transition-max-height duration-100 ease-in-out`}
              style={{ transitionDelay: "1ms" }}
            >
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
                  <SlCalender className="text-orangered text-4xl mt-[5px] absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-6">Core Values</p>
                  <p className="text-sm text-start ml-6 text-gray-500">0 core values</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody
              className={`overflow-hidden ${open === 5 ? "max-h-60" : "max-h-0"} transition-max-height duration-100 ease-in-out`}
              style={{ transitionDelay: "1ms" }}
            >
              <div className="flex justify-between">
                <div className="ml-2">image</div>
                <p className="text-slate-500 mr-2">No core values</p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}

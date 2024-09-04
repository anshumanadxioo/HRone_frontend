
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MdOutlineCelebration } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaBullhorn, FaCalendarCheck, FaHandHoldingHeart } from "react-icons/fa";
import ReferTalent from "./ReferTalent";
import { FaBullseye, FaHandHolding } from "react-icons/fa6";
import { BiCalendarEvent, BiSolidBullseye, BiSolidParty } from "react-icons/bi";
import './scrollbar.css'
import { useColor } from "../../pages/colorcontext/ColorContext";
import { axoisInstance } from "../../axiosConfig";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import axios from "axios";
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
  const [peopleOnLeave, setPeopleOnLeave] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [coreValues, setCoreValues] = useState([]);
  const [birthday, setBirthday] = useState([]);


  const toggleReferTalent = () => {
    setIsOpen(!isOpen);
    console.log("calling the function");
  };

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const fetchCoreValues = async () => {
    try {
      const response = await axios.get('http://localhost:3000/core-values');
      setCoreValues(response.data);
    } catch (err) {
      console.log("Error fetching core values:", err.response?.data?.message || err.message);
    }
  };


  const getPeopleOnLeaveToday = async () => {
    try {
      const response = await axios.get('http://localhost:3000/leave/today');
      setPeopleOnLeave(response.data.names || []); // Fallback to empty array
    } catch (err) {
      console.log("Error fetching people on leave today:", err.response?.data?.message || err.message);
    }
  };
  
  const getBirthdays = async () => {
    try {
      const response = await axios.get('http://localhost:3000/check-birthdays');
      setBirthday(response.data.messages || []); // Fallback to empty array
    } catch (err) {
      console.log("Error fetching birthdays:", err.response?.data?.message || err.message);
    }
  };
  

  useEffect(() => {
    fetchCoreValues();
    getBirthdays();
    getPeopleOnLeaveToday();
  }, []);
  
  console.log("Birthday data:", birthday);
  console.log("People on leave:", peopleOnLeave);
  console.log("Core values data:", coreValues);
  
  return (
    <>
      <div className="ml-[64px] h-[100vh]">
        <p className="text-[18px] font-semibold mb-3 -ml-3 mt-8 px-5 ">Highlights</p>
        <div className="space-y-4 w-[20vw]">
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
                  <p className="text-sm text-start ml-8 text-gray-500">{birthday?.length} celebration</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              {birthday?.length > 0 ? (
                birthday?.map((item, index) => (
                  <div className="ml-5" key={index}>
                    <p className="text-slate-500 font-semibold mr-2">{item}</p>
                  </div>
                ))
              ) : (
                <p>No celebrations today</p>
              )}
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
                  <BiSolidBullseye className="text-orangered text-4xl mt-[5px] absolute left-0 bg-lightpink rounded" />
                </div>
                <div className="flex flex-col">
                  <p className="ml-6 text-sm">
                    Mission statement</p>
                  <p className="text-sm text-start ml-6 text-gray-500">Vision,mission and purpose</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              <div className="flex w-full flex-col">
                <Tabs aria-label="Options">
                  <Tab key="Vision" title="Vision" className="border-2 rounded">
                    <Card className="mt-2">
                      <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="mission" title="mission">
                    <Card>
                      <CardBody>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="purpose" title="purpose">
                    <Card>
                      <CardBody>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
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
                  <p className="text-sm text-start ml-1 text-gray-500">{peopleOnLeave.length} Members</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              {peopleOnLeave.length > 0 ? (
                peopleOnLeave.map((name, index) => (
                  <div className="ml-5" key={index}>
                    <p className="text-slate-500 font-semibold mr-2">{name}</p>
                  </div>
                ))
              ) : (
                <p>No leave applied for today</p>
              )}
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
                    <p className="ml-6 text-sm">Referrals/IJP</p>
                    <p className="text-sm text-start ml-6 text-gray-500 w-[100px]">0 referrals|0 IJP</p>
                  </div>
                  <button
                    className=" h-[44px] w-[70px]  border text-center border-green-900 bg-transparent  text-sm  ml-1  rounded transition-colors duration-300 hover:bg-green- text-white"
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
            className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg ml-1"
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
                  <p className="text-sm text-start ml-6 text-gray-500">{coreValues.length} core values</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              {coreValues.length > 0 ? (
                <div className="">
                  <div className="ml-2 font-semibold text-xl"> {coreValues[0]?.title}</div>
                  <p className="text-slate-500 ml-2 text-base"><span className="font-semibold"></span> {coreValues[0]?.description}</p>
                </div>
              ) : (
                <p>No core values available</p>
              )}
            </AccordionBody>
          </Accordion>
        </div>
        <ReferTalent isOpen={isOpen} toggleReferTalent={toggleReferTalent} />
      </div>
    </>
  );
}

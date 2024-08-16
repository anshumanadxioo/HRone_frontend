import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import React, { useState } from 'react'

import { FaMagnifyingGlass } from 'react-icons/fa6'
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
function SocialProfile() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
     <div className='absolute ml-[62px] h-24 bg-customGreen text-white p-4 z-20 w-[100vw]'>
     </div>
     <div className='absolute bg-white shadow-xl h-[100vh] w-[15vw] ml-[62px] z-30'>
      <div className='border border-white-600 w-[15vw] py-2 '>
      <div className='flex bg-white   rounded-[5px]    border-[1px] border-gray-400 items-start w-[12vw] ml-4 '>
        <FaMagnifyingGlass className=' text-slate-500 text-xl mt-[5px]  w-12 h-4'/>
        <input placeholder='Search' className='w-[5vw] -ml-3 outline-none'/>
      </div>
      </div>
      <div>
      <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
            >
              <p className='text-sm ml-2 text-gray-600'>Favorites</p>
            </AccordionHeader>
            <AccordionBody className="overflow-hidden transition-max-height duration-100 ease-in-out">
              
            </AccordionBody>
          </Accordion>
      </div>

     </div>
    </div>
  )
}

export default SocialProfile

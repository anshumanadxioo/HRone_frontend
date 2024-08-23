import React, { useState } from 'react'
import { FaArrowAltCircleDown} from 'react-icons/fa'
import '../../home/highlights/scrollbar.css'
function CustomDropDown({options}) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setsetselected] = useState(options[0])
    const handleClick=(value)=>{
        setsetselected(value)
        setIsOpen(!isOpen)
    }
  return (
    <div>
     <div className='relative w-full mt-2'>
     <div
        className="p-2 border border-gray-300 rounded bg-white text-gray-700 cursor-pointer flex justify-between   "
      >
        {selectedOption} 
        <FaArrowAltCircleDown onClick={() => setIsOpen(!isOpen)} className='mt-[4px]'/>
      </div>
      {isOpen&&(
       <div className="absolute z-10 w-full mt-1 max-h-[70vh] overflow-y-auto custom-scrollbar bg-white border border-gray-300 rounded shadow-lg">
             {options.map((items,index)=>(<div key={index}
             className="p-2 hover:bg-lightgreen hover:text-green-900 hover:font-bold cursor-pointer"
             onClick={()=>handleClick(items)}>
               {items}
             </div>))}
        </div>
      )}
     </div>
    </div>
  )
}

export default CustomDropDown

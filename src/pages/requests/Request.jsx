import React from 'react';
import Pending from './dropdownpages/Pending/Pending';
import Approved from './dropdownpages/Approved/Approved';
import Rejected from './dropdownpages/Rejected/Rejected';
import Undo from './dropdownpages/Undo/Undo';
import Draft from './dropdownpages/Draft/Draft';
import { NavLink, Outlet } from 'react-router-dom';
import CustomDropDown from './CustomDropDown';
import { useColor } from '../colorcontext/ColorContext';
function Request() {
  const requestItems = [
    { key: 'Pending', component: <Pending /> },
    { key: 'Approved', component: <Approved /> },
    { key: 'Rejected', component: <Rejected /> },
    { key: 'Undo', component: <Undo /> },
    { key: 'Drafts', component: <Draft /> },
  ];
      const {color}=useColor();
  const all_category=[ 'all category','Asset','Attendence Regularization',' Attedence regularization cancel','companstory off'
    ,'Document','Exceptional expense','Exceptional leave','Expense  ','Family details','FBP approval','Goal','Leaves','overtime',
    'personal details','Reimbaresment' ,'short leaves','Travel','Variable'
  ] 

  return (
    <div className="fixed w-full h-full bg-[url('/requests.png')] bg-cover bg-no-repeat flex">
      {/* Sidebar */}
      <div className='flex flex-col w-[20vw] h-full shadow-[0_0_10px_0_rgba(0,0,0,0.2)] border border-black'>
        <div className='p-2 border-b-[1px] border-gray-700'>
          <button className='px-3 py-2 rounded text-white mt-12 w-[70%] ml-16'
          style={{backgroundColor:color}}
          >NEW REQUEST</button>
        </div>
        <div className='flex flex-col'>
          {requestItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.key}
              className={({ isActive }) =>
                `py-2 text-center text-gray-700 hover:text-green-900 hover:font-bold cursor-pointer ${
                  isActive ? 'bg-lightgreen font-bold' : ''
                }`
              }
            >
              {item.key}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col mt-14 w-[25%] h-full shadow-[0_0_10px_0_rgba(0,0,0,0.8)] border-gray-800 px-4">
  {/* <select className="w-full p-2 mt-4 mb-4 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900">
    {all_category.map((item, index) => (
      <option key={index} className='bg-gray-100'>
        <p className= "hover:bg-gray-200 hover:text-green-900">{item}</p>
      </option>
    ))}
  </select> */}
   <CustomDropDown options={all_category}/>
   <Outlet />
</div>

    </div>
  );
}

export default Request;

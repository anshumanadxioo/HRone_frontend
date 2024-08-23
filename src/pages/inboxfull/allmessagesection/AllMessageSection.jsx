import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import { useColor } from '../../colorcontext/ColorContext';
import AskAssetNotification from './AskAssetNotification';
import MarkAttandanceNotification from './MarkAttandanceNotification';
import NewAnnouncement from './NewAnnouncement';

function AllMessageSection({ selectedComponent }) {
    const { color } = useColor();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleComponentChange = (component) => {
        setActiveComponent(component);
        setDropdownOpen(false);  // Close dropdown after selection
    };

    return (
        <div>
            <div
                className=" p-3 mt-14  bg-gray-100  border-gray-300 shadow-2xl h-[100vh] w-80  z-30 overflow-y-auto "
            >
                <div className="flex justify-between items-center relative">
                    <button
                        className="p-2 rounded flex items-center text-white"
                        style={{ backgroundColor: color }}
                        onClick={toggleDropdown}
                    >
                        All Messages
                        <CiMenuFries className="ml-2 mr-2" />
                    </button>
                    <IoMdSearch className="cursor-pointer text-3xl text-black" />
                    
                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute top-12 left-0 bg-white shadow-lg border rounded mt-2 w-48">
                            <ul>
                                <li
                                    className="p-2 border-b cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleComponentChange('askAsset')}
                                >
                                    Ack asset
                                </li>
                                <li
                                    className="p-2 border-b cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleComponentChange('markAttendance')}
                                >
                                    Mark attendance
                                </li>
                                <li
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleComponentChange('newAnnouncement')}
                                >
                                    New announcement
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="mt-4 border-b border-gray-200"></div>
                
                {/* Conditionally render the selected component */}
                {activeComponent === 'askAsset' && <AskAssetNotification />}
                {activeComponent === 'markAttendance' && <MarkAttandanceNotification />}
                {activeComponent === 'newAnnouncement' && <NewAnnouncement />}
            </div>
        </div>
    );
}

export default AllMessageSection;

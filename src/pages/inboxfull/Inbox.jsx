import React from 'react';
import Header from '../../home/Header';
import Sidebar from '../../home/Sidebar';
import ArchiveSection from './ArchiveSection';
import AllMessageSection from './AllMessageSection';
import GaintPage from './GaintPage';

const Inbox = () => {
  return (
    <>
   
      
      <div className=" space-x-52">
        <ArchiveSection />
        <AllMessageSection />
        {/* <GaintPage className= ""/> */}
      </div>
     
      
    </>
  );
}

export default Inbox;

import React from 'react';
import Header from '../../home/Header';
import Sidebar from '../../home/Sidebar';
import ArchiveSection from './ArchiveSection';
import AllMessageSection from './AllMessageSection';

const Inbox = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="space-x-56 ">
        <ArchiveSection />
        <AllMessageSection  />
      </div>
    </>
  );
}

export default Inbox;

import React from 'react';
import ArchiveSection from './archivesection/ArchiveSection';
import AllMessageSection from './allmessagesection/AllMessageSection';
import GaintPage from './gaintpage/GaintPage';

const Inbox = () => {
  return (
    <>


      <div className="flex justify-start">
        <ArchiveSection />
        <AllMessageSection />
        <GaintPage />
      </div>


    </>
  );
}

export default Inbox;

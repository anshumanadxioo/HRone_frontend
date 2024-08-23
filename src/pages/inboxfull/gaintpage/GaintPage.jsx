import React from 'react'
import GaintHeader from './GaintHeader'
import GaintPageContent from './GaintPageContent'
import GaintAssetSection from './GaintAssetSection'

const GaintPage = () => {
  return (
    <>
      <div className=" p-3 border-gray-300 shadow-2xl mt-14 h-[100vh] w-[100vw]  z-30  bg-gray-100 overflow-y-auto">

      <GaintAssetSection/>
        {/* <GaintPageContent /> */}



      </div>
    </>
  )
}

export default GaintPage
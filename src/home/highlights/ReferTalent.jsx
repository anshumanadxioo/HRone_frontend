import React, { useState } from 'react';

function ReferTalent({ isOpen, toggleReferTalent }) {
  const [referal, setReferal] = useState({
    candidate_name: '',
    gender: '',
    email: '',
    countrycode: '',
    phonenno: '',
    comments: ''
  });

  const handleChange = (e) => {
    setReferal((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(referal);
  };

  const isFormValid = () => {
    const { candidate_name, gender, email, countrycode, phonenno } = referal;
    return candidate_name && gender && email && countrycode && phonenno;
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[40vw] p-6 bg-white shadow-lg z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className='relative'>
        <div className=' text-xl mb-4'>REFER SOMEONE</div>
        <div
          onClick={toggleReferTalent}
          className='cursor-pointer w-6 h-6 absolute right-0 top-2'
        >
          {/* Cross sign */}
          <div className='absolute w-6 h-[3px] bg-black rotate-45' />
          <div className='absolute w-6 h-[3px] bg-black -rotate-45' />
        </div>
      </div>
      <p className='mb-4'>We'll send a link to the email and phone number you provide here.</p>
      
      <form onSubmit={handleSubmit} className='space-y-4 h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar'>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='candidate_name'>Candidate Name</label>
          <input
            type='text'
            id='candidate_name'
            name='candidate_name'
            value={referal.candidate_name}
            onChange={handleChange}
            placeholder='Enter candidate name'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='gender'>Gender</label>
          <select
            id='gender'
            name='gender'
            value={referal.gender}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded p-2'
          >
            <option value='' disabled>Select gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={referal.email}
            onChange={handleChange}
            placeholder='Enter email'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='countrycode'>Country Code</label>
          <input
            type='text'
            id='countrycode'
            name='countrycode'
            value={referal.countrycode}
            onChange={handleChange}
            placeholder='Enter country code'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='phonenno'>Phone Number</label>
          <input
            type='text'
            id='phonenno'
            name='phonenno'
            value={referal.phonenno}
            onChange={handleChange}
            placeholder='Enter phone number'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='comments'>Comments</label>
          <textarea
            id='comments'
            name='comments'
            value={referal.comments}
            onChange={handleChange}
            rows='4'
            placeholder='Enter any additional comments'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
      </form>
      
      <div className="fixed bottom-2 right-[4vw] w-[33vw] px-4">
        <button
          type='submit'
          disabled={!isFormValid()}
          className={`w-full py-2 rounded ${isFormValid() ? 'bg-green-900 text-white hover:bg-green-900' : 'bg-customGreen opacity-[50%] text-white cursor-not-allowed'}`}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ReferTalent;

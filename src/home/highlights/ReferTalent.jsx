import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ReferTalent() {
  const [referal, setReferal] = useState({
    candidate_name: '',
    gender: '',
    email: '',
    countrycode: '',
    phonenno: '',
    comments: ''
  });
  const navigate=useNavigate();
  const handleClose = () => {
      navigate('/home')
  };

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
    <div className='relative w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded '>
      <div className='flex justify-between items-center mb-4'>
        <div className='underline text-xl'>REFER SOMEONE</div>
        <div
          onClick={handleClose}
          className='cursor-pointer w-6 h-6 flex justify-center items-center relative'
        >
          {/* Cross sign */}
          <div className='absolute w-6 h-[3px] bg-black rotate-45' />
          <div className='absolute w-6 h-[3px] bg-black -rotate-45' />
        </div>
      </div>
      <p className='mb-4'>We'll send a link to the email and phone number you provide here.</p>
      <form onSubmit={handleSubmit} className='space-y-4'>
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
            style={{ overflow: 'hidden' }}
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
        <button
          type='submit'
          disabled={!isFormValid()}
          className={`w-full py-2 rounded ${isFormValid() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ReferTalent;

import axios from 'axios';
import React, { useState } from 'react';
import { useColor } from '../../pages/colorcontext/ColorContext'; 
import { toast } from 'react-toastify';

function ReferTalent({ isOpen, toggleReferTalent }) {
  const colorMapping = {
    '#02563D': '#357864',
    '#237DD1': '#4F97DA',
    '#1D2435': '#282F3F',
    '#645788': '#746894',
    '#AF42AE': '#BF68BE',
    '#12C4AC': '#59D6C9',
    '#E6793B': '#E98D4E',
  };
  const { color } = useColor();
  const backgroundColor = colorMapping[color] || '#357864';

  const [referal, setReferal] = useState({
    candidate_name: '',
    gender: '',
    email: '',
    country_code: '',
    phone_number: '',
    comments: '',
    portfolio_url: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setReferal((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  };

  const referUrl = 'http://localhost:3000/referral';

  const refertalent = async (data) => {
    try {
      setIsLoading(true);
      console.log('Sending data:', data);
      const response = await axios.post(referUrl, data);
      console.log('API Response:', response.data);
      toast.success('Registration successful');
      setResponseMessage('Referral sent successfully!');
    } catch (err) {
      console.error('Error details:', err.response ? err.response.data : err.message);
      toast.error('Error in submitting the details try again !');
      setResponseMessage('Failed to send referral.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('On submit is clicked');
    console.log('Form data:', referal);
    refertalent(referal);
  };

  const isFormValid = () => {
    const { candidate_name, gender, email, country_code, phone_number, portfolio_url } = referal;
    return candidate_name && gender && email && country_code && phone_number && portfolio_url;
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[40vw] p-6 bg-white shadow-lg z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className='relative'>
        <div className='text-xl mb-4'>REFER SOMEONE</div>
        <div
          onClick={toggleReferTalent}
          className='cursor-pointer w-6 h-6 absolute right-0 top-2'
        >
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
            className='w-full border border-gray-300 rounded p-2 text-white'
            style={{ backgroundColor: backgroundColor }}
          >
           
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
          <label className='block text-sm font-medium mb-1' htmlFor='country_code'>Country Code</label>
          <input
            type='text'
            id='country_code'
            name='country_code'
            value={referal.country_code}
            onChange={handleChange}
            placeholder='Enter country code'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='phone_number'>Phone Number</label>
          <input
            type='text'
            id='phone_number'
            name='phone_number'
            value={referal.phone_number}
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
        <div>
          <label className='block text-sm font-medium mb-1' htmlFor='portfolio_url'>Portfolio URL</label>
          <input
            type='url'
            id='portfolio_url'
            name='portfolio_url'
            value={referal.portfolio_url}
            onChange={handleChange}
            placeholder='Enter portfolio URL'
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div className="fixed bottom-2 right-[4vw] w-[33vw] px-4">
          <button
            type='submit'
            disabled={!isFormValid() || isLoading}
            className={`w-full py-2 rounded ${isFormValid() ? 'bg-green-900 text-white hover:bg-green-900' : ' opacity-[50%] text-white cursor-not-allowed'}`}
            style={{ backgroundColor: backgroundColor }}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>

      {responseMessage && (
        <div className='mt-4 text-center text-sm'>
          <span>{responseMessage}</span>
        </div>
      )}
    </div>
  );
}

export default ReferTalent;

import axios from 'axios';
import React, { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' // Updated to match the naming in the backend
  });

  const handleChange = (e) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Password:', formData.password);
    console.log('Confirm Password:', formData.confirmPassword);

    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const result = await registerUser(formData);
      console.log('Registration successful', result);
      toast.success('Registration successful');
      navigate('/login');
    } catch (err) {
      console.error('Registration failed', err.message);
      toast.error(`Registration failed: ${err.response?.data?.message || err.message}`);
    }
  };

  const navigate = useNavigate();

  const REGISTER_URL = 'http://localhost:3000/register';

  const registerUser = async (formData) => {
    try {
      const res = await axios.post(REGISTER_URL, formData);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className='flex w-full h-screen responsive-main_div'>
      {/* Left Side */}
      <div className='md:w-[50vw] flex flex-col items-center justify-center p-4 bg-white-400 shadow-lg'>
        <h1 className='text-2xl font-bold mb-1'>Get Started Now</h1>

        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
              Name
            </label>
            <input
              id='name'
              placeholder='Enter Name'
              type='text'
              name='name'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
              Email Address
            </label>
            <input
              id='email'
              placeholder='Enter Email'
              type='email'
              required
              name='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
              Password
            </label>
            <input
              id='password'
              placeholder='Enter Password'
              type='password'
              name='password'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-1'>
              Confirm Password
            </label>
            <input
              id='confirmPassword'
              placeholder='Enter Password again'
              type='password'
              name='confirmPassword' // Updated to match the naming in the backend
              required
              className='w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center mb-2'>
            <input type='checkbox' id='terms' required className='h-4 w-4 text-green-900 focus:ring-green-900 border-gray-300 rounded' />
            <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
              I agree to the <span className='underline cursor-pointer hover:text-green-950'>terms &amp; policy</span>
            </label>
          </div>

          <button
            type='submit'
            className='w-full py-2 px-4 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-900'
          >
            Sign Up
          </button>

          <div className='flex'>
            <div className='h-[2px] w-[183px] mt-8 bg-black'></div>
            <div className='mt-[18px]'><p>or</p></div>
            <div className='h-[2px] w-[183px] mt-8 bg-black'></div>
          </div>

          <div className='mt-3 flex justify-between responsive-signinoption-res'>
            <div className='flex ml-2 pb-2 cursor-pointer'>
              <FaGoogle className='text-2xl mr-2' />
              Sign in with Google
            </div>
            <div className='flex mr-4 ml-4 cursor-pointer'>
              <FaApple className='text-2xl mr-2' />
              Sign in with Apple
            </div>
          </div>

          <p className='ml-20 mt-2'>
            Have an account? <span className='text-blue-800 cursor-pointer' onClick={() => navigate('/login')}>Log In</span>
          </p>
        </form>
      </div>

      <div>
        <img src='/login.png' loading='lazy' alt='Login' className='md:h-[100vh] md:w-[50vw] lg:object-fill' />
      </div>
    </div>
  );
}

export default SignUp;

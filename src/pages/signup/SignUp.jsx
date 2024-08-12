import React from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';

function SignUp() {
  return (
    <div className='flex w-full h-screen'>
      {/* Left Side */}
      <div className='w-full flex flex-col items-center justify-center p-8 bg-white-400'>
        <h1 className='text-2xl font-bold mb-4'>Get Started Now</h1>
        
        <form className='w-full max-w-sm'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
            <input
              id='name'
              placeholder='Enter Name'
              type='text'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
            <input
              id='email'
              placeholder='Enter Email'
              type='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input
              id='password'
              placeholder='Enter Password'
              type='password'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='flex items-center mb-4'>
            <input type='checkbox' id='terms' className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />
            <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
              I agree to the <span className='underline'>terms &amp; policy</span>
            </label>
          </div>

          <button
            type='button'
            className='w-full py-2 px-4 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-900'
          >
            Sign Up
          </button>
        </form>

        <div className='mt-6'>
          <div className='flex items-center justify-center space-x-4'>
            
              <FaGoogle className='text-2xl mr-2' />
                Sign in with Google
        
              <FaApple className='text-2xl mr-2' />
              Sign in with Apple
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='md:flex w-[80%] items-center justify-between'>
        <img src='/login.png' alt='Login' className='w-[65%] h-[100vh]' />
      </div>
    </div>
  );
}

export default SignUp;

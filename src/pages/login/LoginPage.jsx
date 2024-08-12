import React from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';

function LoginPage() {
  return (
    <div className='flex w-full h-screen'>
      {/* Left Side */}
      <div className='w-full flex flex-col items-center justify-center p-8 bg-gray-200'>
        <form className='w-full max-w-sm'>
          {/* Added Text Lines */}
          <h1 className='text-2xl font-semibold mb-2' style={{
            width: '252px',
            height: '48px',
            fontFamily: 'Poppins',
            fontSize: '32px',
            fontWeight: '500',
            lineHeight: '48px',
            textAlign: 'left'
          }}>
            Welcome Back
          </h1>
          <h5 className='mb-4' style={{
            width: '372px',
            height: '26.55px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '24px',
            textAlign: 'left',
            opacity: '1' // Ensure this is visible
          }}>
            Enter the credentials to access
          </h5>

          {/* Form Fields */}
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
            <input
              id='email'
              placeholder='Enter Email'
              type='email'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              style={{ borderColor: '#000' }} // Marking with black color for visibility
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input
              id='password'
              placeholder='Enter Password'
              type='password'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              style={{ borderColor: '#000' }} // Marking with black color for visibility
            />
          </div>

          <div className='flex items-center mb-4'>
            <input
              type='checkbox'
              id='terms'
              className='h-4 w-4 text-green-900 focus:ring-green-900 border-gray-300 rounded'
            />
            <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
              Keep me signed in for 30 days
            </label>
          </div>
          
          <button
            type='submit'
            className='w-full py-2 px-4 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900'
            style={{
              width: '404px',
              height: '35.4px',
              background: '#3A5B22',
              border: '1px solid #3A5B22',
              opacity: '1' // Ensure visibility
            }}
          >
            Login
          </button>
          <div className='flex'>
            <div className='h-[2px] w-[183px] mt-8 bg-black'></div>
            <div className='mt-[18px]'><p>or</p></div>
            <div className='h-[2px] w-[183px] mt-8 bg-black'></div>
         </div>
        </form>

        <div className='mt-6'>
          <div className='flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4'>
            <div className='flex items-center space-x-2'>
              <FaGoogle className='text-2xl' />
              <span className='text-sm'>Sign in with Google</span>
            </div>
            <div className='flex items-center space-x-2'>
              <FaApple className='text-2xl' />
              <span className='text-sm'>Sign in with Apple</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='md:flex items-center justify-between'>
        <img src='/login.png' alt='Login' className='h-[100vh] w-[50vw] object-cover' />
      </div>
    </div>
  );
}

export default LoginPage;

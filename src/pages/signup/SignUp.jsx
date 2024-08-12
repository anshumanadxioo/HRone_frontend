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
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
            />
          </div>

          <div className='flex items-center mb-4'>
            <input type='checkbox' id='terms' className='h-4 w-4 text-gren-900 focus:ring-green-900 border-gray-300 rounded' />
            <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
              I agree to the <span className='underline cursor-pointer hover:text-green-950'>terms &amp; policy</span>
            </label>
          </div>

          <button
            type='button'
            className='w-full py-2 px-4 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-900'
          >
            Sign Up
          </button>
          <div className='flex'>
            <div className='h-[2px] w-[183px] mt-8 bg-black'></div>
            <div className='mt-[18px]'><p>or</p></div>
            <div className='h-[2px] w-[183px] mt-8 bg-black'></div>
         </div>
        <div className='mt-6 flex justify-between responsive-signinoption-res'>
            <div className='flex ml-2 pb-2'>
            <FaGoogle className='text-2xl mr-2 ' />
             Sign in with Google
            </div>
          <div className='flex mr-4 ml-4'>
              <FaApple className='text-2xl mr-2' />
              Sign in with Apple
          </div>
        </div>
          <p className='ml-20 mt-8'>Have an account? <span className='text-blue-800'>Login In</span></p>
        </form>
      </div>

      <div className='md:flex md: items-center md:justify-between'>
        <img src='/login.png' loading='lazy' alt='Login' className=' md:h-[100vh] md:w-[50vw] 
        lg:object-fill' />
      </div>
    </div>
  );
}

export default SignUp;

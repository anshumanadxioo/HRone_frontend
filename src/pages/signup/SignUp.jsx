import axios from 'axios';
import React, { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const [formData, setformData] = useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const handleChange=(e)=>{
  setformData((oldstate)=>({
    ...oldstate,
    [e.target.name]:e.target.value
  }))
 
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
  console.log(formData)
  const result=await registerUser(formData)
  console.log("Registration successful")
}
catch(err){
  console.log("Registration fail",err)
}
}
const navigate=useNavigate();
const handleClick=()=>{
 navigate('/login');
}
const REGISTER_URL='https://tzqnlpfh-3000.inc1.devtunnels.ms/register'
const registerUser=async (formdata)=>{
try{
  const res= await axios.post(REGISTER_URL,formdata)
  console.log(res.data);
  
  return res.data
}
catch(err){
  console.log("Error while registering user",err);
  throw err;
}
}
  return (
    <div className='flex w-full h-screen responsive-main_div'>
      {/* Left Side */}
      <div className='md:w-[50vw] flex flex-col items-center justify-center p-4 bg-white-400 shadow-lg'>
        <h1 className='text-2xl font-bold mb-1'>Get Started Now</h1>
        
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
            <input
              id='name'
              placeholder='Enter Name'
              type='text'
              name="name"
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
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
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
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
            <label htmlFor='confirmpassword' className='block text-sm font-medium text-gray-700 mb-1'>Confirm Password</label>
            <input
              id='confirmpassword'
              placeholder='Enter Password again'
              type='confirmpassword'
              name='confirmpassword'
              required
              className='w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              value={formData.confirmpassword}
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center mb-2'>
            <input type='checkbox' id='terms' required className='h-4 w-4 text-gren-900 focus:ring-green-900 border-gray-300 rounded' />
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
            <FaGoogle className='text-2xl mr-2 ' />
             Sign in with Google
            </div>
          <div className='flex mr-4 ml-4 cursor-pointer'>
              <FaApple className='text-2xl mr-2' />
              Sign in with Apple
          </div>
        </div>
          <p className='ml-20 mt-2'>Have an account?
             <span className='text-blue-800 cursor-pointer' onClick={handleClick}>Login In</span>
             </p>
        </form>
      </div>

      <div className=''>
        <img src='/login.png' loading='lazy' alt='Login' className='md:h-[100vh]  md:w-[50vw] 
        lg:object-fill' />
      </div>
    </div>
  );
}

export default SignUp;

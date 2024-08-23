import axios from 'axios';
import React, { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { axoisInstance } from '../../axiosConfig';
import { toast } from 'react-toastify';

function LoginPage() {
  const [login, setlogin] = useState({
    email:'',
    password:''
  })
  const[error,setError]=useState('')
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setlogin((oldState)=>({
      ...oldState,
      [e.target.name]:e.target.value
    }))
  }
  const get_Login=async(data)=>{
  try{
    const res=await axoisInstance.post('/login',data);
    console.log(res.data.token,"login token");
    localStorage.setItem('token',res.data.token);
    toast.success("login successfully");
    navigate('/home')
  }
  catch(error){
   if(error.message){
    toast.error("Error")
    setError(error.message);
   }
   else{
    setError('An error occured please try again')
   }
    
  }
  }
  const handleSubmit=(event)=>{
   event.preventDefault();

   console.log(login);
   get_Login(login);
  }
  return (
    <div className='flex w-full h-screen'>
      {/* Left Side */}
      <div className='w-full flex flex-col items-center justify-center p-8 bg-white'>
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
          <h1 className='text-2xl mb-2 w-[252px] h-[48px] font-poppins text-[32px] font-medium leading-[48px] text-left'>
            Welcome Back
          </h1>
          <h5 className='mb-4 w-[372px] h-[26.55px] font-poppins text-[16px] font-medium leading-[24px] text-left opacity-100'>
            Enter the credentials to access
          </h5>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
            <input
              id='email'
              placeholder='Enter Email'
              type='email'
              required
              className='w-full px-3 py-2 border border-black rounded-lg focus:outline-none  focus:ring-2 focus:ring-green-900'
              name='email'
              value={login.email}
              onChange={handleChange}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input
              id='password'
              placeholder='Enter Password'
              type='password'
              required
              className='w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
              name='password'
              value={login.password}
              onChange={handleChange}
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
            className={`w-[404px] h-[35.4px] text-white font-semibold rounded-lg shadow-md
               ${error?'bg-red-600 border border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-900'
                :'bg-[#3A5B22] border border-[#3A5B22] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900'
                } 
               `}
          >
            Login
          </button>
          <div className='flex items-center mt-8'>
            <div className='h-[2px] w-[183px] bg-black'></div>
            <div className='mx-4'>
              <p>or</p>
            </div>
            <div className='h-[2px] w-[183px] bg-black'></div>
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

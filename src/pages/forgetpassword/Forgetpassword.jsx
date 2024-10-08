import React, { useEffect, useState } from 'react';
import { axoisInstance } from '../../axiosConfig';

function Forgetpassword() {
  const [password, setpassword] = useState({
    newpassword:'',
    confirmpassword:''
  })
  const handleChange=(e)=>{
    setpassword((oldstate)=>({
      ...password,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(password,"password")
  }
  useEffect(()=>{
  forget_password(password)
  },[])
  const forget_password=async(password)=>{
    try{
      const res=await axoisInstance.post('/forgot-password',password);
      console.log(res.data.token,"token has been send")
    }
    catch(err){
        console.log("failed to change the password",err);
    }

  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>Reset Your Password</h1>
        <p className='text-gray-400 mb-3 text-center'>
          Set your new 8-digit password and get access to your account.
        </p>
        <hr/>
        <div className='mb-4 mt-4'>
          <label htmlFor='new-password' className='block text-sm font-medium text-gray-700 mb-1'>
            New Password
          </label>
          <input
            type='password'
            placeholder='Enter new password'
            required
            name='newpassword'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
            value={password.newpassword}
            onChange={handleChange}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='confirm-password' className='block text-sm font-medium text-gray-700 mb-1'>
            Confirm Password
          </label>
          <input
            type='password'
            placeholder='Confirm new password'
            required
            name='confirmpassword'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900'
            onChange={handleChange}
          />
        </div>
        <button
          type='button'
          className='w-full py-2 px-4 bg-green-900 text-white font-semibold rounded-lg shadow-md '
          onClick={handleSubmit}
        >
          Reset Now
        </button>
      </div>
    </div>
  );
}

export default Forgetpassword;

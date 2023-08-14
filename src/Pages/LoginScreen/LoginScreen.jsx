import React, { useState } from 'react'
import '../LoginScreen/Login.css'
import logo from '../../Assets/logoP.png'
import Signup from '../Signup';


const LoginScreen = () => {

  const [signin,setSignIn] = useState(false);

  return (
    <div className='relative h-full w-full'>
        <div className='login-bg'>
          <img src={logo} className='w-[8rem] px-5 py-5 fixed md:w-40 object-contain' alt="logo" />
          <button onClick={()=>setSignIn(true)}  className='px-5 py-2 bg-[#E50914] fixed right-5 top-5 text-white rounded-sm text-md'>Sign In</button>
          <div className='w-full h-screen z-20 bg-[rgba(0,0,0,0.4)]  bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)]'>
          </div>
          <div className='z-20 text-white text-center w-full ml-auto mr-auto absolute top-[30%]'>
            {signin? 
             <Signup/>
             : <>
              <h1 className='text-4xl md:text-5xl w-[98%] ml-auto mr-auto font-medium'>Unlimited films, TV programes and more.</h1>
              <h2 className='text-lg md:text-2xl font-normal py-5'>Watch anywhere. Cancel at any time.</h2>
              <h3 className='text-sm w-[90%] ml-auto mr-auto md:text-xl font-sm'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='w-[80%] ml-auto mr-auto'>
                <form className='py-5'>
                  <input type="email" placeholder='Email Address' className='w-[90%] mb-4 md:w-[28%] py-3 px-3 rounded-l-sm'/>
                  <button onClick={()=>setSignIn(true)} className='bg-[#e50914f3] py-3 px-6 w-[90%] md:w-fit rounded-r-sm font-medium'>GET STARTED</button>
                </form>
              </div>
            </>}
            
          </div>
        </div>  
    </div>
  )
}

export default LoginScreen

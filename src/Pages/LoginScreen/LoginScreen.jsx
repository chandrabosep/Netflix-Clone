import React from 'react'
import '../LoginScreen/Login.css'
import logo from '../../Assets/logoP.png'


const LoginScreen = () => {
  return (
    <div className='relative h-full w-full'>
        <div className='login-bg'>
          <img src={logo} className='w-20 px-5 py-5 fixed lg:w-40 object-contain' alt="logo" />
          <button className='px-5 py-2 bg-[#E50914] fixed right-5 top-5 text-white rounded-sm text-md'>Sign In</button>
          <div className='w-full h-screen z-20 bg-[rgba(0,0,0,0.4)]  bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)]'>
          </div>
          <div className='z-20 text-white text-center w-full ml-auto mr-auto absolute top-[30%]'>
            <>
              <h1 className='text-5xl  font-medium'>Unlimited films, TV programes and more.</h1>
              <h2 className='text-2xl font-normal py-5'>Watch anywhere. Cancel at any time.</h2>
              <h3 className='text-xl font-sm'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div>
                <form className='py-5'>
                  <input type="email" placeholder='Email Address' className='w-[25%] py-3 px-3 rounded-l-sm'/>
                  <button className='bg-[#e50914f3] py-3 px-6 rounded-r-sm font-medium'>GET STARTED</button>
                </form>
              </div>
            </>
          </div>
        </div>  
    </div>
  )
}

export default LoginScreen

import React from 'react'

const Signup = () => {
  return (
    <div className='w-[80%] md:w-[40%] bg-[rgba(0,0,0,0.8)] ml-auto mr-auto pb-[20%] md:pb-[5%] md:pt-[3%] rounded-md pt-[12%]'>
    <form className=''>
        <h1 className='font-medium text-2xl mb-8 md:text-3xl'>Sign In</h1>
        <input type="email" placeholder='Email' className='w-[70%] py-2.5 md:py-3 px-1.5 mb-4 rounded-sm'/>
        <input type="password" placeholder='Password' className='w-[70%] py-2.5 md:py-3 px-1.5 mb-8 rounded-sm'/>
        <button type='submit ' className='w-[70%] py-2.5 md:py-3 px-4 rounded-sm bg-[#E50914]'>Sign In</button>
        <p className='font-lg font-medium text-gray-400 md:w-[70%] mt-6'>New to Netflix? <a className='text-white cursor-pointer'>Sign up now.</a></p>
    </form>
    </div>
  )
}

export default Signup

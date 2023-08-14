import React from 'react'
import logo from '../Assets/logoP.png'
import user3 from '../Assets/user3.svg'

const Navbar = () => {
  return (
    <>
      <div className='bg-black ease-in duration-500 w-full h-[7%] md:h-[10%] z-20 lg:px-8 fixed'>
        
          <img src={logo} className='cursor-pointer w-28 md:w-32 md:py-3 py-2 fixed z-10' alt="logo" />
          <img src={user3} className='h-8 md:w-25 bg-contain right-5 top-3 md:top-6 md:pr-3  fixed z-10' alt="user" />
        
        {/* <div className='flex gap-5'>

        </div> */}


      </div>
    </>
  )
}

export default Navbar

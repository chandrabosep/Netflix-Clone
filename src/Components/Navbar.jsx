import React from 'react'
import logo from '../Assets/Logo.svg'
import user3 from '../Assets/user3.svg'

const Navbar = () => {
  return (
    <>
      <div className='flex bg-black px-6 py-4 lg:px-8 justify-between w-full'>
        
          <img src={logo} className='w-16 lg:w-20' alt="logo" />
          <img src={user3} className='h-6 lg:h-7' alt="user" />
        
        {/* <div className='flex gap-5'>

        </div> */}


      </div>
    </>
  )
}

export default Navbar

import React from 'react'
import logo from '../Assets/Logo.svg'
import user1 from '../Assets/user1.svg'

const Navbar = () => {
  return (
    <>
      <div className='flex bg-black px-6 py-4 justify-between w-full'>
        
          <img src={logo} className='w-2/12 lg:w-1/12' alt="logo" />
          <img src={user1} className='w-1/12 lg:w-10' alt="user" />
        
        {/* <div className='flex gap-5'>

        </div> */}


      </div>
    </>
  )
}

export default Navbar

import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import user from '../Assets/user3.svg'
import { userContext } from '../App'
import Plans from '../Components/Plans'
import { getAuth } from 'firebase/auth'
import { firebaseApp } from '../firebase'

const ProfileScreen = () => {
    const {contextUser} = useContext(userContext);
    const auth = getAuth(firebaseApp);

  return (
    <div className='w-full h-screen bg-black'>
        <Navbar/>
        <div className='w-[90%] md:w-[40%] ml-auto mr-auto z-10 pt-[35%] md:pt-[10%]'>
            <h3 className='text-white text-3xl md:text-4xl pb-2 md:pd-0'>Edit Profile</h3>
            <div className='bg-[#4a4a4a84] w-full h-[0.4px]'></div>
            <div className='flex gap-5 my-5 items-start'>
                <img src={user} className='contain w-14 md:w-24'/>
                <div className='text-white w-full'>
                    <div className='w-[100%] h-fit py-2 px-4 mb-3 bg-gray-500'>
                    {contextUser.email}
                    </div>
                    <p className='font-medium md:text-lg pb-2.5'>Plans (Current Plan: premium)</p>
                    <div className='bg-[#4a4a4a84] w-full h-[0.4px]'></div>
                    <div>
                        <Plans/>
                    </div>
                    <button className='w-full py-1 my-8 md:my-6 bg-[#e50914]' onClick={()=>auth.signOut()}>Sign out</button>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default ProfileScreen

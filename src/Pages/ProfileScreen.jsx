import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import user from '../Assets/user3.svg'
import { userContext } from '../App'

const ProfileScreen = () => {
    const {contextUser} = useContext(userContext);
    

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
                    <p className='text-normal mt-3 text-gray-300'>Renewal date: 16/08/2024</p>
                    <div className='w-full md:w-[95%] float-right'>
                        <div className='flex justify-between py-6 md:py-4'>
                            <div className=''>
                                <h6 className='text-sm font-medium'>Netflix Standard</h6>
                                <p className='text-sm md:text-sm font-normal'>1080p</p>
                            </div>
                            <button className='bg-[#e50914] px-4 md:px-7 md:py-0'>Subscribe</button>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div>
                                <h6 className='text-sm font-medium'>Netflix Basic</h6>
                                <p className='text-sm md:text-smfont-normal'>480p</p>
                            </div>
                            <button className='bg-[#e50914] px-4 md:px-7 md:py-0'>Subscribe</button>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div>
                                <h6 className='text-sm font-medium'>Netflix Standard</h6>
                                <p className='text-sm md:text-sm font-normal'>4k+HDR</p>
                            </div>
                            <button className='px-2 md:px-7 md:py-0 bg-gray-500'>Current Package</button>

                        </div>
                    </div>
                    <button className='w-full py-1 my-8 md:my-6 bg-[#e50914]' onClick={()=>auth.signOut()}>Sign out</button>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default ProfileScreen

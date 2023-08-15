import React, { useRef } from 'react'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {firebaseApp} from '../firebase'


const Signup = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = getAuth(firebaseApp);

  const signIn = (e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser)
    }).catch((err)=>{
      alert(err.message)
    })
  }

  const register = (e)=>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser.user)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  return (
    <div className='w-[80%] md:w-[40%] bg-[rgba(0,0,0,0.8)] ml-auto mr-auto pb-[20%] md:pb-[5%] md:pt-[3%] rounded-md pt-[12%]'>
    <form className=''>
        <h1 className='font-medium text-2xl mb-8 md:text-3xl'>Sign In</h1>
        <input type="email" ref={emailRef} placeholder='Email' className='w-[70%] text-black py-2.5 md:py-3 px-1.5 mb-4 rounded-sm'/>
        <input type="password" ref={passwordRef} placeholder='Password' className='w-[70%] text-black py-2.5 md:py-3 px-1.5 mb-8 rounded-sm'/>
        <button type='submit' className='w-[70%] py-2.5 md:py-3 px-4 rounded-sm bg-[#E50914]' onClick={signIn}>Sign In</button>
        <p className='font-lg font-medium text-gray-400 md:w-[70%] mt-6'>New to Netflix? <button className='text-white cursor-pointer' onClick={register}>Sign up now.</button></p>
    </form>
    </div>
  )
}

export default Signup

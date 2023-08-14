import React, { useEffect, useState } from 'react'
import plus from '../Assets/plus.svg'
import axios from 'axios';
import request from "../../src/request"
import './Banner.css'

const Banner = () => {
  const baseURL = 'https://api.themoviedb.org/3/';
  const [movie,setMovie] = useState([]);
  const sm = window.innerWidth <= 650

  useEffect(()=>{
    const data = async ()=>{
        try{
            const response = await axios.get(`${baseURL}${request.fetchTrending}`);
            const data = response.data.results;
            const randomIndex = Math.floor(Math.random() * data.length -1);
            const randomMovie = data[randomIndex];
            setMovie(randomMovie);
        }
        catch(e){
            console.log(e)
        }
    }
    data();
  },[])

  return (
    <>
      <header className='relative bg-contain mb-5'>
        <div className='max-w-full'>
        <img src={`https://image.tmdb.org/t/p/original${sm?movie?.poster_path:movie?.backdrop_path}`} className='pt-10 bg-contain bg-no-repeat bg-center w-full h-full  md:h-screen md:max-w-full' alt="" />

        </div>
      <div className={`left-0 right-0 bottom-0 md:w-1/3 md:top-0 md:ml-6 md:justify-center gap-3 absolute text-[#ededed] flex flex-col w-full`}>
        <h1 className='text-xl text-center md:text-left md:text-6xl md:font-bold'>
            {sm?"":movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
        
        </div>
        <div className='flex justify-center md:top-6 md:justify-normal md:gap-4 py-4'>
            <button className={`px-10 py-2  ${sm?`bg-[#ededed]`:"bg-[#242424] text-white"} bg-opacity-95 rounded md:hover:bg-[#ededed] md:hover:text-black text-lg text-black font-medium flex items-center gap-2.5`}>
              <span>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.200012L13.5 8.00001L0.5 15.8V0.200012Z" fill={sm?`black`:`white`}/>
                </svg>
              </span>
              Play</button>
            {sm?"":
            <button className={`px-10 py-2 ${sm?`bg-[#e8e8e8]`:"bg-[#242424] md:hover:bg-[#ededed] md:hover:text-black text-white"} text-lg font-medium flex items-center gap-2 rounded`}><img src={plus} className='w-6' alt="" />My List</button>}
        </div> 
        {sm?"":<p className='w-11/12 text-lg md:line-clamp-3 contents font-normal'>
          {movie?.overview}
          </p>
        }
            
      </div>
      {/* <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-100 h-1/6'></div> */}
      
      </header>


    </>
  )
}

export default Banner

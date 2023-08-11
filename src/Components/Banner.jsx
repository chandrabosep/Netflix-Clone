import React, { useEffect, useState } from 'react'
import play from '../Assets/play.svg'
import plus from '../Assets/plus.svg'
import axios from 'axios';
import request from "../../src/request"

const Banner = () => {
  const baseURL = 'https://api.themoviedb.org/3';
  const [movie,setMovie] = useState([]);

  useEffect(()=>{
    const data = async ()=>{
        try{
            const response = await axios.get(`${baseURL}/${request.fetchTrending}`);
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

  console.log(movie)


  return (
    <>
      <header className='bg-contain'>
        <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className='bg-contain absolute bg-no-repeat bg-center w-screen lg:h-[90vh]' alt="" />
      <div className="banner__contents relative text-white flex flex-col justify-evenly">
        <h1 className='text-3xl'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='flex justify-between'>
            <button className='px-12 py-2 bg-slate-100  text-lg text-black font-medium flex items-center gap-2 rounded-lg'><img src={play} className='w-6' alt="" />Play</button>
            <button className='px-12 py-2 bg-opacity-10 bg-black  backdrop-blur text-white text-lg font-medium flex items-center gap-2 rounded-lg'><img src={plus} className='w-6' alt="" />My List</button>
        </div> 
        <p className='w-11/12 text-lg line-clamp-3'>
            {movie?.overview}
        </p>
      </div>
      {/* <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-100 h-1/6'></div> */}
      
      </header>


    </>
  )
}

export default Banner

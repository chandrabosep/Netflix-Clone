import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Row.css'

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const [movies,setMovies] = useState([]);
    const baseURL = 'https://api.themoviedb.org/3/';
    const imgURL = 'https://image.tmdb.org/t/p/original';

    useState(()=>{
        const response = async ()=>{
            try{
                const request = await axios.get(`${baseURL}${fetchUrl}`);
                setMovies(request.data.results)
            }
            catch(e){
                console.log(e)
            }
        }
        response()
    },[fetchUrl])
    console.log(movies)


  return (
    <div className='px-1.5'>
      <h2 className='font-medium text-white text-3xl'> {title}</h2>
      <div className='flex overflow-y-hidden overflow-x-scroll scrollBar p-[20px]'>
        {movies.map((x) =>(
            <img src={`${imgURL}${
                isLargeRow ? x.poster_path:x.backdrop_path
            }`} className='w-5/12 md:w-[12.5%] pr-2' alt={movies.name}/>
        ))}
      </div>

    </div>
  )
}

export default Row

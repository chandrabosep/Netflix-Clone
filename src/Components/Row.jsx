import React, { useState } from 'react'
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
    <div className=''>
      <h2 className='font-medium text-white ml-2 md:ml-2.5 text-xl md:text-3xl'> {title}</h2>
      <div className={`flex overflow-x-scroll  row_scroll py-[25px] pl-[10px] md:py-[30px] md:pl-[10px] md:pr-[20px]`}> 
        {movies.map((x) =>(
            <img src={`${imgURL}${
                isLargeRow?x.poster_path:x.backdrop_path
            }`} key={movies.id}
            className={`w-5/12 ease-in-out duration-500 flex-row rounded-sm mr-2 ${ isLargeRow?'md:hover:scale-[1.2]':'mr-2  md:hover:scale-[1.4] '}
            md:w-[12%]`} alt={movies.name}/>
        ))}
      </div>
    </div>
  )
}

export default Row

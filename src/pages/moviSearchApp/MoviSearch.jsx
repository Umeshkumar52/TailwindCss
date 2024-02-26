import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard';
import { toast } from 'react-toastify';

export default function MoviSearch() {
  const [movies,setMovies]=useState([])
    async function fetchFata(){
      try {
      const resp = await fetch('https://dummyapi.online/api/movies');
      setMovies(await resp.json())
    } catch (error) {
        toast.error("No Internet Connection")
    }
    }
    useEffect(()=>{
        fetchFata()
    },[])
  return (
    <div className='w-full bg-black text-white flex flex-col items-center pt-4 gap-4'>
     <div className='w-full flex flex-col gap-2 justify-center items-center'>
    <h1 className='text-2xl font-bold'>Movie List</h1>
    <input placeholder='Search movies...' className='w-[80%] border-2 text-black py-1 px-2'/>
     </div>
     <div className='flex flex-wrap justify-center px-2 gap-2'>
      {
        movies.map((Element)=>{return <MoviesCard key={Element.id} data={Element}/>})
      }
     </div>
    </div>
  )
}

import React from 'react'

export default function MoviesCard({data}) {
    console.log(data);
  return (
    <div className='w-[18rem] flex flex-col gap-2 items-center px-3 py-4 text-white rounded-lg bg-[#241949]'>
     <div className='h-[11rem]'>
     <img className='rounded-md ' src={data.image}/>
     </div>
      <h1>{data.movie}</h1>
      <h3><span className='font-semibold text-slate-300'>Rating: </span>{data.rating}</h3>
      <button className='bg-[#f60404] rounded-lg font-semibold py-2 px-3 w-full '>Watch Now</button>
    </div>
  )
}

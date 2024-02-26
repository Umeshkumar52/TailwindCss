import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function BlogsCard(data) {
    const navigate=useNavigate()
  return (
    <div className='w-[20rem] p-2 rounded-md border-2 border-slate-400 flex flex-col gap-3'>
      <img className='rounded-md' src={data.data.photo_url}/>
      <div className=' text-white flex flex-col'>
        <h1><span className='font-semibold  text-black'>Title:</span> <span className='text-slate-700 '>{data.data.title}</span></h1>
        <h2><span className='font-semibold text-black '>category:</span> <span className=' text-slate-700 '>{data.data.category}</span></h2>
        <h3><span className='font-semibold  text-black'>description:</span> <span className=' text-slate-700 '>{data.data.description}</span></h3>
      </div>
     
      <button onClick={()=>navigate('/readBlog',{state:data})} className='w-full rounded-md py-1 font-semibold bg-red-300 text-red-600'>Read</button>
    </div>
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ReadBlog() {
    const {state}=useLocation()
    console.log(state);
  return (
    <div className='flex flex-col gap-4 px-4 py-4'>
      <div className=' bg-[#af2cb9] rounded-md px-4 py-2 flex justify-center items-center'>
      <div className='w-full  text-white '>
        <h1 className='font-semibold'>{state.data.title}</h1> 
        <h2 className='text-sm text-slate-300'>{state.data.description}</h2>
      </div>
      <img className='rounded-lg h-[10rem]' src={state.data.photo_url}/>
      </div>
      <div>
        <p>
            {state.data.content_text}
        </p>
        {/* <p>{state.data.content_html}</p> */}
      </div>
    </div>
  )
}

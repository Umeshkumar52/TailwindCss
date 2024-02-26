import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'

export default function BirdDescription() {
    const {state}=useLocation()
    console.log(state);
  return (
    <div className='w-full min-h-screen bg-[#0e035e]'>
      <div className='flex flex-col px-4 py-2 bg-[#0e035e] lg:flex-row gap-2 items-center'>
        <img className='h-[20rem] rounded-md border-4 border-[#223d80]' src={state.url}/>
        <div className='flex flex-col gap-4 px-4 '>
            <h1 className='text-white text-4xl font-bold'>{state.title}</h1>
            <h2 className='text-slate-300 text-xl font-semibold'>{state.description}</h2>
        </div>
      </div>
    </div>
  )
}

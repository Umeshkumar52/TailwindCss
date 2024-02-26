import React, { useState } from 'react'

export default function ReactWalkThroughP_3() {
  const [counter,setCounter]=useState(0)
 
 
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[30%] flex flex-col items-center rounded-lg gap-6 bg-red-500 px-6 py-16'>
         <h1>{counter}</h1>
         <div className='flex gap-10'>
          <button className='bg-white text-black py-1 rounded-md px-3' onClick={()=>setCounter(counter-1)}>dec</button>
          <button className='bg-white text-black py-1 rounded-md px-3' onClick={()=>setCounter(counter+1)}>inc</button>
         </div>
      </div>
    </div>
  )
}

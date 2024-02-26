import React, { useState } from 'react'
import TodoCard from './TodoCard'
import { IoCloseSharp } from "react-icons/io5";
export default function Todo() {
    const todos=[
        {   id:0,
            title:"Learn useRef",
            status:"Pending",
       },
       {
        id:1,
        title:"Go to Gym",
        status:"Pending",
   },
   {
    id:2,
    title:"Build todo App",
    status:"Completed",
}
    ]
  return (
    <div className='w-full h-screen  bg-[#661b45]'>
      <div className='flex flex-col justify-center items-center pt-6 gap-3'>
        <div className='relative w-[50%] py-3 rounded-md bg-white px-2 flex justify-between'>
            <h1>Learn useRef</h1>
            <button className='bg-[#661b45] px-12 rounded-md py-1 font-semibold'>Add</button>
        </div>
       <div className='flex flex-wrap gap-4'>
        {
            todos.map((Element)=>{return <TodoCard key={Element.id} data={Element}/>})
        }
     </div>
      </div>
    </div>
  )
}

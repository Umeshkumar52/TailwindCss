import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
export default function Home() {
  const [toggleHandler,setToggleHandler]=useState(false)
  const [part2Handler,setPart2Handler]=useState(false)
  return (
    <div className='relative'>
        <div className='w-full text-indigo-800 font-semibold flex justify-evenly gap-6 py-6 bg-slate-200'>
        <Link to='/tailwindCss'>Tailwind CSS Assignment</Link>
        <Link className='relative' onClick={()=>setToggleHandler(true)}>Milestone Exam-2</Link>
       
        <Link to='/assignment3'>React WalkThrough</Link>
        <Link className='relative' onClick={()=>setPart2Handler(true)} >React WalkThrough part-2</Link>
         {(part2Handler)?
          <div className='fixed right-[16rem] top-[5rem] text-white flex flex-col gap-2 py-4 px-2 bg-slate-800 rounded-md '>
              <div className='flex justify-end'> <IoCloseSharp onClick={()=>setPart2Handler(false)} /></div>
             <Link to='/assignment4'>Instagram App</Link>
            <Link to='/assignment5'>Increment App</Link>
          </div>
          :""
         }
        <Link to='/gallary'>Gallary App</Link>
        </div>
        {(toggleHandler)?
        <div className='fixed left-20 text-white flex flex-col gap-2 py-2 px-4 bg-slate-800 rounded-md '>
        <div className='flex justify-end'> <IoCloseSharp onClick={()=>setToggleHandler(false)} /></div>
         <Link to='/todo'>Todo App</Link>
         <Link to='/movies'>Movies Search App</Link>
         <Link to='/pwSkillsBlog'>PwSkillsBlogs App</Link>
        </div> 
        :""
        }
    </div>
  )
}

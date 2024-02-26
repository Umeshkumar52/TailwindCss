import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
export default function Home() {
  const [toggleHandler,setToggleHandler]=useState(false)
  return (
    <div className='relative'>
        <div className='w-full text-indigo-800 font-semibold flex gap-6 py-6 bg-slate-200'>
        <Link to='/tailwindCss'>Tailwind CSS Assignment</Link>
        <Link className='relative' onClick={()=>setToggleHandler(true)}>Milestone Exam-2</Link>
       
        <Link to='/assignment3'>React WalkThrough</Link>
        <Link to='/assignment4'>React WalkThrough part-2</Link>
        <Link to='/assignment5'>React WalkThrough part-3</Link>
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

import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
export default function AddBlog({toggle}) {
    function handlerData(){
        toggle(false)
    }
  return (
      <div className='fixed w-[50%] ml-[25%] flex flex-col bg-slate-300 rounded-lg gap-4 py-4 px-6'>
        <p onClick={handlerData} className='text-black flex justify-end cursor-pointer '><IoCloseSharp/></p>
        <form className=' relative flex flex-col gap-3'>
          <input type='text' className='border-2 border-slate-500 px-2 py-1 ' placeholder='Enter blog post URl:'/>
          <input type='text' className='border-2 border-slate-500 px-2 py-1 ' placeholder='Enter blog tittle:'/>
            <input type='text' className='border-2 border-slate-500 px-2 py-1 ' placeholder='Enter blog description:'/>
            <textarea placeholder='Write...' className='border-2 border-slate-500 px-2 py-1'/>
            <button className='bg-indigo-500 py-1 font-semibold'>Submit</button>
        </form>
      </div>
  )
}

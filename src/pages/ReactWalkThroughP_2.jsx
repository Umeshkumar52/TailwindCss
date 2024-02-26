import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function ReactWalkThroughP_2() {
  const [toggle,setToggle]=useState(false)
  const toggleFalse=(event)=>{
    event.preventDefault()
    setToggle(false)
  }
  const toggleTrue=(event)=>{
    event.preventDefault()
    setToggle(true)
  }
  return (
    <div className='flex justify-center items-center py-4 w-full h-screen'>
      <div className=' w-[30%] px-3 py-10 rounded gap-6 border-2 border-slate-400 flex flex-col justify-center items-center'>
        <h1 className='text-black text-3xl font-mono '>Instagram</h1>
        <form className='w-full flex flex-col gap-1'>
        {(toggle)?
        <div className='w-full flex flex-col gap-1'>
                   <input className='px-2 py-1 text-sm  border-2 border-t-slate-600 border-l-slate-500' type='text' placeholder='Mobile Number or Email'/>  
                   <input className='px-2 py-1 text-sm  border-2 border-t-slate-600 border-l-slate-500' type='text' placeholder='Full Name'/>  
        </div>
        :""
        }
         <input className='px-2 py-1 text-sm  border-2 border-t-slate-600 border-l-slate-500' type='text' placeholder='Phone Number, userName, or email'/>             
          <input className='px-2 py-1 text-sm border-2 border-slate-600 border-r-slate-200 ' type='text' placeholder='password'/>
          {(toggle)?
          <button className='bg-blue-500 py-1 rounded text-white'>Sign up</button>
          :<button className='bg-blue-500 py-1 rounded text-white'>Sign in</button>
          }
          </form>
          {(toggle)?
           <p>have an account?<span className='text-blue-400'><Link  onClick={toggleFalse}>Login</Link></span></p>
           :<p>Don't have account? <span className='text-blue-400'><Link onClick={toggleTrue}>Sign up</Link></span></p>
          }
      </div>
    </div>
  )
}

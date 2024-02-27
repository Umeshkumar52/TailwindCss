import React from 'react'
export default function TodoCard(Element) {
    console.log(Element);
  return (
    <div className='flex flex-col gap-4 px-2 rounded-md w-[14rem] py-6 bg-black text-white'>
      <h1 className='font-semibold'>{Element.data.id}. <span>{Element.data.title}</span></h1>
      <h2>Status: <span>{Element.data.status}</span></h2>
      <div className='flex flex-col gap-2'>
        <button className=' bg-indigo-900 py-1 px-6'>Update Status</button>
        <button className=' bg-indigo-900 py-1 px-6'>Remove</button>
      </div>
    </div>
  )
}
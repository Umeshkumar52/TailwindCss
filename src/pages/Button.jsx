import React from 'react'

export default function Button({text,onClick}) {
  return (
    <div>
      <button className='bg-indigo-600 px-4 py-2 font-semibold' onClick={onClick}>{text}</button>
    </div>
  )
}

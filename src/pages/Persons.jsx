import React from 'react'
import { useLocation } from 'react-router-dom'
export default function persons({name,age}) {
  console.log("calling");
  return (
    <div className=' text-white font-extrabold'>
       <h1>Hey Everyone my name is {name} amd i am {age} years old</h1>
    </div>
  )
}

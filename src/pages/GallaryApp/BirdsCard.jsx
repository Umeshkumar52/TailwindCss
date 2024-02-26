import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function BirdsCard({data}) {
    const navigate=useNavigate()
  return (
    <div onClick={()=>navigate('/description',{state:data})} className='w-[18rem] h-[14rem] rounded-md'>
      <img className=' rounded-md' src={data.url}/>
    </div>
  )
}

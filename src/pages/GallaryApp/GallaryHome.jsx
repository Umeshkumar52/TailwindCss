import React, { useEffect, useState } from 'react'
import BirdsCard from './BirdsCard'

export default function GallaryHome() {
    const [birds,setBirds]=useState([])
    useEffect(()=>{
        async function data(){
            // c
            const response= await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100")
       setBirds((await response.json()).photos)
    }
    data()
    },[])
  return (
    <div className='flex flex-col gap-4 items-center pt-2'>
        <h1 className='relative text-black font-bold text-3xl'>Beautifull Birds Gallary</h1>
        <hr className='relative border-2 w-[40%] border-red-500'/>
    <div className='w-full py-10 flex flex-wrap gap-2 justify-center'>
     {
        birds.map((Element)=>{
            return <BirdsCard key={Element.id} data={Element}/>
        })
     }
    </div>
    </div>
  )
}

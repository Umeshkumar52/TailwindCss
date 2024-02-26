import React, { useEffect } from 'react'
import Persons from './Persons'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import List from './List'
export default function ReactWalkThrough() {
  const navigate=useNavigate()
  const text="calling button component"
  const tittle="Header component tittle"
  let list=["suresh","harendra","Surendra","Harendra","Pratap"]
  function button(){
   window.confirm("This is called from Button component but this is a function of reactWalk through component that is use as a props")
  }
  return (
    <div className='w-fill pb-10 h-[100%] flex flex-col items-center gap-4 pt-4 bg-black text-white'>
      <h className='text-red-500'>person component calling</h>
       <Persons  name='Umesh Kumar' age="20" />
    <h1 className='text-red-500'>Button Component calling</h1>
     <Button text={text} onClick={button}/>
    <h1 className='text-red-500'>Header component calling</h1>
     <Header tittle={tittle}/>
     <h1 className='text-red-500'>List Component Calling</h1>
     {list.map((Element,index)=><List key={index} sn={index} list={Element}/>)}
    </div>
  )
}

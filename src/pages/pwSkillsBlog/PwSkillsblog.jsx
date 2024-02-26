import React, { useEffect, useState } from 'react'
import BlogsCard from './BlogsCard'
import { toast,ToastContainer } from 'react-toastify'
import { UNSAFE_DataRouterStateContext } from 'react-router-dom'
import AddBlog from './AddBlog'
export default function PwSkillsblog() {
    const [blog,setBlogs]=useState([])
    const [blogHanler,setblogHandler]=useState(false)
   async function data(){
    try {
    const response=await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30")
    const data=await response.json()
     setBlogs(data.blogs)
    } catch (error) {
      toast.error("No internet connection")
    }
    }
    useEffect(()=>{
        data()
    },[])
    function dataHandler(data){
      setblogHandler(data)
    }
   
  return (
    <div className='relative flex flex-col gap-3 pt-2'>
       {(blogHanler)?
       <AddBlog toggle={dataHandler}/>
       :""
       }
       <div className='flex justify-between px-6'>
    <h1 className='text-3xl text-black font-bold '>PwSkills Blogs</h1>
    <h1 title='Add blog' className='text-3xl font-bold cursor-pointer' onClick={()=>setblogHandler(true)}>+</h1>
    </div>
    <div className='w-full flex flex-wrap gap-2 justify-center py-6'>
      {
        blog.map((Element)=>{return <BlogsCard key={Element.id} data={Element}  /> })
      }
      <ToastContainer/>
    </div>
    </div>
  )
}

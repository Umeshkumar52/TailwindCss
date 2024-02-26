import React from 'react'

export default function Tailwind() {
  return (
    <div className='m-4 flex flex-col gap-4'>
     <div className='flex flex-col items-center gap-2 border-2 border-black p-2'>
      <hi className='text-black text-3xl font-semibold'>The Real Leadership of Steve Jobs </hi>
      <p className='text-slate-200'>
        Six month's after jobs's death,the auther of his best selling biography indentifies the practices thet every CEO can try to emulate <span className='text-black'>by walter lasaacson</span> 
      </p>
     </div>
     <div className='flex flex-col items-center gap-2 border-2 border-black p-2'>
      <hi className='text-black text-3xl font-semibold'>The Real Leadership of Steve Jobs </hi>
      <p className='text-slate-200'>
        Six month's after jobs's death,the auther of his best selling biography indentifies the practices thet every CEO can try to emulate <span className='text-black'>by walter lasaacson</span> 
      </p>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9ehYnPoeUKwnQUe3dRPm-G6zrmWk1WqLOA&usqp=CAU' className='rounded-xl h-[12rem] w-[20rem]'/>
     </div>
     <div className='flex flex-col items-center gap-2 border-2 border-black p-2'>
      <hi className='text-black text-3xl font-semibold'>The Real Leadership of Steve Jobs </hi>
      <p className='text-slate-200'>
        Six month's after jobs's death,the auther of his best selling biography indentifies the practices thet every CEO can try to emulate <span className='text-black'>by walter lasaacson</span> 
      </p>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9ehYnPoeUKwnQUe3dRPm-G6zrmWk1WqLOA&usqp=CAU' className='rounded-xl h-[12rem] w-[20rem]'/>
     <p className='mx-16'><span className='text-black font-bold'>His saga is the entrepreneurial creation myth writ large:</span> Steve Jobs cofounded Apple in his parents' garage in 1976, was ousted in 1985, returned to rescue it from near bankruptcy in 1997, and by the time he died, in October 2011, had built it into the world's most valuable company.</p>
     </div>
     <div className='flex items-center flex-col gap-2 px-4 border-2 border-black p-2'>
     <div className='flex px-28 items-center gap-2'>
       <div className='relative h-[100px] border-2 border-black'></div>
       <p className='relative'>
        "The people who are crazy enough to think they can change the world are the ones who do."
        Apple's "Think Differnt " commercial,1997.
       </p>
     </div>
    <div className='flex gap-2'>
      <p>
      Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone.
      </p>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFAsvvTZeWk2LQy5jLnq3Y53fZBv8qZXKXg&usqp=CAU'/>
    </div>
     </div>
    
     <div className='flex items-center justify-center p-8 border-2 border-black'>
      <div className='flex items-center gap-4 w-[70%]'>
     <div className='flex justify-center items-center w-20 h-20'>
     <div className='w-12 h-12 flex items-center justify-center rounded-full bg-green-500'>
        <h1 className='text-black'>M</h1>
      </div>
     </div>
      <p className='font-mono font-semibold'>
      Walter isaacon , The  CEO of Aspen Institute, is the auther of steve jobs and of biographies Hennry kissinger,
      Benjamin Franklin, and Albert Einstin.
      </p>
      </div>
      </div>
       
      <div className='flex flex-col gap-4 items-center justify-center p-8 border-2 border-black bg-black'>
       <hi className ='text-white font-semibold text-lg'>Subscribe to our NewLetters</hi>
       <input placeholder='Enter your email Id' className='w-full mx-2 rounded px-2 py-1'/>
       <button className='bg-green-500 rounded-lg px-4 py-1 font-semibold'>Subscribe Now</button>
        </div>
    </div>
  )
}

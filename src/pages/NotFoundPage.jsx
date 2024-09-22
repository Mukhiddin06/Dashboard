import React from 'react'
import NotFound from '../assets/images/not-found-img.jpg'

function NotFoundPage() {
  return (
    <>
    <h1 className='m-10 text-center text-[30px]'>Not Found</h1>
    <div className='flex justify-center items-center mx-auto border-[2px] rounded-lg border-slate-400 h-[500px] w-[1000px]'>
      <img src={NotFound} alt='Not Found' className='object-contain' width={500} height={300} />
    </div>
    </>
  )
}

export default NotFoundPage
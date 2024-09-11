import React from 'react'

function Footer() {
  return (
    <div className="footer-wrapper w-full h-screen flex gap-5 p-20">
       <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="heading">
          <h1 className='text-6xl font-bold uppercase leading-none'>
            Eye-
          </h1>
          <h1 className='text-6xl font-bold uppercase leading-none'>
            Opening
          </h1>
          </div>
       </div>
       <div className="w-1/2">
        <h1 className="text-6xl font-bold uppercase leading-none ">
            Presentations
        </h1>
        <div className="dets mt-10">
            <a href="#" className="block font-xl font-normal">Facebook</a>
            <a href="#" className="block font-xl font-normal">Instagram</a>
            <a href="#" className="block font-xl font-normal">Twitter</a>
        </div>
       </div>
    </div>
  )
}

export default Footer
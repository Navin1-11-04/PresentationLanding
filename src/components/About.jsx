import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-0.3" data-scroll-section className="about-wrapper w-full p-20 bg-[#cdea68] rounded-tl-2xl rounded-tr-2xl">
        <h1 className="font-family: ui-sans-serif,system-ui text-5xl font-normal leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt obcaecati nemo, excepturi eos porro ullam beatae dolorem. Molestiae, repellat.</h1>
        <div className="w-full flex gap-5 border-t-[1px] border-black pt-10 mt-20">
            <div className="w-1/2">
              <h1  className='text-4xl'>Our Approach :</h1>
              <button className="flex gap-10 uppercase items-center justify-center px-5 py-3 bg-zinc-900 rounded-full text-white text-sm mt-5">
                Read More
                <div className="w-1 h-1 bg-white rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-red-400 rounded-2xl">

            </div>
        </div>
    </div>
  )
}

export default About
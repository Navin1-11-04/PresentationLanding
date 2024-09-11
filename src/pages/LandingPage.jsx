import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { easeInOut, motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className='w-full h-screen pt-1'>
        <div className="text-str mt-32 px-20">
            {["we create","eye opening","presentations"].map((item,index)=>(
             <div className="mask" key={index}>
                <div className="w-fit flex items-last items-baseline">
                    {index == 1 && (<motion.div initial={{width:0}} animate={{width:"100px"}} transition={{duration:0.6,easeInOut}} className='md:h-[6vw] lg:h-[9.5vh] sm:h-[6vw] xs:h-[6vw] bg-red-500'></motion.div>)}
                     <h1 className='uppercase tracking-tighter font-medium main-txt h-fit'>{item}</h1>
                </div>
             </div>
            ))}
        </div>
        <div className="border-t-[2px] mt-28 flex justify-between items-center py-10 px-20">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center justify-center gap-2">
                <div className="px-5 py-2 border-[2px] rounded-full font-light text-sm uppercase">Start The Project</div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px]">
                    <span className="rotate-[45deg]">
                    <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
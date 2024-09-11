import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".15" data-scroll-section className="marquee-wrapper w-full py-20 rounded-tl-2xl rounded-tr-2xl h-[70vh] text-white bg-[#004d43] flex items-center justify-center">
      <div className="text border-y-2 border-white flex whitespace-nowrap gap-10 overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[35vh] leading-none tracking-[-1vh] font-semibold uppercase'>welcome to piclore</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[35vh] leading-none tracking-[-1vh] font-semibold uppercase'>welcome to piclore</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[35vh] leading-none tracking-[-1vh] font-semibold uppercase'>welcome to piclore</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
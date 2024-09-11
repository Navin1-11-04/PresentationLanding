import React from 'react'
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="fixed z-[999] nav-wrapper w-full px-20 py-5 flex justify-between item-center backdrop-blur-xl">
        <div className="logo">
           PICLORE
        </div>
        <div className="links flex gap-10">
            {["Services","Our work","About Us","contact"].map((item,index)=>(
                <a key={index} className={`text-sm capitalize font-medium font-family: ui-sans-serif,system-ui ${index == 3 && "ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar
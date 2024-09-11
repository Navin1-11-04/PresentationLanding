import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Play from './components/Play';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Play />
        <Footer />
    </div>
  )
}

export default App;
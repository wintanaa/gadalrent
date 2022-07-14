import React from 'react'
import Features from '../components/home/Features'
import Footer from '../components/common/Footer'
import NavBar from '../components/common/NavBar'
import Service from '../components/home/Service'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Subscribe from '../components/home/Subscribe'

function Home() {
  return (
    <div  >
        <NavBar isMenuVissible={false}/>
        <Hero/>
        <About  />
        <Service/>
        <Features/>
        <div className='p-6'>
        <Subscribe/>
        </div>
        
        <hr/>
        <Footer/>
    </div>
  )
}

export default Home
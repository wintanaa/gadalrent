import React ,{useState}from 'react'
import Footer from '../components/common/Footer'
import NavBar from '../components/common/NavBar'
import Step1 from '../components/Estimation/Step1'


function Estimation() {
  return (
    <div >
          <NavBar isMenuVissible={true}/>
     <Step1/>
      
        <hr/>
        <Footer/>
    </div>
  )
}

export default Estimation
import React from 'react'
import Footer from '../components/common/Footer'
import NavBar from '../components/common/NavBar'
import Categories from '../components/Detail/Categories'
import DetailHero from '../components/Detail/DetailHero'
import LatestProperties from '../components/Detail/LatestProperties'
import Subscribe from '../components/home/Subscribe'

function Detail() {
  return (
    <div>
        <NavBar isMenuVissible={true}/>
        <DetailHero/>
        <Categories/>
        <LatestProperties/>
        <div className='p-6'>
        <Subscribe/>
        </div>
        <hr/>
        <Footer/>
    </div>
  )
}

export default Detail
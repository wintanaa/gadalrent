import React from 'react'
import CCard from './CCard'
import { ImHome} from 'react-icons/im'
function Categories() {
  return (
    <div className='container mb-20'>
        <span className=' text-3xl md:text-4xl antialiased  font-bold leading-4 '>Categories</span>
        <div className="pt-1 pb-4 mb-3">
    <div className="md:w-24 w-20 border-t-8 border-blue-500"></div>
</div>

<div className="grid lg:grid-cols-6 md:grid-cols-4 gap-4 px-3 grid-cols-2 ">
    <CCard Icon={<ImHome className='w-20 h-16 ' /> } IconName="elementum"/>
    <CCard Icon={<ImHome className='w-20 h-16 ' /> } IconName="feugiat"/>
    <CCard Icon={<ImHome className='w-20 h-16 ' /> } IconName="tempor"/>
    <CCard Icon={<ImHome className='w-20 h-16 ' /> } IconName="ullamcorpe"/>
</div>
        
    </div>
  )
}

export default Categories
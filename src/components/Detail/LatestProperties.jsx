import React from 'react'
import PCard from './PCard'
import {Link } from 'react-router-dom'
function LatestProperties() {
  return (
   
    <div className='container mb-16'>
    <span className=' text-3xl md:text-4xl antialiased  font-bold leading-4 '>Latest Properties</span>
    <div className="pt-1 pb-4 mb-3">
    <div className="md:w-24 w-20 border-t-8 border-blue-500"></div>
</div>

<div className="grid lg:grid-cols-3 gap-y-5 md:grid-cols-2 gap-4 px-3 grid-cols-1 ">
    <Link to="/propertydetail"><PCard isFreeContact={false} cardTitle ="Duis at nisi quis sapien" money="$2500/mo" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." /></Link>
    <PCard isFreeContact={true} cardTitle ="Praesent effciturvehi" money="$500/mo" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />

    <PCard isFreeContact={false} cardTitle ="Duis at nisi quis sapien" money="$2500/mo" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
    <PCard isFreeContact={true} cardTitle ="Praesent effciturvehi" money="$500/mo" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />

    <PCard isFreeContact={false} cardTitle ="Duis at nisi quis sapien" money="$2500/mo" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
    <PCard isFreeContact={true} cardTitle ="Praesent effciturvehi" money="$500/mo" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
   
  
   
</div>
</div>
  )
}

export default LatestProperties
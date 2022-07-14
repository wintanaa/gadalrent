import React from 'react'
import { BiSearch } from 'react-icons/bi'
function DetailHero() {
  return (
    <div className=" w-full h-[70vh] bg-gray-500  bg-no-repeat  sub2  mb-10" >
    <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center ">
      <div className=" m-0  p-0 mt-14  text-3xl md:text-5xl text-white  antialiased  font-bold  text-center">Lorem ipsum dolor sit amet</div>
     
      <div className=" mt-10  flex    justify-center">
       
      <label className="relative block md:w-full  ">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <BiSearch className="md:h-8 md:w-15 h-8 w-15 fill-slate-300" viewBox="0 0 20 20"/>
  </span>
  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-300 focus:ring-blue-300 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
  </div>
    </div>
  </div>
  )
}

export default DetailHero
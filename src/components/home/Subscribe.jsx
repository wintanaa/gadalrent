import React from 'react'
import {BiLike} from 'react-icons/bi'

function Subscribe() {
  return (
    <div className="container w-full h-[60vh] bg-gray-500  bg-no-repeat p-6 sub rounded-xl mb-10" >
  <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
    <div className=" m-0  p-0  text-3xl md:text-5xl text-white  antialiased  font-bold  text-center">Morbi justo nisi, ultrices</div>
    <div className=" m-0  p-0  text-3xl md:text-5xl  text-white  antialiased font-bold  text-center">Vitae auctor quis</div>
    <div className=" mt-8  flex   justify-center">
     
      <button className=" p-2 h-12  w-2/4  bg-gray-100 flex justify-around rounded-lg hover:text-white hover:bg-red-600 text-black " type="button">
        <span className='md:text-2xl sm:text-xl font-bold'>Subscribe</span>
        <BiLike className='w-8 h-8 -ml-12'/>
        </button>
    </div>
  </div>
</div>
  )
}

export default Subscribe
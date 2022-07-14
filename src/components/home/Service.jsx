import React from 'react'
import serviceImage from '../../assets/service.jpg'

function Service() {
  return (
    <section className="relative p-4 ">
    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={serviceImage} alt="" />
      </div>
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl font-bold text-center lg:text-left mb-2">
        Nam sed purus vel 

        </h2>
        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl font-bold text-center lg:text-left mb-6">
       orci iaculis

        </h2>
        
        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6 text-gray-400">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
          load instantly. Try it for free.  A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
          load instantly. Try it for free.
        </p>
      
      </div>
     
    
    </div>
  
   
  </section>
  )
}

export default Service
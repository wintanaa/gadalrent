import React from 'react'
import Card from '../common/Card'
import { TruckIcon } from '@heroicons/react/solid'
import { GiBulldozer } from 'react-icons/gi'
import { ImHome} from 'react-icons/im'
import { Link } from 'react-router-dom'
function Hero() {
  return (
 
    <div className="bg-gray-100 dark:bg-transparent " >
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">
                        Build Your Business With
                            <span className="text-blue-500"> Gadal Rent</span>
                            
                        </h1>
                    </div>
                    <div className="md:flex justify-center   items-center gap-10 grid-cols-2 ">

                    
    <Card  Icon={<GiBulldozer className='mb-3 w-60 h-24 m-5 ' />} IconName = "Machinery"/>
    <Card  Icon={<TruckIcon className='mb-3 w-60 h-24 m-5  ' />} IconName = "Vehicle"/>
    
    <Link to="/detail"><Card Icon={<ImHome className='mb-3 w-60 h-24 m-5 ' />} IconName = "Property"/>
   </Link>
                   </div>
                </div>
            </div>



  )
}

export default Hero

 

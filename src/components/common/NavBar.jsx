import React, { useState } from "react";
import { MenuIcon, XIcon,  } from "@heroicons/react/outline";
import { UserCircleIcon} from '@heroicons/react/solid'
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import {Link,useLocation} from 'react-router-dom'

function NavBar(props) {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const {pathname} = useLocation();

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 sticky top-0 z-30 shadow-lg">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Gadal Rent Logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Gadal Rent
          </span>
        </a>

        <div  className={props.isMenuVissible?"hidden w-full md:block md:w-auto ":"hidden"}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/property"                 
                className={pathname=="/property"? "block py-2 pr-4 pl-3 text-blue-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-base font-bold md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700":"block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-base font-bold md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
              >
                Categories
              </Link>
           
            </li>
            <li>
            <Link to="/estimation"  
               className={pathname=="/estimation"? "block py-2 pr-4 pl-3 text-blue-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-base font-bold md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700":"block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-base font-bold md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
               >
                Estimation
              </Link>
            </li>
            <li>
              <a
                
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-base font-bold md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-base font-bold md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Add Property
              </a>
            </li>

            <li>
          <a href="https://t.me/s/gadalinfo5" > <FaTelegramPlane className="w-8 h-8 ml-12 cursor-pointer hover:text-blue-500" /></a> 
          
            </li>
            <li>
          
            <Link to="/userprofile">  <UserCircleIcon className="w-8  cursor-pointer hover:text-blue-500 " /> </Link>
            </li>
          </ul>
        </div>

        <div className={!props.isMenuVissible?"hidden md:flex pr-0 justify-evenly":"hidden"}>
        <a href="https://t.me/s/gadalinfo5" >   <FaTelegramPlane className="w-8 h-8 mr-4 hover:text-blue-500 cursor-pointer"  /></a>
        <Link to="/userprofile"> <UserCircleIcon className="w-8 hover:text-blue-500 cursor-pointer" /> </Link>
                    
        </div>
     
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute  bg-white w-full px-8 my-4 md:hidden"}>
        <li className= {props.isMenuVissible?"":"hidden"}>
          <Link to="/property"  
            
            className= {pathname=="/property"?" border-gray-500 w-full block py-2 pr-4 pl-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white mt-2":"mt-2cursor-pointer w-full block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
        
          >
            Categories
          </Link>
        </li>
        <li className= {props.isMenuVissible?"":"hidden"}>
        <Link to="/estimation"  
            
            className= {pathname=="/estimation"?" border-gray-500 w-full block py-2 pr-4 pl-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white":"cursor-pointer w-full block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}  >
            Estimate
          </Link>
        </li>
        <li className= {props.isMenuVissible?"":"hidden"}>
          <a
            
            className="cursor-pointer w-full block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Blog
          </a>
        </li >
        <li className= {props.isMenuVissible?"":"hidden"}>
          <a
            
            className="cursor-pointer w-full block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Add Property
          </a>
        </li>

        <div className="flex justify-end m-5 ">
        <a href="https://t.me/s/gadalinfo5" ><FaTelegramPlane className="w-8 h-8 mr-4 hover:text-blue-500 cursor-pointer" /></a>  
        <Link to="/userprofile">  <UserCircleIcon className="w-8 hover:text-blue-500 cursor-pointer" /> </Link> 
          
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;

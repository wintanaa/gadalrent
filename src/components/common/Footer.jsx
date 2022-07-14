import React from 'react'
import  logo from '../../assets/logo2.png'
import { FaFacebook,FaLinkedin,FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 ">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src={logo} className="mr-3 h-8" alt="FlowBite Logo" />
                <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Gadal Rent</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-32 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                    </li>
                    <li  className="mb-4">
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                    <li  className="mb-4">
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                    <li  className="mb-4">
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                   
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-black dark:text-black">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                
                </ul>
            </div>
            
        </div>
        <div className="flex mt-4 md:mr-8 space-x-6 sm:justify-center sm:mt-0 items-end">
            <a href="#" className="text-gray-900 hover:text-gray-500 dark:hover:text-white">
                <FaFacebook />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-500 dark:hover:text-white">
                <FaLinkedin/>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-500 dark:hover:text-white">
              <FaTwitter/>
            </a>
           
        </div>
    </div>
    <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-center">
        <span className="text-xs md:text-sm font-bold text-black sm:text-center dark:text-black">© 2022 <a href="https://flowbite.com/" className="hover:underline">Gadal Technologies Rent™</a>. All Rights Reserved.
        </span>
        
    </div>
</footer>
  )
}

export default Footer
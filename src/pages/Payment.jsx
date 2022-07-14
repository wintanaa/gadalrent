import React, { useState } from "react";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import { AiFillCaretDown } from "react-icons/ai";
function Payment() {
  const [buttonClick, setButtonClick] = useState(false);
  const ButtonClick = ()=>setButtonClick(!buttonClick)

  return (
    <div>
      <NavBar isMenuVissible={true} />
      <div className="container grid place-items-center mt-16 mb-16">
        <h1 className="md:text-4xl text-xl font-bold">
         {!buttonClick?"Lorem ipsum dolor sit amet":"Lorem ipsum dolor "} 
        </h1>
        <div className={buttonClick?" mt-8 border-gray-500 border-solid border-2 mx-2  md:w-[600px] rounded-xl p-10 grid place-items-center":"hidden"}>
         <span className="">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took
          
         </span>
        </div>

        <div className={!buttonClick?" mt-8 border-gray-500 border-solid border-2  md:w-[600px] rounded-xl p-10 grid place-items-center":"hidden"}>
          <h1 className="text-2xl font-semibold">Select Bank</h1>
          <div className="relative mt-4">
            <select className="block appearance-none md:w-[400px] bg-gray-200 border font-semibold border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Comertial Bank Of Ethiopia </option>
              <option>Dashn Bank</option>
              <option>United Bank</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <AiFillCaretDown />
            </div>
          </div>
        </div>
        <button onClick={ButtonClick} className={!buttonClick?"mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded":"hidden"}>
          Lorem ipsum
        </button>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Payment;

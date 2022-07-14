import React,{useState} from "react";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import Subscribe from "../components/home/Subscribe";
import { UserCircleIcon } from "@heroicons/react/solid";
import Tab from "../components/userprofile/Tab";
function UserProfile() {
    const [buttonClick,setButtonClick ]= useState(false)
    const handleClick = ()=>setButtonClick(!buttonClick)
  return (

    <div>
      <NavBar isMenuVissible={true} />
      <div className="p-6 ">
      <div className=" container grid p-4 h-[45vh]  place-items-center  bg-gray-100 rounded-xl ">
        <UserCircleIcon className="w-20 mt-14" />
        <h2 className="md:text-xl text-lg font-bold mt-3">Abebe Kebede</h2>
        <h2 className="md:text-lg text-sm font-bold mt-3">
          25 property . 10 Machinary . 5 Vehicle
        </h2>
        <button onClick={handleClick} className={!buttonClick?" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded":"hidden"}>
          Write Message
        </button>
      </div>
      </div>

      <Tab toggle={buttonClick}/>
     

      <div className="p-6">
        <Subscribe />
      </div>
      <hr/>
      <Footer />
    </div>
  );
}

export default UserProfile;

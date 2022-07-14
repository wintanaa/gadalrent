import React from "react";
import Image from "../../assets/subs.jpg";
import { AiOutlineHeart } from "react-icons//ai";

function PCard(props) {
  return (
    <div className="max-w-sm bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#" className='relative'>
        <img className=" w-full rounded-t-lg" src={Image} alt="" />
        
        <span className={props.isFreeContact?'absolute bottom-0 right-0  p-3 bg-green-600 text-white text-semibold':'hidden'}>Free Contact</span>

       
    </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.cardTitle}
          </h5>
        </a>
        <span className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Location
        </span>
        <p className="mb-3 font-normal text-black dark:text-gray-400">
          {props.desc}
        </p>
        <div className="flex justify-between">
          <span className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.money}
          </span>
          <span className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"></span>

          <label
            htmlFor="checked-toggle"
            className= {props.toggle?"inline-flex relative items-center cursor-pointer":"hidden"}
          >
            <input
              type="checkbox"
              value=""
              id="checked-toggle"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2 after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
          </label>

          <AiOutlineHeart className={!props.toggle?"w-6 h-6":"hidden" }/>
        </div>
      </div>
    </div>
  );
}

export default PCard;

import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import PCard from "../Detail/PCard";
function Filter() {
  return (
    <div className="container mt-16 ">
      <h2 className="text-2xl font-bold px-3">Duis at nisi quis sapien </h2>
      <span className="font-semibold px-3">150 result</span>

      <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-4 px-3 grid-cols-2 mt-3">
        <button className="bg-gray-200 hover:bg-gray-300  text-black  font-semibold py-2 px-4 rounded">
          Map View
        </button>

        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border font-semibold border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Price Range</option>
            <option>Price Range</option>
            <option>Price Range</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <AiFillCaretDown />
          </div>
        </div>
        <div className="relative">
          <select className="block  appearance-none w-full bg-gray-200 border font-semibold border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Area Filter</option>
            <option>Area Filter</option>
            <option>Area Filter</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <AiFillCaretDown />
          </div>
        </div>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border font-semibold border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Location</option>
            <option>Location</option>
            <option>Location</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <AiFillCaretDown />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-3 grid-cols-1 my-16  ">
        <PCard
          isFreeContact={false}
          cardTitle="Duis at nisi quis sapien"
          money="$2500/mo"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />
        <PCard
          isFreeContact={true}
          cardTitle="Praesent effciturvehi"
          money="$500/mo"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />

        <PCard
          isFreeContact={false}
          cardTitle="Duis at nisi quis sapien"
          money="$2500/mo"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />
        <PCard
          isFreeContact={true}
          cardTitle="Praesent effciturvehi"
          money="$500/mo"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />

        <PCard
          isFreeContact={false}
          cardTitle="Duis at nisi quis sapien"
          money="$2500/mo"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />
        <PCard
          isFreeContact={true}
          cardTitle="Praesent effciturvehi"
          money="$500/mo"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />

    
      </div>
    </div>
  );
}

export default Filter;

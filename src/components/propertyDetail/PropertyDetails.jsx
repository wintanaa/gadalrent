import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import {useNavigate} from 'react-router-dom'

function PropertyDetails() {

  let navigate = useNavigate(); 
  const routeChange = (event, param) =>{ 
    let path = param; 
    navigate(path);
  }
  

  return (
    <div className="container mt-6">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="px-3 col-span-2">
          <h2 className="text-3xl font-bold ">Duis at nisi quis sapien </h2>
          <span className="font-semibold text-gray-700 ">April 27,2050</span>
          <h3 className="text-2xl font-semibold  mb-4">Location</h3>
          <span className="mb-3 font-normal text-black dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Here are the biggest enterprise
            technology acquisitions of 2021 so far, in reverse chronological
            order. Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order.
          </span>
          <div className=" mb-20 mt-6">
            <span className=" text-3xl md:text-4xl antialiased  font-bold leading-4 ">
              Other Detail
            </span>
            <div className="pt-1 pb-4 mb-3">
              <div className="md:w-24 w-20 border-t-8 border-blue-500"></div>
            </div>

            <div className="container grid grid-cols-2 gap-4 bg-gray-50 p-2">
              <div>
                <div className="flex justify-between mt-2">
                  <h2 className=" text-sm text-gray-500 ">Housing Type</h2>
                  <h2 className="font-bold text-sm ">Apartment</h2>
                </div>
                <div className="flex justify-between mt-2 bg-white">
                  <h2 className=" text-sm text-gray-500 ">Rooms</h2>
                  <h2 className="font-bold text-sm ">3</h2>
                </div>
                <div className="flex justify-between mt-2">
                  <h2 className=" text-sm text-gray-500 ">Energy label</h2>
                  <h2 className="font-bold text-sm ">-</h2>
                </div>
                <div className="flex justify-between mt-2 bg-white">
                  <h2 className=" text-sm text-gray-500 ">Sharable</h2>
                  <h2 className="font-bold text-sm ">yes</h2>
                </div>
                <div className="flex justify-between mt-2 ">
                  <h2 className=" text-sm text-gray-500 ">Elevator</h2>
                  <h2 className="font-bold text-sm ">yes</h2>
                </div>
                <div className="flex justify-between mt-2 bg-white">
                  <h2 className=" text-sm text-gray-500 ">For students only</h2>
                  <h2 className="font-bold text-sm ">No</h2>
                </div>
                <div className="flex justify-between mt-2 ">
                  <h2 className=" text-sm text-gray-500 ">Parking</h2>
                  <h2 className="font-bold text-sm ">yes</h2>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2">
                  <h2 className=" text-sm text-gray-500 ">Size</h2>
                  <h2 className="font-bold text-sm ">118 m3</h2>
                </div>
                <div className="flex justify-between mt-2 bg-white">
                  <h2 className=" text-sm text-gray-500 ">Floor</h2>
                  <h2 className="font-bold text-sm ">2.</h2>
                </div>
                <div className="flex justify-between mt-2">
                  <h2 className=" text-sm text-gray-500 ">Furnished</h2>
                  <h2 className="font-bold text-sm ">No</h2>
                </div>
                <div className="flex justify-between mt-2 bg-white">
                  <h2 className=" text-sm text-gray-500 ">Pets allowed</h2>
                  <h2 className="font-bold text-sm ">No</h2>
                </div>
                <div className="flex justify-between mt-2 ">
                  <h2 className=" text-sm text-gray-500 ">Elderly friendly</h2>
                  <h2 className="font-bold text-sm ">yes</h2>
                </div>
                <div className="flex justify-between mt-2 bg-white">
                  <h2 className=" text-sm text-gray-500 ">Balcony/terrace</h2>
                  <h2 className="font-bold text-sm ">yes</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4 p-2">
          <div>
            <div className=" bg-white-100 rounded-lg border shadow-lg md:flex-row md:max-w-xl p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <h2 className="font-semibold text-xl">Monthly</h2>
              <h2 className="font-bold text-3xl ">$2500</h2>

              <div className="flex justify-between mt-2">
                <h2 className="font-bold text-xl">Availablity</h2>
                <h2 className="font-bold text-xl text-green-500">Available</h2>
              </div>

              <div className="flex justify-between">
                <h2 className="font-bold text-xl">Rental Period</h2>
                <h2 className="font-bold text-xl ">Unlimited</h2>
              </div>

              <button onClick={event => routeChange(event, '/message')}  className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Write Message
              </button>
              <button onClick={event => routeChange(event, '/payment')} className="w-full mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Make an offer
              </button>
            </div>
          </div>

          <div>
            <div
              href="#"
              className="grid  place-items-center  bg-white rounded-lg border shadow-lg md:flex-row md:max-w-xl p-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <UserCircleIcon className="w-16" />
              <h2 className="md:text-xl text-lg font-bold">Abebe Kebede</h2>
              <h2 className="md:text-lg text-sm font-bold">
                25 property . 10 Machinary . 5 Vehicle
              </h2>
              <button onClick={event => routeChange(event, '/userprofile')}  className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;

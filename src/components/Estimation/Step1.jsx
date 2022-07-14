import React, { useState } from "react";
import Card from "../common/Card";
import { TruckIcon } from "@heroicons/react/solid";
import { GiBulldozer } from "react-icons/gi";
import { ImHome } from "react-icons/im";

function Step1() {
  const [count, setCount] = useState(1);

  return (
    <div className="container p-6 mt-6 mb-8">
      <div className="relative md:bg-gray-100 bg-white rounded-xl  dark:bg-transparent mb-8">
        <span className=" absolute top-0 right-0  font-bold text-base m-4">
          Step {count}
        </span>
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl md:text-3xl   text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">
              {count == 1 ? "Get Estimation" : "Fill the Form"}
            </h1>
            <span className="mt-2 font-semibold md:text-lg text-xs">
              Aliquam erat volutpat. Cras et felis elmentum, bibendum eget,
              convallis nibh.
            </span>
          </div>
          <div
            className={
              count == 1
                ? "md:flex justify-center   items-center gap-10 grid-cols-2 "
                : "hidden"
            }
          >
            <a onClick={() => setCount(count + 1)}>
              <Card
                Icon={<GiBulldozer className="mb-3 w-60 h-24 m-5 " />}
                IconName="Machinery"
              />
            </a>
            <a onClick={() => setCount(count + 1)}>
              <Card
                Icon={<TruckIcon className="mb-3 w-60 h-24 m-5  " />}
                IconName="Vehicle"
              />
            </a>
            <a onClick={() => setCount(count + 1)}>
              <Card
                Icon={<ImHome className="mb-3 w-60 h-24 m-5 " />}
                IconName="Property"
              />
            </a>
          </div>
          <form className={count == 2 ? "" : "hidden"}>
            <div className="grid gap-x-10 gap-y-6 mb-6 lg:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-300 md:w-[400px] w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-300 md:w-[400px] w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-300 border md:w-[400px] w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[400px] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <input
                  type="url"
                  id="website"
                  className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[400px] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[400px] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <input
                  type="url"
                  id="website"
                  className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[400px] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[400px] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className=" flex justify-end">
              <button className="w-[300px] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get the Estimation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step1;

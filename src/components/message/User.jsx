import React from 'react'
import {UserCircleIcon} from '@heroicons/react/solid'
function User(props) {
  return (
    <a className={props.isSelected?"flex items-center bg-gray-300 px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-300 focus:outline-none":"flex items-center px-3 py-2 text-sm transition duration-150  ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-300 focus:outline-none"}>
    <img
      className="object-cover w-10 h-10 rounded-full"
      src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
      alt="username"
    />
    <div className="w-full pb-2">
      <div className="flex justify-between">
        <span className="block ml-2 font-semibold text-gray-600">
          {props.name}
        </span>
        <span className="block ml-2 text-sm text-gray-600">
          6 hour
        </span>
      </div>
      <span className="block ml-2 text-sm text-gray-600">
        {props.lastMessage}
      </span>
    </div>
  </a>
  )
}

export default User
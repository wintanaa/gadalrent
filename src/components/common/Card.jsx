import React from 'react'

function Card(props) {
  return (
    <div className="max-w-sm hover:bg-gray-200 hover:border-gray-500 hover:cursor-pointer bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6 mt-5">

    <div className="flex flex-col items-center pb-10">
      {props.Icon}
        <h5 className="mb-1 md:text-2xl sm:text-xl font-bold text-gray-900 dark:text-white">{props.IconName}</h5>
      
    </div>
</div>
  )
}

export default Card
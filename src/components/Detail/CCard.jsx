import React from 'react'

function CCard(props) {
  return (
    <a href="#" className="flex flex-col items-center bg-gray-100 rounded-lg border shadow-md md:flex-row md:max-w-xl p-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    
    {props.Icon}
    <div className="flex flex-col justify-between  leading-normal ml-3 ">
        <h5 className="mb-2 text-lg  font-semibold tracking-tight text-gray-900 dark:text-white">{props.IconName}</h5>
       
    </div>
</a>
  )
}

export default CCard
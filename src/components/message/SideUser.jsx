import { UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'

function SideUser() {
  return (
    <div className='grid grid-cols-2 gap-2'>
        <UserCircleIcon className='w-5'/>
        <span className='text-2xl '>Abebe Kebede</span>
        
    </div>
  )
}

export default SideUser
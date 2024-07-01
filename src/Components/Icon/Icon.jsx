import React from 'react'
import ThreeDots from '../ThreeDots/ThreeDots'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Icon = () => {
  return (
    <div className="flex items-center  overflow-hidden">
      <MagnifyingGlassIcon className="h-[12px] w-[12px] text-gray-500" />
      <ThreeDots />
    </div>
  )
}

export default Icon


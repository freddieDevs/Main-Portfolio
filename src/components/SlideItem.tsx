import React from 'react';
import { FC } from 'react'

interface SlideItemProps {
  title: string;
  description: string;
}

const SlideItem: FC<SlideItemProps> = ({
  title,
  description
}) => {
  return (
    <div className="bg-white opacity-75 hover:opacity-100 p-4 rounded-lg h-full">
      <dt className="text-2xl font-medium text-blue-700 sm:w-40 sm:flex-shrink-0">
        {title}
      </dt>
      <dd className="mt-1 text-lg sm:col-span-2 text-blue-600">
        {description}
      </dd>
    </div>
  )
}

export default SlideItem
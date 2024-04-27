import Image from 'next/image'
import React from 'react'



export function CategoryCard({title , image}) {
  return (
    <div className="relative h-[200px] w-[300px] ">
      <Image
        src={image}
        height={200}
        width={200}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 text-left w-full bg-black h-[50px]">
        <h1 className="text-3xl font-semibold bg-white text-center" >{title}</h1>
      </div>
    </div>
  )
}

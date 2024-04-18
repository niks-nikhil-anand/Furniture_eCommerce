'use client'

import React from 'react'
import {  MapPin } from 'lucide-react'



const locations = [
  {
    title: 'Bengaluru office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
  },
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
  },
  {
    title: 'Karnataka office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
  },
]



export function AboutUsPage() {
  

  return (
    <div>
      

      <div className="mx-auto max-w-7xl px-4 ">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-white-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-white-600 md:text-xl">
          Our furniture is handcrafted by artisans in our workshops in Mumbai using traditional, time tested techniques and the highest quality, hand selected reclaimed teak, which is amongst the finest, and densest, tropical hardwoods. The teak we use is reclaimed from beams and columns of old structures so no trees are cut to make our furniture
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around ">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
        <hr className="mt-20" />
       
        
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row border-t-[3px] border-t-black ">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
            <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
            All carving, molding, turning, inlay, and cane weaving is done entirely by hand by skilled artisans the way it has been for centuries. The artistry and workmanship involved in our process, coupled with the high quality materials we use, ensure that our furniture is handsome, durable, and features fine details found only in the best furniture.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1536437075651-01d675529a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFudGlxdWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row border-t-[3px] border-t-black ">
        <div className="md:mt-o mt-10 w-full">
            <img
              src="https://s3.amazonaws.com/viceroycasa-prod-bucket/uploads/image/cover/2552/1.jpg"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
            <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
            All carving, molding, turning, inlay, and cane weaving is done entirely by hand by skilled artisans the way it has been for centuries. The artistry and workmanship involved in our process, coupled with the high quality materials we use, ensure that our furniture is handsome, durable, and features fine details found only in the best furniture.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          
        </div>
      </div>
      <hr className="mt-6" />
     
     
    </div>
  )
}

import React from 'react';

export function Section() {
  return (
    <div className="relative h-[400px] w-full rounded-md flex flex-col justify-center items-center mt-[3rem] md:mt-1">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-black mb-4">Welcome to Store</h1>
        <div className='flex flex-col md:flex-row justify-center gap-2 lg:gap-[4rem] '>
        <div className="relative h-[200px] w-[280px] lg:w-[560px] rounded-md overflow-hidden mb-4">
        <img
          src="https://images.unsplash.com/photo-1514988081842-feeaeac260e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlJTIwc3RvcmV8ZW58MHwwfDB8fHww"
          alt="AirMax Pro"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h2 className="text-lg font-semibold text-white">Furniture</h2>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile &rarr;
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="relative h-[200px] w-[280px] lg:w-[560px] rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546905002-af9d9a15880a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMHNob3B8ZW58MHwwfDB8fHww"
          alt="AirMax Pro"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h2 className="text-lg font-semibold text-white">Flowers</h2>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile &rarr;
          </button>
        </div>
      </div>
        </div>
      {/* First Card */}
     
    </div>
  );
}

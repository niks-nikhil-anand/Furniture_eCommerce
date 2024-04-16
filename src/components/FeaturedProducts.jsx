import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/constants/card';
import { FeaturedCards } from '@/constants/FeaturedProduct';

export function FeaturedProduct() {
  return (
    <div className="container mx-auto px-4 mt-[4rem] mb-[3rem] lg:px-[5rem] lg:mb-[6rem]">
      <h1 className="text-3xl font-bold mt-8 mb-4">Featured Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FeaturedCards.map((product) => (
          <div key={product.id} className="w-[300px] rounded-md border">
            <img
              src={product.image}
              alt={product.title}
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {product.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
             
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
               Add to Inquiry
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

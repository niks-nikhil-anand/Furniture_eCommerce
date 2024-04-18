"use client"
import React, { useContext, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { products } from '@/constants/card';

export function Card({ initialCart }) {
  const { cart, addToCart } = useContext(CartContext);
  const [addedToInquiry, setAddedToInquiry] = useState({});

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToInquiry((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div className="container mx-auto px-4 mt-[4rem] mb-[3rem] lg:px-[5rem] lg:mb-[6rem]">
      <h1 className="text-3xl font-bold mt-8 mb-4">Our Latest Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="w-[300px] rounded-md border bg-[#FFEBC4]">
            <img
              src={product.image}
              alt={product.title}
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {product.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
              <div className="mt-4">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                disabled={isProductInCart(product.id) || addedToInquiry[product.id]}
              >
                {addedToInquiry[product.id] ? 'Added to Inquiry' : 'Add to Inquiry'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch initial cart data here
  const initialCart = []; // Replace this with your actual data fetching logic

  return {
    props: {
      initialCart,
    },
  };
}

export default Card;

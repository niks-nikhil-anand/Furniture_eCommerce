"use client"
import React, { useContext, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CartContext } from '../../../context/CartContext';
import { motion } from "framer-motion";
import { useParams } from 'next/navigation'

import Image from 'next/image';

export function Card({}) {
  const { cart, addToCart } = useContext(CartContext);
  const [addedToInquiry, setAddedToInquiry] = useState({});
  const [blogs, setBlogs] = useState([]);
  // const params = useParams()
  
    

 
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToInquiry((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-[90%] px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
         
          <div key={blogs.id} className="w-full lg:w-1/2">
            <Image
              src={blogs?.imageUrl}
              alt={blogs?.title} 
              className="h-64 w-full rounded object-cover lg:h-96"
            />
          </div>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h1 className="text-sm font-semibold tracking-widest text-gray-500">
              {blogs.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <div className="mt-4">
              <p className="leading-relaxed">
                {blogs?.title} 
              </p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-t-2 border-gray-100 pb-5 pt-5">
                <p className="leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae
                  neque adipisci eum enim, natus illo inventore totam?
                </p>
              </div>
            </div>
            <motion.button
              type="button"
              onClick={() => handleAddToCart(blogs)} 
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.6 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              disabled={isProductInCart(blogs.id) || addedToInquiry[blogs.id]} 
            >
              {addedToInquiry[blogs.id] ? 'Added to Inquiry' : 'Add to Inquiry'} {/* Changed from product.id */}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

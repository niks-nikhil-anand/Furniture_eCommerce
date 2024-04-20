"use client"
import React, { useContext, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CartContext } from '../../../context/CartContext';
import { motion } from "framer-motion";



import Image from 'next/image';


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
    <section className="overflow-hidden">
      <div className="mx-auto max-w-9xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <Image
          height={300}
          width={300}
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Nike</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Nike Air Max 21A</h1>
            
            <p className="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae
              neque adipisci eum enim, natus illo inventore totam?
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
              <p className="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae
              neque adipisci eum enim, natus illo inventore totam?
            </p>
              </div>
              <div className="ml-auto flex items-center">
                
              </div>
            </div>
            <div className="flex items-center justify-between">
              
              <motion.button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full rounded-sm bg-black px-1 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  
                >
                 Add to inquiry List
                </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card;

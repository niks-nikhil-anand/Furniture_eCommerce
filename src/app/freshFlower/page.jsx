"use client"
import React, { useContext, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { motion } from "framer-motion";

import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const apiEndpoint = `${process.env.domain}api/flower`;

  const res = await fetch(`${apiEndpoint}`, {
   method : 'GET',
   headers:{
    'Content-Type':'application/json',
   }
  });

  if (!res.ok) {
    console.log(apiEndpoint)
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function Card({ initialCart }) {
  const { cart, addToCart } = useContext(CartContext);
  const [addedToInquiry, setAddedToInquiry] = useState({});
  const [products, setProducts] = useState([]); // Added products state

  // Fetch data and set products state
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(); 
        setProducts(data.result); 
        console.log(products)
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToInquiry((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div className="container mx-auto px-4 mt-[4rem] mb-[3rem] lg:px-[5rem] lg:mb-[6rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products && products.map((product) => (
          <Link key={product.id} href={'/furniture/' + product.slug}>
            <motion.div
              className="w-[300px] rounded-md border bg-[#FFEBC4] cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={200}
                height={200}
                className=" w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {product.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
                </h1>
                <div className="mt-4">
                  <span
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                  >
                    {product.category} 
                  </span>
                </div>
                <motion.button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full rounded-sm bg-black px-1 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  disabled={isProductInCart(product.id) || addedToInquiry[product.id]}
                >
                  {addedToInquiry[product.id] ? 'Added to Inquiry' : 'Add to Inquiry'}
                </motion.button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;

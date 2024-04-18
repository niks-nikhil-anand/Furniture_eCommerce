"use client"
import React, { useContext, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { products } from '@/constants/card';
import { motion } from "framer-motion";

import { Client, Databases } from "appwrite";

export function Card({ initialCart }) {
  const { cart, addToCart } = useContext(CartContext);
  const [addedToInquiry, setAddedToInquiry] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66213460e2522f292260");

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "6621368f47a214f49511",
      "662139e44987d99c5371",
      []
    );

    promise.then(function (response) {
      console.log(response);
      setBlogs(response.documents);
    }, function (error) {
      console.log(error);
    });
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
        {blogs.map((product) => (
          <motion.div key={product.uniqueId} className="w-[300px] rounded-md border bg-[#FFEBC4] cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
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
              <span
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                >
                  {product.tag1} 
                </span>
              </div>
              <motion.button
                type="button"
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full rounded-sm bg-black px-1 py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                disabled={isProductInCart(product.id) || addedToInquiry[product.id]}
              >
                {addedToInquiry[product.id] ? 'Added to Inquiry' : 'Add to Inquiry'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Card;

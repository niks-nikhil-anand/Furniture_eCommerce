import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white border border-black rounded-full p-2 cursor-pointer transition duration-300 hover:bg-gray-200">
      <Link href={'/cart'}>
      <FaShoppingCart className="lg:text-5xl text-2xl" />
      </Link>
    </div>
  );
};

export default CartIcon;

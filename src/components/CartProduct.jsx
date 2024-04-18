"use client"
import React, { useContext } from 'react';
import { Trash, Heart } from 'lucide-react';
import InquiryForm from './InquiryForm';
import { CartContext } from '../context/CartContext.js'; 


export function Cart() {
  const { cart, removeFromCart , clearCart} = useContext(CartContext);

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your selected items...</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Send us an inquiry with these selected products and we'll get back to you with our best quote. Feel free to specify any additional requirements such as color options, quantity requirements, etc.
      </p>
      <ul className="flex flex-col divide-y divide-[#82714F]">
        {cart.map((product) => (
          <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.image}
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
                    <p className="text-sm">{product.color}</p>
                  </div>
                  <div className="text-right">
                    <button type="button" onClick={() => removeFromCart(product.id)} className="flex items-center space-x-2 px-2 py-1 pl-0">
                      <Trash size={16} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
  <button onClick={clearCart} className="text-blue-500 underline cursor-pointer">
    Clear Inquiry List
  </button>
</div>

      <div>
        <InquiryForm />
      </div>
    </div>
  );
}

// Function to calculate total amount
function calculateTotal(cart) {
  return cart.reduce((total, product) => total + product.price, 0);
}

export default Cart;

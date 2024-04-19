"use client"
import Link from "next/link";
import { useState } from "react";

function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={isOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">Your Logo
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none focus:text-white transition duration-150 ease-in-out">
                    Home
              
                </Link>
                {/* Add more links here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={isOpen ? "block" : "hidden sm:hidden"}>
        <div className="px-2 pt-2 pb-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-white transition duration-150 ease-in-out">
              Home
            
          </Link>
          {/* Add more links here */}
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaCartArrowDown } from 'react-icons/fa6';
import Link from 'next/link';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Projects',
    href: '/project',
  },
  {
    name: 'Fresh Flowers',
    href: '/freshFlower',
  },
  {
    name: 'Furniture',
    href: '/furniture',
  },
];

export function ExampleNavbarTwo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full bg-[#58A399]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path here */}
            </svg>
          </span>
          <Link href={'/'}>
            <span className="font-bold">2Solution</span>
          </Link>
        </div>
        <div className="hidden lg:flex items-start">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  onClick={closeMenu} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link href="/cart">
            <button
              type="button"
              className="rounded-md bg-black px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <div className='flex items-center space-x-1 gap-5'>
                <FaCartArrowDown />
                <span>Inquiry List</span>
              </div>
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            {/* Menu content here */}
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidSun, BiMoon } from 'react-icons/bi';

const Navbar = ({theme,toggleTheme}) => {
  return (
    <nav className="bg-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">                
                  <Image
                    src="/13.png"
                    width={32}
                    height={32}
                    alt="Logo"
                  />
              </Link>
            </div>

            <div className="hidden md:flex ml-4">
              <div className="flex space-x-4">
                <Link href="/">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </div>
                </Link>
                <Link href="/Plans">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Pricing
                  </div>
                </Link>
                <Link href="/TestimonialSlider">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Testimonials
                  </div>
                </Link>
                <Link href="/Work">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Investor
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-4 md:hidden">
            <div className="relative">
              <button
                type="button"
                className="bg-gray-900 flex items-center text-sm rounded-md text-white focus:outline-none"
              >
                More
                <svg
                  className="ml-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 4a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 20a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </button>
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <Link href="/">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Home
                  </div>
                </Link>
                <Link href="/Plans">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Pricing
                  </div>
                </Link>
                <Link href="/TestimonialSlider">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Testimonials
                  </div>
                </Link>
                <Link href="/Work">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Investor
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleTheme}
            >
              {theme === 'dark'? (
                <BiSolidSun className="w-5 h-5" />
              ) : (
                <BiMoon className="w-5 h-5" />
              )}
            </button>
          </div>
          <button type="button" className="flex items-center">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Get Now
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

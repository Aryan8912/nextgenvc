import React from 'react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { BsFillBookmarkCheckFill, BsFillMicFill, BsJournalBookmarkFill } from 'react-icons/bs';

const Work = () => {
  return (
    <section>
      <div className="">
      <h1 className="text-center text-3xl font-bold my-10">How it Works</h1>
      <div className="flexCenter">
        <div className="w-full lg:w-1/2 p-8 px-10">
          {/* Left side image */}
          <Image
            src="/3.png"
            alt="Service Image"
            width={100}
            height={100}
            className="w-full h-auto"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <div className="w-full lg:w-1/2 p-8 ">
          {/* Right side boxes */}
          <div className=" projects-grid-box ">
            {/* Box 1 */}
            <div className="border border-dashed border-gray-800 w-64 h-80 rounded-xl p-4 text-center mb-6">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold mt-2">
                  <BiSearch />
                </span>
              </div>
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque reiciendis incidunt debitis rem
                consequuntur.
              </p>
            </div>

            {/* Box 2 */}
            <div className="border border-dashed border-gray-800 w-64 h-80 rounded-xl p-4 text-center mb-6">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold mt-2">
                  <BsFillBookmarkCheckFill />
                </span>
              </div>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque reiciendis incidunt debitis rem
                consequuntur.
              </p>
            </div>

            {/* Box 3 */}
            <div className="border border-dashed border-gray-800 w-64 h-80 rounded-xl p-4 text-center mb-6">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold mt-2">
                  <BsFillMicFill />
                </span>
              </div>
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque reiciendis incidunt debitis rem
                consequuntur.
              </p>
            </div>

            {/* Box 4 */}
            <div className="border border-dashed border-gray-800 w-64 h-80 rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold mt-2">
                  <BsJournalBookmarkFill />
                </span>
              </div>
              <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque reiciendis incidunt debitis rem
                consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Work;

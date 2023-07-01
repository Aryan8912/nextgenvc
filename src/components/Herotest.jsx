import React from 'react';
import Image from 'next/image';
import {BsStars} from 'react-icons/bs';

const HeroSection = () => {
  return (
    <section className=" w-full h-screen pt-20 mb-24">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full md:w-2/5">
          <BsStars/>
          <div className="relative">
            <Image
              src="/16.png"
              alt="Left Image"
              width={300}
              height={300}
            />
          </div>
        </div>
        <BsStars/>
        <div className="absolute top-20 right-78 px-8 right-48 py-2 hidden md:block">
  <h3 className="text-gray-800 font-light rounded-lg shadow-md">Save <b className="text-green-700">10000 Hours</b> of Research</h3>
  <div>
    <Image
      src="/15.png"
      alt="service-7"
      width={80}
      height={100}
    />
  </div>
</div>

<div className="w-full md:w-3/5 px-4">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 overflow-hidden text-lg sm:text-4xl md:text-6xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sunt.
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 hidden md:block">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat sed orci tincidunt sagittis. Curabitur rutrum massa quis urna sagittis dignissim.
    </p>
    <button className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-bold text-lg shadow-md hover:bg-blue-600">
      Get Started
    </button>
  </div>
</div>

        <div className="absolute bottom-[-118px] left-72 px-4 py-2 hidden md:block">
        <div className="">
          <Image
            src="/14.png"
            alt="service-7"
            width={100}
            height={100}
            />
        </div>
<h3 className="text-lg font-bold text-gray-800 rounded-lg shadow-md"><b className="text-green-700">24*7</b> Support</h3>
</div>
<BsStars/>
        <div className="w-full md:w-2/5">
          <div className="relative">
            <Image
              src="/1.png"
              alt="Right Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

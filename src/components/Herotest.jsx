import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full h-[700px] bg-#02CD9F">
      <div className="hero-img">
        <div className="flex flex-col md:flex-row relative top-6 left-6 md:mr-[-10px] gap-[-20px] flex-cols-1 md:flex-cols-2 lg:flex-cols-4">
          <div className="bottom-left-img md:w-1/2 lg:w-2/5">
            <Image src="/16.png" alt="hero" width={300} height={150} className="ml-20" />
          </div>
          <div className="top-right-img md:w-1/2 lg:w-2/5">
            <div className="flex flex-col items-end justify-end absolute top-24 right-10">
              <Image src="/1.png" alt="hero" width={300} height={150} className="mr-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-right-img-box">
        <div className="flex flex-col items-start justify-start relative top-20 left-0 md:left-96 md:w-1/2 lg:w-2/5 p-8 py-10 md:mr-20">
          <Image src="/14.png" alt="hero" width={120} height={100} className="ml-16" />
          <div className="w-24 h-10 bg-gray-300 shadow-md text-center overflow-hidden whitespace-normal">
            <h1>
            <b>24*7 </b> support
            </h1>
          </div>
        </div>
      </div>
      <div className="hero_tittle">
        <div className="flex flex-col items-center justify-center space-y-6 md:order-2 md:w-1/2 lg:w-2/5 p-8 top-[350px] absolute bottom-96">
          <div className="hero-br-title">
            <h1 className="text-3xl font-bold text-center mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nam? Molestias, vero.</h1>
          </div>
          <div className="hero-br-subtitle">
            <p className="text-lg text-gray-500 text-center mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident eveniet quaerat maiores voluptatum asperiores veritatis, alias quas quibusdam similique?</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Get Now</button>
        </div>
      </div>
      <div className="top-left-img-box">
        <div className="flex flex-col items-end justify-end relative bottom-20 right-0 md:right-96 md:ml-20">
          <div className=" w-36 shadow-2xl h-10 bg-gray-400 box-shadow-lg text-center overflow-hidden whitespace-normal">
            <h1>
                Save <b className=" text-green-800">10000 Hours</b> of Research
            </h1>
          </div>
          <Image src="/15.png" alt="hero" width={120} height={100} className="mr-16" />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Mobile Styles */
          .hero-img {
            /* Modify styles for hero image on mobile */
          }
          /* Add additional mobile styles for other elements as needed */
        }

        @media (min-width: 769px) {
          /* Desktop Styles */
          .hero-img {
            /* Modify styles for hero image on desktop */
          }
          /* Add additional desktop styles for other elements as needed */
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

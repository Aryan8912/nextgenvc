import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-10">Powering the <strong>8000+</strong> Investor List</h1>
        <div className="box-decoration-slice p-5">
  <Image
    src="/7.png"
    alt="service-7"
    width={100}
    height={100}
    layout="responsive"
    className="rounded-lg"
  />
</div>

        <div className="flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 lg:w-2/5 p-8 py-10">
            {/* Left side text content */}
            <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus ipsum sed turpis sagittis, eu fringilla
              enim accumsan.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 p-8 px-10">
            {/* Right side image */}
            <Image
              src="/2.png"
              alt="service-1"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-10">
          <div className="w-full md:w-1/2 lg:w-3/5 p-8 px-10">
            {/* Left side image */}
            <Image
              src="/4.png"
              alt="service-2"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 p-10 pl-20">
            {/* Right side text content */}
            <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus ipsum sed turpis sagittis, eu fringilla
              enim accumsan.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-10">
          <div className="w-full md:w-1/2 lg:w-2/5 p-8 px-100">
            {/* Left side text content */}
            <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus ipsum sed turpis sagittis, eu fringilla
              enim accumsan.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 p-8 px-10">
            {/* Right side image */}
            <Image
              src="/5.png"
              alt="service-3"
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

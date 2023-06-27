import React from 'react';
import Image from 'next/image';

const plansData = [
  {
    title: 'App Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque',
    desc1: 'lajgn jajgn gjgjg gjgjg ',
    desc2: 'lajgn jajgn gjgjg gjgjg ',
    desc3: 'lajgn jajgn gjgjg gjgjg ',
    desc4: 'lajgn jajgn gjgjg gjgjg ',
    button: '',
  },
  {
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!',
  },
  {
    title: 'Graphics Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!',
  },
  {
    title: 'Digital Marketing',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!',
  },
  {
    title: 'App Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!',
  },
  {
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!',
  },
  {
    title: 'Graphics Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!',
  },
  {
    title: 'Digital Marketing',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!',
  },
];

const Plans = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold my-10">Trusted Investors in Our Lists</h1>
      <div className="relative aspect-w-1 aspect-h-1">
          <Image
             src="/10.png"
             alt="service-1"
             width={300}
             height={300}
             layout="responsive"
             objectFit="cover"
             objectPosition="50% 50%"
             placeholder="blur"
             blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
      <div className="grid grid-cols-1 gap-6 mx-auto mb-10 max-w-4xl">
        <div className="relative aspect-w-1 aspect-h-1">
            <h1 className="text-center text-3xl font-bold my-10">Trusted By Founders Of </h1>
          <Image
            src="/11.png"
            alt="service-2"
            width={300}
            height={300}
            layout="responsive"
                              objectFit="cover"
                              objectPosition="50% 50%"
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <div className="relative aspect-w-1 aspect-h-1">
          <Image
            src="/11.png"
            alt="service-2"
            width={300}
            height={300}
            layout="responsive"
                              objectFit="cover"
                              objectPosition="50% 50%"
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
      </div>

      <div className="border bg-gray-100 py-6">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4">
          {plansData.map((item, index) => (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" key={index}>
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

import React from 'react';
import {BsPatchCheck} from "react-icons/bs";

const plansData = [
  {
    title: 'App Development',
    desc1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum',
    icon1: <BsPatchCheck/>,
    icon2: <BsPatchCheck/>,
    icon3: <BsPatchCheck/>,
    subtitle1: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle2: 'elit. Sint, voluptatum',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    button: 'Update Now',
  },
  {
    title: 'Web Development',
    desc1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum',
    icon1: <BsPatchCheck/>,
    icon2: <BsPatchCheck/>,
    icon3: <BsPatchCheck/>,
    icon4: <BsPatchCheck/>,
    icon5: <BsPatchCheck/>,
    subtitle1: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle2: 'elit. Sint, voluptatum',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle4:  'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle5: 'elit. Sint, voluptatum',
    button: 'Update Now',
  },
  {
    title: 'Graphics Design',
    desc1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum',
    desc2:'Lorem ipsum, dolor sit amet consectetur adipisicing',
    desc3:'Lorem ipsum, dolor sit amet consectetur adipisicing',
    icon1: <BsPatchCheck/>,
    icon2: <BsPatchCheck/>,
    icon3: <BsPatchCheck/>,
    icon4: <BsPatchCheck/>,
    icon5: <BsPatchCheck/>,
    icon6: <BsPatchCheck/>,
    icon7: <BsPatchCheck/>,
    subtitle1: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle2: 'elit. Sint, voluptatum',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle4:  'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle5: 'elit. Sint, voluptatum',
    subtitle6: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle7: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    button: 'Update Now',
  },
  {
    title: 'Digital Marketing',
    desc1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum',
    icon1: <BsPatchCheck/>,
    icon2: <BsPatchCheck/>,
    icon3: <BsPatchCheck/>,
    icon4: <BsPatchCheck/>,
    icon5: <BsPatchCheck/>,
    icon6: <BsPatchCheck/>,
    icon7: <BsPatchCheck/>,
    subtitle1: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle2: 'elit. Sint, voluptatum',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle4:  'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle5: 'elit. Sint, voluptatum',
    subtitle6: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle7: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    button: 'Update Now',
  },
];

const Plans = () => {
  return (
    <section className="plans">
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="plans-title">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum illo harum!</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, molestiae totam.
          </p>
        </div>
        </div>
        <div className="plans-yearly-montly">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 border border-solid bg-gray-800 shadow-sm rounded-lg">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
              Monthly
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
              Yearly
            </button>
          </div>
        </div>
        </div>
        <div className="plans-item">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plansData.map((item, index) => (
            <div
              className="bg-#02CD9F p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 gap-4"
              key={index}
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <div className="grid items-center space-x-4">
              <p className="text-gray-600">{item.desc1}</p>
              <p className="text-gray-600">{item.desc2}</p>
              <p className="text-gray-600">{item.desc3}</p>
              </div>

            <div className="grid grid-cols-1 items-center gap-4">
                <span className="flex items-center">{item.icon1}</span>
                <span className="flex items-center">{item.icon2}</span>
                <span className="flex items-center">{item.icon3}</span>
                <span className="flex items-center">{item.icon4}</span>
                <span className="flex items-center">{item.icon5}</span>
                <span className="flex items-center">{item.icon6}</span>
                <span className="flex items-center">{item.icon7}</span>
                {/* subtitles */}
                <div className="grid grid-cols-1 items-center">
                <p className="text-gray-600">{item.subtitle1}</p>
                <p className="text-gray-600">{item.subtitle2}</p>
                <p className="text-gray-600">{item.subtitle3}</p>
                <p className="text-gray-600">{item.subtitle4}</p>
                <p className="text-gray-600">{item.subtitle5}</p>
                <p className="text-gray-600">{item.subtitle6}</p>
                <p className="text-gray-600">{item.subtitle7}</p>
                </div>
            </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                {item.button}
              </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Plans;
/*
<h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum.</h1>
*/
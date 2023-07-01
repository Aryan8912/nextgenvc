import React from 'react';
import {BsPatchCheck} from "react-icons/bs";

const plansData = [
  {
    title: 'Start Plan',
    month:'$49/month',
    desc1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum',
    icon1: <BsPatchCheck/>,
    icon2: <BsPatchCheck/>,
    icon3: <BsPatchCheck/>,
    subtitle1: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle2: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    button: 'Update Now',
  },
  {
    title: 'Launch Plan',
    month:'$79/month',
    desc1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum',
    icon1: <BsPatchCheck/>,
    icon2: <BsPatchCheck/>,
    icon3: <BsPatchCheck/>,
    icon4: <BsPatchCheck/>,
    icon5: <BsPatchCheck/>,
    subtitle1: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle2: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle4:  'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle5: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    button: 'Update Now',
  },
  {
    title: 'Pro Plan',
    month:'$149/month',
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
    subtitle2: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle4:  'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle5: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle6: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle7: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    button: 'Update Now',
  },
  {
    title: 'Max Plan',
    month:'$299/month',
    desc1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptatum',
    icon1: <BsPatchCheck/>,
    icon2: <BsPatchCheck/>,
    icon3: <BsPatchCheck/>,
    icon4: <BsPatchCheck/>,
    icon5: <BsPatchCheck/>,
    icon6: <BsPatchCheck/>,
    icon7: <BsPatchCheck/>,
    subtitle1: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle2: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle4:  'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle5: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    subtitle6: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    subtitle7: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,',
    button: 'Update Now',
  },
];

const Plans = () => {
  return (
    <section className="plans">
    <div className="py-10">
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
              <div className="flex-wrap">
                <div className="flexBetween ">
                  <div className=" border font-serif">
              <h3 className=" ">{item.title}</h3>
                  </div>
              <h3 className="">{item.month}</h3>
              </div>
              </div>

              <div className="grid items-center space-x-4">
              <p className="text-gray-600">{item.desc1}</p>
              <p className="text-gray-600">{item.desc2}</p>
              <p className="text-gray-600">{item.desc3}</p>
              </div>

          {/*    <div className="flexCenter flex-wrap flex-1">
  <div className="grid grid-cols-1 items-center gap-4">
    {item.icon1 && <span className="flex items-center">{item.icon1}</span>}
    {item.icon2 && <span className="flex items-center">{item.icon2}</span>}
    {item.icon3 && <span className="flex items-center">{item.icon3}</span>}
    {item.icon4 && <span className="flex items-center">{item.icon4}</span>}
    {item.icon5 && <span className="flex items-center">{item.icon5}</span>}
    {item.icon6 && <span className="flex items-center">{item.icon6}</span>}
    {item.icon7 && <span className="flex items-center">{item.icon7}</span>}
    
    
    <div className="grid grid-cols-1 items-center">
      {item.subtitle1 && <p className="text-gray-600">{item.subtitle1}</p>}
      {item.subtitle2 && <p className="text-gray-600">{item.subtitle2}</p>}
      {item.subtitle3 && <p className="text-gray-600">{item.subtitle3}</p>}
      {item.subtitle4 && <p className="text-gray-600">{item.subtitle4}</p>}
      {item.subtitle5 && <p className="text-gray-600">{item.subtitle5}</p>}
      {item.subtitle6 && <p className="text-gray-600">{item.subtitle6}</p>}
      {item.subtitle7 && <p className="text-gray-600">{item.subtitle7}</p>}
    </div>
  </div>
</div>   
 */}


<div className="flexCenter flex-wrap">
  <div className="flex items-start justify-center gap-4">
    {item.icon1 && <span className="flex items-center">{item.icon1}</span>}
    {item.subtitle1 && <p className="text-gray-600">{item.subtitle1}</p>}
  </div>
  <div className="flex items-start justify-center gap-4">
    {item.icon2 && <span className="flex items-center">{item.icon2}</span>}
    {item.subtitle2 && <p className="text-gray-600">{item.subtitle2}</p>}
  </div>
  <div className="flex items-start justify-center gap-4">
    {item.icon3 && <span className="flex items-center">{item.icon3}</span>}
    {item.subtitle3 && <p className="text-gray-600">{item.subtitle3}</p>}
  </div>
  <div className="flex items-start justify-center gap-4">
    {item.icon4 && <span className="flex items-center">{item.icon4}</span>}
    {item.subtitle4 && <p className="text-gray-600">{item.subtitle4}</p>}
  </div>
  <div className="flex items-start justify-center gap-4">
    {item.icon5 && <span className="flex items-center">{item.icon5}</span>}
    {item.subtitle5 && <p className="text-gray-600">{item.subtitle5}</p>}
  </div>
  <div className="flex items-start justify-center gap-4">
    {item.icon6 && <span className="flex items-center">{item.icon6}</span>}
    {item.subtitle6 && <p className="text-gray-600">{item.subtitle6}</p>}
  </div>
  <div className="flex items-start justify-center gap-4">
    {item.icon7 && <span className="flex items-center">{item.icon7}</span>}
    {item.subtitle7 && <p className="text-gray-600">{item.subtitle7}</p>}
  </div>
</div>





              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
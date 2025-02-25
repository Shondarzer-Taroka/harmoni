import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-black text-white h-full lg:h-[300px] flex items-center justify-start p-4 lg:px-16 my-5">
      <div className="text-left ">
        <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Item</h1>
        <p className="text-lg mb-6">
          Browse our exclusive collection and find the perfect product tailored just for you.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-2xl transition duration-300 hover:bg-transparent hover:border hover:border-white hover:text-white">Shop</button>
          <button className="border border-white text-white px-6 py-2 rounded-2xl transition duration-300 hover:bg-white hover:text-black">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
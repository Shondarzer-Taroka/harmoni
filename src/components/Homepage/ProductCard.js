import React from "react";
import { Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      {/* Product Image */}
      <div className="relative bg-gray-100 p-2 rounded-lg">
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Kids Electric Car"
          className="w-full h-40 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">Kids Electric Car</h2>
        <div className="flex justify-center items-center mt-1">
          <span className="text-orange-500 font-semibold text-lg">$960</span>
          <div className="flex items-center ml-2 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">(65)</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="bg-black text-white w-full py-2 mt-4 rounded-lg hover:opacity-90">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
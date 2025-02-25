
// src/components/Homepage/ProductCard.js
import React, { useState } from "react";
import { Star } from "lucide-react";
import ProductModal from "../ProductModal/ProductModal";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Handle Add to Cart Function
  const handleAddToCart = () => {
    setIsModalOpen(true); 
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className=" p-4 flex flex-col h-full">
      
        <div
          className="relative bg-gray-100 p-2 rounded-lg cursor-pointer"
       
        >
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 text-center flex-grow">
          <h2 className="text-lg font-semibold min-h-[48px]">
            {product.title}
          </h2>
          <div className="flex justify-center items-center mt-1">
            <span className="text-orange-500 font-semibold text-lg">
              ${product.price}
            </span>
            <div className="flex items-center ml-2 text-yellow-500">
              {[...Array(Math.round(product.rating.rate))].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">
              ({product.rating.count})
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white w-full py-2 mt-auto rounded-lg hover:opacity-90"
        >
          Add To Cart
        </button>
      </div>

      {/* Modal Triggered on Product Click */}
      {isModalOpen && (
        <ProductModal
        SelectedProduct={product}
          quantity={quantity}
          setQuantity={setQuantity}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;


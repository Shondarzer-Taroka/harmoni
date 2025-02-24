// import React from "react";
// import { Star } from "lucide-react";

// const ProductCard = ({product}) => {
//     console.log(product);
    
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-64">
//       {/* Product Image */}
//       <div className="relative bg-gray-100 p-2 rounded-lg">
//         <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
//           NEW
//         </span>
//         <img
//           src={product.image}
//           alt="Kids Electric Car"
//           className="w-full h-40 object-contain"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="mt-4 text-center">
//         <h2 className="text-lg font-semibold">{product.title}</h2>
//         <div className="flex justify-center items-center mt-1">
//           <span className="text-orange-500 font-semibold text-lg">${product.price}</span>
//           <div className="flex items-center ml-2 text-yellow-500">
//             {[...Array(Math.round(product.rating.rate))].map((_, index) => (
//               <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
//             ))}
//           </div>
//           <span className="text-gray-500 text-sm ml-2">({product.rating.count})</span>
//         </div>
//       </div>

//       {/* Add to Cart Button */}
//       <button className="bg-black text-white w-full py-2 mt-4 rounded-lg hover:opacity-90">
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;








// // src/ components/Hompage/ProductCard.js

import React, { useState } from "react";
import { Star, Plus, Minus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Product Card */}
      <div className="bg-white p-4 rounded-lg shadow-md w-64 flex flex-col h-full">
  {/* Product Image */}
  <div className="relative bg-gray-100 p-2 rounded-lg">
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
    <h2 className="text-lg font-semibold min-h-[48px]">{product.title}</h2> {/* Title height fix */}
    <div className="flex justify-center items-center mt-1">
      <span className="text-orange-500 font-semibold text-lg">${product.price}</span>
      <div className="flex items-center ml-2 text-yellow-500">
        {[...Array(Math.round(product.rating.rate))].map((_, index) => (
          <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <span className="text-gray-500 text-sm ml-2">({product.rating.count})</span>
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


      {/* Modal with Animation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white p-6 rounded-3xl shadow-xl w-[700px] relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="flex space-x-6">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-48 h-48 object-contain rounded-xl"
                />

                {/* Product Info */}
                <div className="flex flex-col space-y-3">
                  <h2 className="text-2xl font-semibold">{product.title}</h2>

                  {/* Rating Section */}
                  <div className="flex items-center">
                    <div className="flex text-yellow-500">
                      {[...Array(Math.round(product.rating.rate))].map((_, index) => (
                        <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      ({product.rating.count} Reviews)
                    </span>
                    <span className="ml-2 text-green-500 text-sm font-medium">| In Stock</span>
                  </div>

                  {/* Price Section */}
                  <div className="text-2xl font-semibold text-gray-800">${product.price}</div>

                  {/* Product Description */}
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>

                  <div className="h-[1px] w-full bg-slate-200 space-y-7"></div>

                  {/* Quantity Selector and Buy Button */}
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-4 bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 py-1 text-lg">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-4 bg-yellow-400 hover:bg-yellow-500"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Buy Now Button */}
                    <button className="bg-black text-white py-2 px-6 rounded-lg hover:opacity-90">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;

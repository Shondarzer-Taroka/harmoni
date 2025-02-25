// import React from "react";
// import { Star, Plus, Minus, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useGetProductByIdQuery } from "../../slices/productSlice";


// const ProductModal = ({SelectedProduct, quantity, setQuantity, onClose  }) => {
//   const { data:product, isLoading, error } = useGetProductByIdQuery(SelectedProduct?.id);

//   if (isLoading) return <div className="hidden" >Loading...</div>;
//   if (error) return <div>Error loading product.</div>;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           className="bg-white p-6 rounded-3xl shadow-xl w-[700px] relative"
//         >
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-black"
//           >
//             <X size={20} />
//           </button>

//           {/* Modal Content */}
//           <div className="flex space-x-6">
//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-48 h-48 object-contain rounded-xl"
//             />

//             {/* Product Info */}
//             <div className="flex flex-col space-y-3">
//               <h2 className="text-2xl font-semibold">{product.title}</h2>

//               {/* Rating Section */}
//               <div className="flex items-center">
//                 <div className="flex text-yellow-500">
//                   {[...Array(Math.round(product.rating.rate))].map((_, index) => (
//                     <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
//                   ))}
//                 </div>
//                 <span className="text-gray-500 text-sm ml-2">
//                   ({product.rating.count} Reviews)
//                 </span>
//               </div>

//               {/* Price Section */}
//               <div className="text-2xl font-semibold text-gray-800">${product.price}</div>

//               {/* Product Description */}
//               <p className="text-gray-600 text-sm">{product.description}</p>

//               {/* Quantity Selector and Buy Button */}
//               <div className="flex items-center space-x-4 mt-4">
//                 <div className="flex items-center border rounded-lg overflow-hidden">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="px-3 py-4 bg-gray-100 hover:bg-gray-200"
//                   >
//                     <Minus size={14} />
//                   </button>
//                   <span className="px-4 py-1 text-lg">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="px-3 py-4 bg-yellow-400 hover:bg-yellow-500"
//                   >
//                     <Plus size={14} />
//                   </button>
//                 </div>

//                 {/* Buy Now Button */}
//                 <button className="bg-black text-white py-2 px-6 rounded-lg hover:opacity-90">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );



// };

// export default ProductModal;













import React from "react";
import { Star, Plus, Minus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetProductByIdQuery } from "../../slices/productSlice";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../slices/cartSlice";

const ProductModal = ({ SelectedProduct, quantity, setQuantity, onClose }) => {
  const dispatch = useDispatch();
  const { data: product, isLoading, error } = useGetProductByIdQuery(SelectedProduct?.id);

  if (isLoading) return <div className="hidden">Loading...</div>;
  if (error) return <div>Error loading product.</div>;

  // Update cart quantity when user increases/decreases count
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white p-4 md:p-6 rounded-3xl shadow-xl w-[700px] relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row space-x-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-48 h-48 object-contain rounded-xl"
            />

            <div className="flex flex-col space-y-3">
              <h2 className="text-2xl font-semibold">{product.title}</h2>

              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  {[...Array(Math.round(product.rating.rate))].map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">
                  ({product.rating.count} Reviews)
                </span>
              </div>

              <div className="text-2xl font-semibold text-gray-800">${product.price}</div>

              <p className="text-gray-600 text-sm">{product.description}</p>

              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
                    className="px-3 py-4 bg-gray-100 hover:bg-gray-200"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-1 text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-4 bg-yellow-400 hover:bg-yellow-500"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button className="bg-black text-white py-2 px-6 rounded-lg hover:opacity-90">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;

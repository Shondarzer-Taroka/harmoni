
// // src/ components/Hompage/ProductSection.js

// import React from 'react';
// import ProductCard from './ProductCard';
// import { useGetProductsQuery } from '../../slices/productSlice';

// const ProductSection = () => {
//     const { data: products, isError, isLoading, error } = useGetProductsQuery();

//     if (isLoading) {
//         return <h1>Loading...</h1>;
//     }
//     if (isError) {
//         return <h2>{error?.data?.message || "Error fetching products"}</h2>;
//     }

//     return (
//         <section className="px-5">
//             <div className="flex flex-col justify-center bg-white">
//                 <div className="text-orange-500 text-2xl font-semibold flex items-center mb-4">
//                     <div className="w-4 h-[27px] rounded-sm bg-orange-500 mr-2"></div>
//                     Our Products
//                 </div>
//                 <h1 className="text-black text-4xl font-bold">Explore Our Products</h1>
//             </div>

//             {/* Product Grid */}
//             <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products?.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ProductSection;










import React from 'react';
import ProductCard from './ProductCard';

import { useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../slices/productSlice';

const ProductSection = () => {
    const { data: products, isError, isLoading, error } = useGetProductsQuery();
    const { searchResults } = useSelector((state) => state.search);

    const displayProducts = searchResults.length > 0 ? searchResults : products;
  console.log(searchResults);
  
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h2>{error?.data?.message || "Error fetching products"}</h2>;
    }

    return (
        <section id="product-section" className="px-5">
            <div className="flex flex-col justify-center bg-white">
                <div className="text-orange-500 text-2xl font-semibold flex items-center mb-4">
                    <div className="w-4 h-[27px] rounded-sm bg-orange-500 mr-2"></div>
                    Our Products
                </div>
                <h1 className="text-black text-4xl font-bold">Explore Our Products</h1>
            </div>

            {/* Product Grid */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;

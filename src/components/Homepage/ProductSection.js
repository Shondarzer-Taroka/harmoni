import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
    return (

        <section className='px-5'>

            <div className="flex flex-col  justify-center bg-white">
                <div className="text-orange-500 text-2xl font-semibold flex items-center mb-4">
                    <div className="w-4 h-[27px] rounded-sm bg-orange-500 mr-2"></div>
                    Our Products
                </div>
                <h1 className="text-black text-4xl font-bold">Explore Our Products</h1>





            </div>

            <div className='mt-9'>
                <ProductCard />
            </div>

        </section>
    );
};

export default ProductSection;


// // // src/Search/SearchInput
// import { Search } from 'lucide-react';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useGetProductsByCategoryQuery } from '../slices/productSlice';
// import { setSearchResults } from '../slices/searchSlice';

// const categories = ["electronics", "jewelry", "men's clothing", "women's clothing"];

// const SearchInput = () => {
//     const [search, setSearch] = useState("");
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const dispatch = useDispatch();

//     const { data: products, isLoading } = useGetProductsByCategoryQuery(selectedCategory, {
//         skip: !selectedCategory,
//     });

//     const handleCategorySelect = (category) => {
//         setSelectedCategory(category);
//         setSearch(category);
//     };

//     React.useEffect(() => {
//         if (products && selectedCategory) {
//             dispatch(setSearchResults(products)); // Store search results globally

//             // Scroll to Product Section
//             const productSection = document.getElementById('product-section');
//             if (productSection) {
//                 productSection.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//     }, [products, selectedCategory, dispatch]);

//     const filteredCategories = categories.filter((category) =>
//         category.toLowerCase().includes(search.toLowerCase())
//     );

//     const highlightMatch = (text) => {
//         const regex = new RegExp(`(${search})`, 'gi');
//         return text.replace(regex, (match) => `<strong>${match}</strong>`);
//     };

//     return (
//         <div>
//             <div className="relative flex items-center">
//                 <input
//                     type="text"
//                     placeholder="What are you looking for?"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className="px-4 w-[240px] py-2 rounded-full text-black placeholder-black focus:outline-none placeholder:opacity-35"
//                 />
//                 <Search className="absolute right-3 text-black cursor-pointer" size={20} />
//             </div>

//             {/* Suggestions */}
//             {search && filteredCategories.length > 0 && (
//                 <ul className="absolute bg-white mt-1 w-[240px] rounded-lg shadow-lg z-10">
//                     {filteredCategories.map((category) => (
//                         <li
//                             key={category}
//                             onClick={() => handleCategorySelect(category)}
//                             className="px-4 py-2 cursor-pointer hover:bg-yellow-200"
//                             dangerouslySetInnerHTML={{ __html: highlightMatch(category) }}
//                         />
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default SearchInput;















// // okay

// // // src/Search/SearchInput
// import { Search, Loader } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useGetProductsByCategoryQuery } from '../slices/productSlice';
// import { setSearchResults } from '../slices/searchSlice';

// const categories = ["electronics", "jewelry", "men's clothing", "women's clothing"];

// const SearchInput = () => {
//     const [search, setSearch] = useState("");
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const dispatch = useDispatch();

//     const { data: products, isLoading } = useGetProductsByCategoryQuery(selectedCategory, {
//         skip: !selectedCategory,
//     });

//     const handleCategorySelect = (category) => {
//         setSelectedCategory(category);
//         setSearch(""); // Clear input after selection
//     };

//     useEffect(() => {
//         if (products && selectedCategory) {
//             dispatch(setSearchResults(products)); // Store search results globally

//             // Smooth scroll to Product Section
//             const productSection = document.getElementById('product-section');
//             if (productSection) {
//                 productSection.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//     }, [products, selectedCategory, dispatch]);

//     const filteredCategories = categories.filter((category) =>
//         category.toLowerCase().includes(search.toLowerCase())
//     );

//     const highlightMatch = (text) => {
//         const regex = new RegExp(`(${search})`, 'gi');
//         return text.replace(regex, (match) => `<strong>${match}</strong>`);
//     };

//     return (
//         <div>
//             <div className="relative flex items-center">
//                 <input
//                     type="text"
//                     placeholder="Search by category..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     disabled={isLoading}
//                     className={`px-4 w-[240px] py-2 rounded-full text-black placeholder-black focus:outline-none placeholder:opacity-35 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 />
//                 {isLoading ? (
//                     <Loader className="absolute right-3 text-black animate-spin" size={20} />
//                 ) : (
//                     <Search className="absolute right-3 text-black cursor-pointer" size={20} />
//                 )}
//             </div>

//             {/* Suggestions Dropdown */}
//             {search && filteredCategories.length > 0 && (
//                 <ul className="absolute bg-white mt-1 w-[240px] rounded-lg shadow-lg z-10">
//                     {filteredCategories.map((category) => (
//                         <li
//                             key={category}
//                             onClick={() => handleCategorySelect(category)}
//                             className="px-4 py-2 cursor-pointer hover:bg-yellow-200"
//                             dangerouslySetInnerHTML={{ __html: highlightMatch(category) }}
//                         />
//                     ))}
//                 </ul>
//             )}

//             {/* Display selected category message */}
//             {selectedCategory && !isLoading && (
//                 <div className="mt-2 text-sm text-green-600">
//                     Showing results for <strong>{selectedCategory}</strong>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SearchInput;















// // src/Search/SearchInput
import { Search, Loader } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../slices/productSlice';
import { setSearchResults } from '../slices/searchSlice';

const categories = ["electronics", "jewelry", "men's clothing", "women's clothing","mouse"];

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch();

    // Fetch products based on selected category or fetch all if none selected
    const { data: products, isLoading } = useGetProductsByCategoryQuery(selectedCategory || "all");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSearch(""); // Clear search after selection
    };

    useEffect(() => {
        if (products) {
            dispatch(setSearchResults(products)); // Store all or filtered products globally

            // Smooth scroll to Product Section
            const productSection = document.getElementById('product-section');
            if (productSection) {
                productSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [products, dispatch]);

    const filteredCategories = categories.filter((category) =>
        category.toLowerCase().includes(search.toLowerCase())
    );

    const highlightMatch = (text) => {
        const regex = new RegExp(`(${search})`, 'gi');
        return text.replace(regex, (match) => `<strong>${match}</strong>`);
    };

    return (
        <div>
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search by category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    disabled={isLoading}
                    className={`px-4 w-full md:w-[240px] py-2 rounded-full text-black placeholder-black focus:outline-none placeholder:opacity-35 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                {isLoading ? (
                    <Loader className="absolute right-3 text-black animate-spin" size={20} />
                ) : (
                    <Search className="absolute right-3 text-black cursor-pointer" size={20} />
                )}
            </div>

            {/* Suggestions Dropdown */}
            {search && filteredCategories.length > 0 && (
                <ul className="absolute bg-white mt-1 w-[240px] rounded-lg shadow-lg z-10">
                    {filteredCategories.map((category) => (
                        <li
                            key={category}
                            onClick={() => handleCategorySelect(category)}
                            className="px-4 py-2 cursor-pointer hover:bg-yellow-200"
                            dangerouslySetInnerHTML={{ __html: highlightMatch(category) }}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;

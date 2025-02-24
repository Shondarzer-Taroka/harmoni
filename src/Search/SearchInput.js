// // import { Search } from 'lucide-react';
// // import React, { useState } from 'react';

// // const SearchInput = () => {
// //     const [search, setSearch] = useState("");

// //     return (
// //         <div>
// //             <div className="relative flex items-center">
// //                 <input
// //                     type="text"
// //                     placeholder="What are you looking for?"
// //                     value={search}
// //                     onChange={(e) => setSearch(e.target.value)}
// //                     className="px-4 w-[240px] py-2 rounded-full  text-black placeholder-black focus:outline-none placeholder:opacity-35"
// //                 />
// //                 <Search className="absolute right-3 text-black cursor-pointer" size={20} />
// //             </div>
// //         </div>
// //     );
// // };

// // export default SearchInput;


// // src/Search/SearchInput

import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useGetProductsByCategoryQuery } from '../slices/productSlice';


const categories = ["electronics", "jewelry", "men's clothing", "women's clothing"];

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data: products, isLoading } = useGetProductsByCategoryQuery(selectedCategory, {
        skip: !selectedCategory,
    });

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSearch(category);
    };

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
                    placeholder="What are you looking for?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 w-[240px] py-2 rounded-full text-black placeholder-black focus:outline-none placeholder:opacity-35"
                />
                <Search className="absolute right-3 text-black cursor-pointer" size={20} />
            </div>

            {/* Suggestions */}
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














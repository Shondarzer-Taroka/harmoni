import React, { useState } from 'react';
import HeadBanner from './HeadBanner';
import PromoBanner from './PromoBanner';
import ProductSection from './ProductSection';
import FeatureProductHarmoni from './FeaturesProductHarmoni';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    return (
        <div>
            <HeadBanner />
            <PromoBanner />
            <ProductSection/>
            <FeatureProductHarmoni/>
        </div>
    );
};

export default HomePage;
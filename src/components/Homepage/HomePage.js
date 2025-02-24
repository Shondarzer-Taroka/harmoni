import React from 'react';
import HeadBanner from './HeadBanner';
import PromoBanner from './PromoBanner';
import ProductSection from './ProductSection';
import FeatureProductHarmoni from './FeaturesProductHarmoni';

const HomePage = () => {
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
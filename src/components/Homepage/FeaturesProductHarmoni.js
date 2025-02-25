import React from "react";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Truck size={32} className="text-white" />, 
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <Headphones size={32} className="text-white" />, 
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <ShieldCheck size={32} className="text-white" />, 
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const FeatureProductHarmoni = () => {
  return (
    <div className="w-full py-12 border-t my-11">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-black flex items-center justify-center rounded-full border-4 border-gray-300 mx-auto">
              {feature.icon}
            </div>
            <h3 className="font-bold mt-4 text-lg">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProductHarmoni;

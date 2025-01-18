import React from "react";
import { FaTruck, FaStar, FaRupeeSign, FaGift } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruck className="text-yellow-400 text-4xl mb-4" />,
      title: "Free Delivery",
      description: "Get your playing cards delivered at no extra cost, anywhere in India."
    },
    {
      icon: <FaStar className="text-yellow-400 text-4xl mb-4" />,
      title: "Premium Quality",
      description: "Our cards are made with the finest materials for durability and smooth play."
    },
    {
      icon: <FaRupeeSign className="text-yellow-400 text-4xl mb-4" />,
      title: "Affordable Pricing",
      description: "Only Rs. 10 per pack! Enjoy premium cards without breaking the bank."
    },
    {
      icon: <FaGift className="text-yellow-400 text-4xl mb-4" />,
      title: "Perfect Gift",
      description: "Ideal for gifting to friends and family who love playing cards."
    }
  ];

  return (
    <div className="w-full bg-black p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl text-yellow-400 font-bold mb-8 text-center">
        Why Choose Our Cards?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
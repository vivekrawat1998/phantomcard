import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the price of the playing cards?",
      answer: "The price of our premium playing cards is just ₹10 with free delivery across India."
    },
    {
      question: "Are the cards durable and of high quality?",
      answer: "Yes, our playing cards are made from high-quality materials, ensuring durability and an excellent playing experience."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major payment methods, including UPI, debit/credit cards, and net banking."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-5 business days depending on your location."
    },
    {
      question: "What should I do if I face an issue with my order?",
      answer: "If you have any issues with your order, please contact our support team through the whatsapp Link and provided contact Number."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-black p-6 rounded-xl shadow-xl mt-8">
      <h2 className="text-3xl text-yellow-400 font-bold mb-6 text-center">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg border-2 border-yellow-400 cursor-pointer transition hover:bg-gray-700"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-white font-semibold">{faq.question}</h3>
              {activeIndex === index ? (
                <FaChevronUp className="text-yellow-400" />
              ) : (
                <FaChevronDown className="text-yellow-400" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
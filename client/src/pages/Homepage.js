import React, { useRef } from "react";
import InputForm from "../components/inputform";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import ImageGallery from "../components/Imagegallery";

const Homepage = () => {
  const inputFormRef = useRef(null);

  const scrollToInputForm = () => {
    inputFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-auto mx-auto">
      <div>
        <Hero onBuyNowClick={scrollToInputForm} />
      </div>
      <div className="w-full pt-20 h-auto mx-auto p-4 bg-gradient-to-r from-[#C3AC44] to-black">
        <div className="mb-20">
          <Features />
        </div>
        <div className="text-center bg-center bg-contain  mb-6">
          <h1 className="md:text-3xl text-white font-semibold">
            Please fill out your address below, make the payment using the QR
            code, and upload a screenshot of the QR code after completing the
            payment. Once done, book your cards.
          </h1>
        </div>
        <div className="flex flex-col md:px-20 px-5 md:flex-row justify-between  items-center gap-6">
          <div className="flex-1 flex-shrink-0 text-center md:text-left">
            <img
              src="/images/phantomqr.jpeg"
              alt="QR Code"
              className="w-full max-w-[700px] rounded-xl mx-auto md:mx-0"
            />
          </div>
          <div ref={inputFormRef} className="flex-1 mt-20 flex-shrink-0">
            <InputForm />
          </div>
        </div>
        <div>
          <ImageGallery />
        </div>
        <div className="mt-10">
          <Testimonials />
        </div>
        <div>
          <Faq />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap mt-20 gap-6 justify-center">
      <div className="relative w-[350px] md:w-[450px]">
        <img
          src="/images/9G0A4425.jpg"
          alt="Image 2"
          className="w-full object-cover h-[480px] rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer transform translate-x-[-100%] hover:translate-x-0 transition-all duration-700 ease-in-out rounded-lg"></div>
      </div>

      <div className="relative w-[350px] md:w-[450px]">
        <img
          src="/images/9G0A4446.jpg"
          alt="Image 5"
          className="w-full object-cover h-[480px] rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer transform translate-x-[-100%] hover:translate-x-0 transition-all duration-700 ease-in-out rounded-lg"></div>
      </div>

      <div className="relative w-[350px] md:w-[450px]">
        <img
          src="/images/9G0A4454.jpg"
          alt="Image 6"
          className="w-full object-cover h-[480px] rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer transform translate-x-[-100%] hover:translate-x-0 transition-all duration-700 ease-in-out rounded-lg"></div>
      </div>

      <div className="relative w-[350px] md:w-[450px]">
        <img
          src="/images/9G0A4473.jpg"
          alt="Image 9"
          className="w-full object-cover h-[480px] rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer transform translate-x-[-100%] hover:translate-x-0 transition-all duration-700 ease-in-out rounded-lg"></div>
      </div>

      <div className="relative w-[350px] md:w-[450px]">
        <img
          src="/images/9G0A4493.jpg"
          alt="Image 11"
          className="w-full object-cover h-[480px] rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 cursor-pointer transform translate-x-[-100%] hover:translate-x-0 transition-all duration-700 ease-in-out rounded-lg"></div>
      </div>
    </div>
  );
};

export default ImageGallery;

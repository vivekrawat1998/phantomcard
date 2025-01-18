import React from "react";

const Hero = ({onBuyNowClick}) => {
  return (
    <div
      className="w-full p-2 h-screen mx-auto relative bg-cover overflow-hidden bg-center"
      style={{
        backgroundImage: `url('/images/bg.webp')`,
      }}
    >
      <div className="flex flex-col  md:px-20 px-5 md:flex-row justify-between items-center gap-6">
        <div className="w-full flex-1 flex-shrink-0 h-[100vh] text-center text-white">
          <img
            className="md:max-w-[600px] h-full object-contain"
            src="/images/cards.png"
            alt=""
          />
        </div>
        <div className=" flex-1 flex-shrink-0">
          <h1 className="font-quiverleaf md:text-[6rem] text-[3rem] uppercase text-center md:leading-[110px] leading-[50px] text-[#FFEF7C]">
           Phantom777 Premium Playing Cards For Every game Night
          </h1>
          <h3 className="text-white md:text-[40px] text-[20px] mt-5 text-center ">
            Get yours today with FREE Delivery for
          </h3>
          <div className="grid place-items-center md:w-[600px]  md:h-[20vh]  w-[250px] md:pl-[10vw] ml-10   h-[2vh] mt-10 md:space-y-10 space-y-5">
            <img alt="" src="/images/just ₹10.png" className="w-full h-full object-contain" />
            <img onClick={onBuyNowClick}  alt="" src="/images/whatsapp.png" className="w-full h-full  cursor-pointer object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Hero;

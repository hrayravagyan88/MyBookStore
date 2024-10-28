import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full flex items-center justify-center py-10 sm:py-0 ">
        <img className=" w-full" src={assets.BigPic} />
      </div>
    </div>
  );
};

export default Hero;

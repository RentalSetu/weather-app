import React from "react";
import marker from "../assets/Vector.png";
import chevronRight from "../assets/chevron-right.png";
import cloud from "../assets/cloud.png";

const Header = () => {
  return (
    <div className="flex w-full justify-between ">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-white justify-center items-center">
            <img src={marker} alt="marker" className="w-4 h-5" />
            <h1 className="font-inter font-medium text-[24px]">New York</h1>
            <img src={chevronRight} alt="marker" className="w-5 h-5" />
          </div>
          <h1 className="font-medium font-inter text-5xl text-white">Cloudy</h1>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="font-medium font-inter text-6xl text-white">26°C</h1>
          <h1 className="font-normal font-inter text-[18px] text-white">
            Sunday | 12 Dec 2023
          </h1>
        </div>
      </div>
      <div>
        <img src={cloud} alt="cloud" className="w-[321px] h-[254px]" />
      </div>
    </div>
  );
};

export default Header;

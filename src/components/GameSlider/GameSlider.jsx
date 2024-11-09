import React from "react";
import sliderBackground from "../../../public/assets/slider/sliderbackground.png";
import Image from "next/image";
const GameSlider = () => {
  return (
    <div className="absolute bottom-4 left-20  w-full px-4 z-10">
      {/* Background Sidebar Image */}
      <Image
        src={sliderBackground}
        alt="Sidebar Container"
        className=""
        priority
      />
    </div>
  );
};

export default GameSlider;

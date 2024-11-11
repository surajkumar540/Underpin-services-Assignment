"use client";
import React, { useRef, useState } from "react";
import sliderBackground from "../../../public/assets/slider/sliderbackground.png";
import slider1 from "../../../public/assets/slider/slider1.png";
import slider2 from "../../../public/assets/slider/slider2.png";
import slider3 from "../../../public/assets/slider/slider3.png";
import Image from "next/image";

const GameSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const tabs = [
    { id: 0, img: slider1 },
    { id: 1, img: slider2 },
    { id: 2, img: slider3 },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    if (!sliderRef.current) return;

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="z-50 pl-[140px] md:pl-[200px] mt-[135px] hidden lg:block">
      <div className="absolute top-[176px]">
        {/* sliderBackground image */}
        <Image
          src={sliderBackground}
          alt={`Slider image bac}`}
          priority
          className=" h-[565px] md:h-[665px] w-[267px] sm:w-[268px]"
          unoptimized
        />
      </div>
      <div className=" w-[250px]  custom-scrollbar-hide mt-[63px] md:mt-[61px] pl-[18px] border-none ">
        <div
          ref={sliderRef}
          className="relative flex overflow-x-auto p-0  scrollbar-hide scroll-smooth border-none "
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* All three slider image */}
          {tabs.map((tab, index) => (
            <Image
              key={index}
              src={tab.img}
              alt={`Slider image ${index + 1}`}
              priority
              className="object-left-bottom w-[330x] md:h-[625px] h-[524.5px] border-none"
              unoptimized
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSlider;

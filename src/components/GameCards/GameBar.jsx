"use client";
import React, { useRef, useState } from "react";
import gamecard from "../../../public/assets/slider/game.png";
import Image from "next/image";

const GameBar = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Double the tabs to create two rows
  const tabs = [
    { id: 0, img: gamecard },
    { id: 1, img: gamecard },
    { id: 2, img: gamecard },
    { id: 3, img: gamecard },
    { id: 4, img: gamecard },
    { id: 5, img: gamecard },
    { id: 6, img: gamecard },
    { id: 7, img: gamecard },
    { id: 8, img: gamecard },
    { id: 9, img: gamecard },
    { id: 10, img: gamecard },
    { id: 11, img: gamecard },
  ];
  const rows = [tabs, tabs]; // Two rows with the same set of images

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
    <div className="z-50 md:pl-[50px] mt-[135px] hidden lg:block">
      <div className="w-full custom-scrollbar-hide mt-[63px] md:mt-[61px] pl-[18px] border-none">
        <div
          ref={sliderRef}
          className="relative flex flex-col space-y-10 overflow-x-auto p-0 scrollbar-hide scroll-smooth border-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-10">
              {row.map((tab, index) => (
                <Image
                  key={index}
                  src={tab.img}
                  alt={`Game card image ${index + 1}`}
                  priority
                  className="objec w-[433.09px] h-[300px] z-50"
                  unoptimized
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBar;
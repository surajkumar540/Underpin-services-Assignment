"use client";
import React, { useRef, useState } from "react";
import gamecard from "../../../public/assets/slider/game.png";
import Image from "next/image";
import GameCard from "./GameCard";

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
    <div className="z-50 absolute md:relative left-40 lg:left-0 lg:pl-[50px] mt-[170px] md:mt-[135px] ">
      <div className="w-full custom-scrollbar-hide mt-[63px] md:mt-[61px] md:pl-[18px] border-none">
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
            <GameCard row={row} key={rowIndex}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBar;

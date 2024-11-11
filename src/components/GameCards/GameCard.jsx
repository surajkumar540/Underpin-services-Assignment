import Image from "next/image";
import React from "react";

const GameCard = ({ row }) => {
  return (
    <div className="flex space-x-10">
      {row.map((tab, index) => (
        <Image
          key={index}
          src={tab.img}
          alt={`Game card image ${index + 1}`}
          priority
          className=" w-[280.09px] md:w-[433.09px] md:h-[300px] z-50"
          unoptimized
        />
      ))}
    </div>
  );
};

export default GameCard;

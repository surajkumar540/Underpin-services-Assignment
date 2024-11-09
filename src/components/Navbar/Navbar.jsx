import React from "react";
import user from "../../../public/assets/navbar/user.png";
import chipImg from "../../../public/assets/navbar/chip.png";
import gameTitle from "../../../public/assets/navbar/gametitle.png";
import arrowsIn from "../../../public/assets/navbar/arrowsIn.png";
import hamburger from "../../../public/assets/navbar/hamburger.png";
import coin from "../../../public/assets/navbar/coin.png";
import pluscircle from "../../../public/assets/navbar/pluscircle.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className=" top-0 left-0 w-full text-white md:px-4 z-10 absolute">
      <div className="px-4 flex justify-center items-center w-full">
        {/* Left side images */}
        <div className="flex md:space-x-[43px] md:flex-row flex-col">
          <div className=" w-full ">
            <Image
              src={user}
              alt="user"
              className=" w-[66.43px] md:w-[91.43px]  md:h-[91.43px]"
              unoptimized
            />
          </div>
          <div className="xl:flex space-x-4 md:flex-row flex-col hidden ">
            <div className="relative flex justify-center items-center">
              {/* Text Box */}
              <div
                className="w-[180px] h-[40px] pl-5 rounded-3xl flex justify-center items-center relative"
                style={{
                  background:
                    "linear-gradient(0deg, #505050 0.04%, #313131 78.99%)",
                }}
              >
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r text-[30px] font-thin from-[#F4D869] via-[#D59A2D] to-[#FBE767] text-xl"
                  style={{
                    background:
                      "linear-gradient(270deg, #F4D869 0%, #D59A2D 20.5%, #FBE767 39.5%, #D59A2D 60%, #FBE767 79.5%, #C9A541 100%), linear-gradient(47.52deg, #AE5D23 20.65%, #FFC87F 48.12%, #B1603C 74.94%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  0.00
                </span>
              </div>

              {/* Left Image */}
              <div className="absolute left-0">
                <Image
                  src={coin}
                  alt="Left Icon"
                  className="w-[55.71px] h-[55.71px]"
                  unoptimized
                />
              </div>

              {/* Right Image */}
              <div className="absolute -right-7 bottom-2">
                <Image
                  src={pluscircle}
                  alt="Right Icon"
                  className="transform -translate-x-1/2 -translate-y-1/2 bg-white w-[37.1px] h-[37.1px] border-white border-2 rounded-full"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center flex-grow ">
          <div>
            <Image
              src={gameTitle}
              alt="logo"
              className=" w-[215.38px] sm:w-[400px] md:w-[450px] lg:w-[515.38px] lg:h-[180px] ml-[15px] xl:mr-40"
              unoptimized
            />
          </div>
        </div>

        {/* Right side images */}
        <div className="flex space-x-8 md:flex-row flex-col">
          <div className="relative hidden lg:block ">
            <Image
              src={chipImg}
              alt="chip image"
              className="w-[64.52px] h-[64.52px]"
              unoptimized
            />
            <Image
              src={arrowsIn}
              alt="arrowsIn"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28.5px] h-[28.5px]"
              unoptimized
            />
          </div>

          <div clas>
            <div className="relative ">
              <Image
                src={chipImg}
                alt="hamburger"
                className="  md:w-[64.52px]  md:h-[64.52px]"
                unoptimized
              />
              <Image
                src={hamburger}
                alt="arrowsIn"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25.16px] h-[20.72px]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

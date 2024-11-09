import React from "react";
import sidebarContainer from "../../../public/assets/sidebar/sidebarcontainer.png";
import activeBar from "../../../public/assets/sidebar/activebar.png";
import cardsBar from "../../../public/assets/sidebar/cardsbar.png";
import dolfin from "../../../public/assets/sidebar/dolfin.png";
import gamebar from "../../../public/assets/sidebar/gamebar.png";
import heartbar from "../../../public/assets/sidebar/heartbar.png";
import rollerbar from "../../../public/assets/sidebar/rollerbar.png";
import stable from "../../../public/assets/sidebar/stable.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="absolute bottom-4 left-0 w-full px-4 z-10">
      {/* Background Image */}
      <Image
        src={sidebarContainer}
        alt="Sidebar Container"
        className="w-[160px] md:w-[200px] object-cover relative"
        priority
      />

      {/* Overlaying Images */}
      <div className="absolute  left-[37px] top-[0px]">
        <div className="relative w-[160.29px] h-[188.43px] mx-auto mt-[27px]">
          {/* Active Bar Image (centered over sidebarContainer) */}
          <Image
            src={activeBar}
            alt="Active Container"
            className="absolute inset-0 w-full h-full m-auto"
            priority
          />

          {/* Game Bar Image (centered over activeBar) */}
          <div>
            <Image
              src={gamebar}
              alt="Game Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110.13px] h-[131.69px]"
              priority
            />

            <div className="text-white absolute -bottom-3 right-[30px] font-bold text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow shadow-xl">
              ALL
            </div>
          </div>
        </div>
      </div>

      <div className="absolute  left-[37px] top-[160px]">
        <div className="relative w-[160.29px] h-[188.43px] mx-auto mt-[27px]">
          {/* Game Bar Image (centered over activeBar) */}
          <div>
            <Image
              src={heartbar}
              alt="heart Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150.13px] h-[131.69px]"
              priority
            />

            <div className="text-white absolute -bottom-4 -right-[55px] font-bold text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow shadow-xl">
              FAVORITE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

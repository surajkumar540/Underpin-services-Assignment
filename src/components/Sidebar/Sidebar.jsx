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
    <div className="absolute bottom-4 w-full px-4 z-10">
      {/* Background Image */}
      <Image
        src={sidebarContainer}
        alt="Sidebar Container"
        className="w-[160px] md:w-[200px] object-cover relative"
        priority
      />

      {/* All Section */}
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

      {/* Heart Section */}
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

            <div
              className="absolute -bottom-4 -right-[55px] font-bold text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)",
              }}
            >
              FAVORITE
            </div>
          </div>
        </div>
      </div>

      {/* Slots Section */}
      <div className="absolute  left-[37px] top-[320px]">
        <div className="relative w-[160.29px] h-[188.43px] mx-auto mt-[27px]">
          {/* Game Bar Image (centered over activeBar) */}
          <div>
            <Image
              src={rollerbar}
              alt="heart Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150.13px] h-[131.69px]"
              priority
            />

            <div
              className="absolute -bottom-4 -right-[3px] font-bold text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)",
              }}
            >
              SLOTS
            </div>
          </div>
        </div>
      </div>

      {/* Dophin Section */}
      <div className="absolute  left-[37px] top-[480px]">
        <div className="relative w-[160.29px] h-[188.43px] mx-auto mt-[27px]">
          {/* Game Bar Image (centered over activeBar) */}
          <div>
            <Image
              src={dolfin}
              alt="dolfin Bar"
              className="absolute top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105px] h-[60.2px]"
              priority
            />

            <Image
              src={stable}
              alt="dolfin Bar"
              className="absolute top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[43.87px] h-[22.5px]"
              priority
            />

            <div
              className="absolute -bottom-4 -right-[55px] font-bold text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)",
              }}
            >
              FAVORITE
            </div>
          </div>
        </div>
      </div>

      {/* CardsBar Section */}
      <div className="absolute  left-[37px] top-[640px]">
        <div className="relative w-[160.29px] h-[188.43px] mx-auto mt-[27px]">
          {/* Game Bar Image (centered over activeBar) */}
          <div>
            <Image
              src={cardsBar}
              alt="heart Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150.13px] h-[131.69px]"
              priority
            />

            <div
              className="absolute -bottom-4 -right-[13px] font-bold text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)",
              }}
            >
              OTHER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

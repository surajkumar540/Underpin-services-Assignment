import React from "react";
import activeBar from "../../../public/assets/sidebar/activebar.png";
import cardsBar from "../../../public/assets/sidebar/cardsbar.png";
import dolfin from "../../../public/assets/sidebar/dolfin.png";
import gamebar from "../../../public/assets/sidebar/gamebar.png";
import heartbar from "../../../public/assets/sidebar/heartbar.png";
import rollerbar from "../../../public/assets/sidebar/rollerbar.png";
import stable from "../../../public/assets/sidebar/stable.png";
import Image from "next/image";

const SidebarCard = () => {
  return (
    <div>
      {/* All Section */}
      <div className="absolute left-[32px] md:left-[37px] top-[0px]">
        <div className="relative w-[130px] md:w-[160.29px] h-[148.43px] md:h-[188.43px] md:mx-auto mt-[20px] md:mt-[27px]">
          <Image
            src={activeBar}
            alt="Active Container"
            className="absolute inset-0 w-full h-full m-auto"
            priority
          />

          <div>
            <Image
              src={gamebar}
              alt="Game Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] md:w-[110.13px] h-[100px] md:h-[131.69px]"
              priority
            />
            <div className="text-white absolute -bottom-3 right-[30px] font-bold text-[20px] md:text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow shadow-xl">
              ALL
            </div>
          </div>
        </div>
      </div>

      {/* Heart Section */}
      <div className="absolute left-[36px] md:left-[37px] top-[110px] md:top-[160px]">
        <div className="relative w-[125px] md:w-[160.29px] h-[188.43px] md:mx-auto mt-[20px] md:mt-[27px]">
          <div>
            <Image
              src={heartbar}
              alt="Heart Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] md:w-[150.13px] h-[90px] md:h-[131.69px]"
              priority
            />
            <div
              className="absolute bottom-1 md:-bottom-4 -right-[30px] md:-right-[55px] font-bold text-[20px] md:text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
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
      <div className="absolute left-[36px] md:left-[37px] top-[240px] md:top-[320px]">
        <div className="relative w-[125px] md:w-[160.29px] h-[188.43px] mx-auto mt-[20px] md:mt-[27px]">
          <div>
            <Image
              src={rollerbar}
              alt="Slots Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] md:w-[150.13px] h-[90px] md:h-[131.69px]"
              priority
            />
            <div
              className="absolute bottom-1 md:-bottom-4 right-[6px] md:right-[3px] font-bold text-[20px] md:text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
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

      {/* Dolphin Section */}
      <div className="absolute left-[20px] md:left-[37px] top-[370px] md:top-[480px]">
        <div className="relative w-[160px] md:w-[160.29px] h-[188.43px] mx-auto mt-[20px] md:mt-[27px]">
          <div>
            <Image
              src={dolfin}
              alt="Dolphin Bar"
              className="absolute top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] md:w-[105px] h-[40px] md:h-[60.2px]"
              priority
            />
            <Image
              src={stable}
              alt="Stable Bar"
              className="absolute top-[120px] md:top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] md:w-[43.87px] h-[15px] md:h-[22.5px]"
              priority
            />
            <div
              className="absolute bottom-1 md:-bottom-4 -right-[10px] md:-right-[55px] font-bold text-[20px] md:text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
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

      {/* Cards Bar Section */}
      <div className="absolute left-[32px] md:left-[37px] top-[500px] md:top-[640px]">
        <div className="relative w-[130px] md:w-[160.29px] h-[188.43px] mx-auto mt-[20px] md:mt-[27px]">
          <div>
            <Image
              src={cardsBar}
              alt="Cards Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] md:w-[150.13px] h-[90px] md:h-[131.69px]"
              priority
            />
            <div
              className="absolute bottom-4 md:-bottom-4 -right-[0px] md:-right-[13px] font-bold text-[20px] md:text-[29.71px] transform -translate-x-1/2 -translate-y-1/2 shadow-glow text-transparent bg-clip-text"
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

export default SidebarCard;

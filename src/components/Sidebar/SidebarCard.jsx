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
      <div className="absolute left-[7px] md:left-[7px] -top-[14px] md:top-[0px]">
        <div className="relative w-[130px] md:w-[160.29px] h-[148.43px] md:h-[188.43px] md:mx-auto mt-[14px] md:-mt-[6px]">
          <Image
            src={activeBar}
            alt="Active Container"
            className="absolute inset-0 w-[86px] md:w-[110px] h-[120px] md:h-[140px] m-auto"
            priority
          />

          <div>
            <Image
              src={gamebar}
              alt="Game Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] md:w-[90.13px] h-[80px] md:h-[111.69px]"
              priority
            />
            <div className="text-white absolute bottom-0 md:bottom-2 right-[30px] md:right-[40px] font-bold text-[20px] md:text-[22.71px] transform -translate-x-1/2 -translate-y-1/2  shadow-xl">
              ALL
            </div>
          </div>
        </div>
      </div>

      {/* Heart Section */}
      <div className="absolute left-[10px] md:left-[7px] top-[55px] md:top-[90px]">
        <div className="relative w-[125px] md:w-[160.29px] h-[188.43px] md:mx-auto mt-[25px] md:mt-[27px]">
          <div>
            <Image
              src={heartbar}
              alt="Heart Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] md:w-[100.13px] h-[84px] md:h-[90.69px]"
              priority
            />
            <div
              className="absolute bottom-6 md:bottom-4 -right-[11px] md:-right-[10px] font-bold text-[16px] md:text-[20px] transform -translate-x-1/2 -translate-y-1/2  text-transparent bg-clip-text"
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
      <div className="absolute left-[10px] md:left-[6px] top-[175px] md:top-[205px]">
        <div className="relative w-[125px] md:w-[160.29px] h-[188.43px] mx-auto mt-[4px] md:mt-[27px]">
          <div>
            <Image
              src={rollerbar}
              alt="Slots Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90.13px]  h-[90.69px]"
              priority
            />
            <div
              className="absolute bottom-6 md:bottom-3 right-[17px] md:right-[23px] font-bold text-[16px] md:text-[20px] transform -translate-x-1/2 -translate-y-1/2  text-transparent bg-clip-text"
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
      <div className="absolute -left-[6px] md:left-[6px] top-[270px] md:top-[330px]">
        <div className="relative w-[160px] md:w-[160.29px] h-[188.43px] mx-auto mt-[20px] md:mt-[24px]">
          <div>
            <Image
              src={dolfin}
              alt="Dolphin Bar"
              className="absolute top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] md:w-[75px] h-[40px] md:h-[50.2px]"
              priority
            />
            <Image
              src={stable}
              alt="Stable Bar"
              className="absolute top-[114px] md:top-[120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] md:w-[35.87px] h-[15px] md:h-[19.5px]"
              priority
            />
            <div
              className="absolute bottom-8 md:bottom-4 right-[8px] md:-right-[14px] font-bold text-[16px] md:text-[20px] transform -translate-x-1/2 -translate-y-1/2  text-transparent bg-clip-text"
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
      <div className="absolute left-[8px] md:left-[6px] top-[380px] md:top-[436px]">
        <div className="relative w-[130px] md:w-[160.29px] h-[188.43px] mx-auto mt-[0px] md:mt-[27px]">
          <div>
            <Image
              src={cardsBar}
              alt="Cards Bar"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] md:w-[80.13px] h-[80px] md:h-[80.69px]"
              priority
            />
            <div
              className="absolute bottom-8 md:bottom-4 right-[13px] md:right-[14px] font-bold text-[16px] md:text-[20px] transform -translate-x-1/2 -translate-y-1/2  text-transparent bg-clip-text"
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

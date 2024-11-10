import React from "react";
import sidebarContainer from "../../../public/assets/sidebar/sidebarcontainer.png";

import Image from "next/image";
import SidebarCard from "./SidebarCard";

const Sidebar = () => {
  return (
    <div className="absolute top-[190px] w-full px-4 z-10">
      {/* Background Sidebar Image */}
      <Image
        src={sidebarContainer}
        alt="Sidebar Container"
        className="h-[550px] md:h-[650px] w-[110px] md:w-[140px]"
        priority
      />

      {/* Sidebar section  */}
      <SidebarCard />
    </div>
  );
};

export default Sidebar;

import React from "react";
import sidebarContainer from "../../../public/assets/sidebar/sidebarcontainer.png";

import Image from "next/image";
import SidebarCard from "./SidebarCard";

const Sidebar = () => {
  return (
    <div className="absolute top-36 w-full px-4 z-10">
      {/* Background Sidebar Image */}
      <Image
        src={sidebarContainer}
        alt="Sidebar Container"
        className="w-[160px] md:w-[200px] object-cover relative"
        priority
      />

      {/* Sidebar section  */}
      <SidebarCard />
    </div>
  );
};

export default Sidebar;

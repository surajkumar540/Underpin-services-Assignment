import Image from "next/image";
import React from "react";
import dashboard from "../../../public/assets/navbar/dashboard.png";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import GameSlider from "@/components/GameSlider/GameSlider";

const Dashboard = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Full screen background image */}
      <Image
        src={dashboard}
        alt="Background Image"
        layout="fill" // Ensure the image covers the entire screen
        objectFit="cover" // Maintains the aspect ratio and covers the screen
        className="absolute top-0 left-0 z-0 "
      />
      {/* Overlay content (navbar, sidebar, etc.) */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />
          <GameSlider />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

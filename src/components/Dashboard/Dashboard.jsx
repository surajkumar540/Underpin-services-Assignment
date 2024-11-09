import Image from "next/image";
import React from "react";
import dashboard from "../../../public/assets/navbar/dashboard.png";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

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

          {/* Main dashboard content can go here */}
          {/* <div className="flex-1 p-5">
            <h1 className="text-3xl text-white">Dashboard Content</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

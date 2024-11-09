import Image from "next/image";
import React from "react";
import dashboard from "../../../public/assets/navbar/dashboard.png";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <div className="relative h-screen overflow-y-hidden ">
        {/* Full screen background image */}
        <Image
          src={dashboard}
          alt="Background Image"
          layout="fill"
          objectPosition="center" // Centers the image within the div
          priority // Optional: ensures the image is prioritized in loading
          className="object-fill"
        />

        {/* Navbar */}
        <Navbar />
      </div>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default Dashboard;

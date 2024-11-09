import React from "react";
import dashboard from "../../../public/assets/navbar/dashboard.png";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="relative h-screen">
      {/* Full screen background image */}
      <Image
        src={dashboard} // Replace with your image path
        alt="Background Image"
        layout="fill"
        objectFit="cover" // Ensures the image covers the entire div
        objectPosition="center" // Centers the image within the div
        priority // Optional: ensures the image is prioritized in loading
      />

     
    </div>
  );
};

export default Dashboard;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import backgroundImg from "../../../public/assets/navbar/dashboard.png";

const Login = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newObject = { ...formValues, [name]: value };
    setFormValues({ ...newObject });
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      {/* Background Image */}
      <Image
        src={backgroundImg}
        alt="Background"
        layout="fill"
        objectFit="cover" // Maintains the aspect ratio and covers the screen
        className="absolute top-0 left-0 z-0 "
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 -z-10"></div>
      {/* Black overlay with 50% opacity */}
      {/* Content Overlay */}
      <div className="flex justify-evenly items-center w-[95%] md:w-[800px] rounded-3xl relative py-10 bg-white/90 backdrop-blur-sm">
        <div
          className="flex gap-4 items-center absolute top-5 left-4 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span className="text-xl cursor-pointer font-extrabold hover:scale-105 ease-in-out duration-500">
            RANOLPH
          </span>
        </div>
        <div className="flex flex-col flex-[0.8] lg:flex-[0.5] gap-6 items-center justify-center pt-16">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl sm:text-4xl font-semibold">
              Welcome back!
            </div>
            <div className="text-xs font-normal text-center w-[80%] lg:w-[60%]">
              Just Click on Login Button{" "}
              <span className="font-bold text-orange-500">RANOLPH</span>. Get
              started for free.
            </div>
          </div>

          <form className="w-full">
            <div className="flex flex-col justify-center ite gap-8 mb-10 w-full h-full">
              <div className="flex flex-col justify-center items-start">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  className="h-[50px] w-full rounded-md pl-5 "
                />
              </div>

              <div className="flex flex-col justify-center items-start">
                <label className="font-semibold">Password</label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formValues.password}
                    placeholder="Enter password here"
                    onChange={handleChange}
                    className="h-[50px] w-full rounded-md pl-5"
                  />
                  <div
                    className="absolute h-full flex items-center right-0 top-0 px-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <div>👁️</div> : <div>👁️</div>}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button" //  to avoid form submission
              className="w-full py-6 rounded-2xl text-white bg-neutral-900 hover:bg-neutral-800"
              onClick={(event) => {
                event.preventDefault(); // Prevent default form submission
                router.push("/dashboard"); // Redirect to dashboard
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <input
          type="text"
          placeholder="Email/Phone"
          className="border border-medium-green rounded-sm p-2 outline-medium-green w-full"
        />
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="border border-medium-green rounded-sm p-2 outline-medium-green w-full"
        />
        <button
          onClick={handleShowPassword}
          className="text-medium-green absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div>
        <a href="#" className="text-medium-green">
          Forgot Password?
        </a>
      </div>

      <div>
        <input type="checkbox" id="checkbox" className="cursor-pointer" />
        <label htmlFor="checkbox" className="pl-1 text-gray-500">
          Remember me
        </label>
      </div>

      <button className="bg-medium-green text-white py-2 px-[20%] rounded">
        Login
      </button>

      <div className="flex gap-1">
        <p className="text-gray-500">Not a member?</p>
        <a href="#" className="text-medium-green">
          Sign Up!
        </a>
      </div>
    </div>
  );
};

export default LoginInfo;

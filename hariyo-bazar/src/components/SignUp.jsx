import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          className="border border-medium-green rounded-sm p-2 outline-medium-green w-full"
        />
      </div>
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
          placeholder="Choose Password"
          className="border border-medium-green rounded-sm p-2 outline-medium-green w-full"
        />
        <button
          onClick={handleShowPassword}
          className="text-medium-green absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
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
        <input
          type="checkbox"
          id="checkbox"
          className="cursor-pointer checked:bg-medium-green"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox" className="pl-1 text-gray-500 ">
          Receive exclusive offers via SMS
        </label>
      </div>

      <button className="bg-medium-green text-white py-2 px-[20%] rounded">
        Sign Up
      </button>

      <p className="text-gray-400 text-sm">
        By clicking “Sign Up”, I agree to Hariyo Bazar's Terms of Use and
        Privacy Policy.
      </p>
    </div>
  );
};

export default SignUp;

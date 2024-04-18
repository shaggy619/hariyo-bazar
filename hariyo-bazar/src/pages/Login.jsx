import React from "react";
import Divider from "../components/Divider";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginInfo from "../components/LoginInfo";

const Login = () => {
  return (
    <>
      <div className="lg:w-[40%] mx-auto max-sm:w-[90%] md:w-[60%] shadow-customxl flex flex-col justify-center items-center rounded overflow-hidden pt-10 my-10">
        <h2 className="font-medium text-lg">Sign In</h2>
        <p className=" text-gray-500">Sign in and start shopping!</p>
        <div className="flex flex-col w-[60%] gap-y-2 relative pt-5">
          <div className="flex justify-between items-center gap-1 border rounded text-white my-2">
            <button className=" bg-medium-green w-full rounded-l py-2">
              Sign In
            </button>
            <button className=" border-medium-green w-full rounded-r py-2 text-dark-green">
              Sign Up
            </button>
          </div>
          <LoginInfo />
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Login;

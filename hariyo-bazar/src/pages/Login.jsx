import React, { useState } from "react";
import Divider from "../components/Divider";
import LoginInfo from "../components/LoginInfo";
import SignUp from "../components/SignUp.jsx";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [signInMode, setSignInMode] = useState(true);

  const toggleMode = () => {
    setSignInMode(!signInMode);
  };
  const signUpIcons = [
    {
      id: 1,
      href: "",
      logo: <FaFacebookF />,
    },

    {
      id: 2,
      href: "",
      logo: <FaGoogle />,
    },

    {
      id: 3,
      href: "",
      logo: <FaTwitter />,
    },
  ];

  return (
    <>
      <div className="lg:w-[40%] mx-auto max-sm:w-[90%] md:w-[60%] shadow-customxl flex flex-col justify-center items-center rounded overflow-hidden pt-10 my-10">
        <h2 className="font-medium text-lg">
          {signInMode ? "Sign In" : "Sign Up"}
        </h2>
        <p className="text-gray-500">
          {signInMode
            ? "Sign in and start shopping!"
            : "Create an account to start shopping!"}
        </p>
        <div className="flex flex-col w-[60%] gap-y-2 relative pt-5">
          <div className="flex justify-between items-center gap-1 border rounded text-white my-2">
            <button
              className={`${
                signInMode
                  ? "bg-medium-green text-white"
                  : "bg-white text-dark-green"
              } w-full rounded-l py-2`}
              onClick={signInMode ? null : toggleMode}
            >
              Sign In
            </button>
            <button
              className={`${
                signInMode
                  ? "border-medium-green"
                  : "bg-medium-green text-white"
              } w-full rounded-r py-2 text-dark-green`}
              onClick={signInMode ? toggleMode : null}
            >
              Sign Up
            </button>
          </div>
          {signInMode ? <LoginInfo /> : <SignUp />}
        </div>

        <div className="flex items-center justify-center text-gray-400 pt-4 w-[60%]  my-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="px-2">Or {signInMode ? "Signin" : "Signup"} With</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <ul className="flex justify-center items-center gap-2">
          {signUpIcons.map(({ id, logo, href }) => (
            <li
              key={id}
              className="rounded-full bg-medium-green text-white p-1"
            >
              <a href={href}>{logo}</a>
            </li>
          ))}
        </ul>
        <Divider />
      </div>
    </>
  );
};

export default Login;

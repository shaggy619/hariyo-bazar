import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleOnclick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const cartItemCount = 3;

  return (
    <header className="w-full bg-white  bg-opacity-80 backdrop-blur-lg fixed shadow top-0 z-20">
      <p className="bg-medium-green text-white text-center py-1 font-josefin-sans max-sm:text-sm max-md:text-base max-lg:text-lg">
        Get upto 70% off on plants!
      </p>
      <nav
        className="flex items-center max-sm:py-3 py-5 w-[80%] max-sm:w-[90%] m-auto relative"
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-initial gap-5 items-center">
          <h2 className="text-medium-green font-josefin-sans font-semibold text-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl">
            <a href="#" className="max-sm:hidden">
              Hariyo Bazar
            </a>
            <a href="#" className="hidden max-sm:block">
              {" "}
              <img src="favicon.png" alt="" className="w-[1.8em]" />{" "}
            </a>
          </h2>
        </div>
        <div className="flex flex-1 items-center justify-center max-sm:w-full">
          <input
            type="text"
            placeholder="Search"
            className=" bg-gray-100 rounded-full px-5 max-sm:py-1 py-2 w-[80%] max-sm:w-[100%]  ml-3 focus:outline-medium-green"
          />
          <button className="relative right-10 max-sm:right-7">
            <CiSearch className="max-sm:text-lg text-xl text-gray-400 " />
          </button>
        </div>

        <div className="flex gap-7 max-lg:gap-3 items-center">
          <div>
            <a href="">
              <BsHeart className="text-xl text-medium-green" />
            </a>
          </div>
          <div className="relative">
            <a href="">
              <GiShoppingCart className="text-3xl text-medium-green" />
            </a>
            {cartItemCount > 0 && (
              <div className="absolute top-[-3px] right-[-4px] bg-medium-green text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">
                {cartItemCount}
              </div>
            )}
          </div>
          <div>
            <a>
              <FaUserCircle
                className="text-2xl border border-medium-green rounded-full text-medium-green hidden max-md:block"
                onClick={handleOnclick}
              />
            </a>
          </div>

          <div
            className="flex items-center gap-2 rounded-full px-5 py-1 shadow cursor-pointer max-md:hidden"
            onMouseOver={handleMouseEnter}
          >
            <div>
              <p>Account</p>
              <p className="text-xs text-center">Sign In</p>
            </div>
            <FaUserCircle className="text-3xl text-medium-green" />
          </div>
          {isMenuOpen && <Menu />}
          {isClicked && <Menu handleOnclick={handleOnclick} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

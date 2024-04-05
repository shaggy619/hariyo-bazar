import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="relative shadow z-20">
      <p className="bg-medium-green text-white text-center py-1 font-josefin-sans">
        Get upto 70% off on plants!
      </p>
      <nav className="flex justify-between items-center max-w-screen-2xl py-5 w-4/5 m-auto">
        <div className="flex gap-5 items-center">
          <h2 className="text-medium-green font-josefin-sans font-semibold text-3xl">
            <a href="#">Hariyo Bazar</a>
          </h2>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="appearance-none bg-gray-100 rounded-full px-5 py-2 w-[400px] ml-3 focus:outline-medium-green"
          />
          <button>
            <CiSearch className="text-xl text-gray-400 relative right-10" />
          </button>
        </div>
        <div className="flex gap-7 items-center">
          <div>
            <a href="">
              <BsHeart className="text-xl text-medium-green" />
            </a>
          </div>
          <div>
            <a href="">
              <GiShoppingCart className="text-3xl text-medium-green" />
            </a>
          </div>

          <div className="flex items-center gap-2 rounded-full px-5 py-1 shadow cursor-pointer">
            <div>
              <p>Account</p>
              <p className="text-xs text-center">Sign In</p>
            </div>
            <FaUserCircle className="text-3xl text-medium-green" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

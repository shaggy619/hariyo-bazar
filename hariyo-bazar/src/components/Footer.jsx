import React from "react";
import Divider from "./Divider";
import { MdMail } from "react-icons/md";
import { FaPhone, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <Divider />
      <div className="bg-medium-green mt-[-0.1rem] relative ">
        <div className="w-[80%] m-auto">
          <div className="flex justify-between pt-3 pb-5">
            <div className="flex items-center">
              <img
                src="/favicon.png"
                alt="logo"
                className="w-[4em] bg-white rounded-full p-2"
              ></img>
              <div className="pl-2">
                <a href="#">
                  <h2 className="text-white font-medium text-xl font-josefin-sans">
                    Hariyo Bazar
                  </h2>
                </a>
                <p className="text-white font-josefin-sans">
                  Bringing Nature To Your Doorstep
                </p>
              </div>
            </div>

            <div className="text-white">
              <h2 className="font-semibold text-lg">Visit Us:</h2>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p>Ghorahi-15, Dang </p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <p>9866202135 </p>
              </div>
              <div className="flex items-center gap-2">
                <MdMail />
                <p>someaim1@gmail.com</p>
              </div>
            </div>

            <div className="text-white">
              <h2 className="font-semibold text-lg">Follow Us:</h2>

              <ul className="flex text-xl gap-2">
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="">
                    <PiInstagramLogoFill />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="text-white text-center py-3 text-sm">
            <p>&copy; 2024 Hariyo Bazar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

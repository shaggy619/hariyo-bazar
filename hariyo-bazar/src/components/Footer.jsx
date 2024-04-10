import React from "react";
import Divider from "./Divider";
import { MdMail } from "react-icons/md";
import { FaPhone, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const visitSection = [
  { id: 1, icon: <FaLocationDot />, content: "Ghorahi-15, Dang" },
  { id: 2, icon: <FaPhone />, content: "9866202135" },
  { id: 3, icon: <MdMail />, content: "samyam.geek@gmail.com" },
];

const socials = [
  { id: 1, icon: <FaFacebookF /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaYoutube /> },
  { id: 4, icon: <PiInstagramLogoFill /> },
];

const Footer = () => {
  return (
    <>
      <Divider />
      <div className="bg-medium-green mt-[-0.1rem] relative ">
        <div className="w-[80%] m-auto max-sm:w-[90%]">
          <div className="flex justify-between pt-3 pb-5 max-sm:block max-sm:pt-5">
            <div className="flex items-center">
              <img
                src="/favicon.png"
                alt="logo"
                className="w-[4em] max-sm:w-[3.5em] bg-white rounded-full p-2"
              ></img>
              <div className="pl-2">
                <a href="#">
                  <h2 className="text-white font-medium text-xl font-josefin-sans inline-block">
                    Hariyo Bazar
                  </h2>
                </a>
                <p className="text-white font-josefin-sans max-sm:text-sm">
                  Bringing Nature To Your Doorstep
                </p>
              </div>
            </div>

            <div className="text-white max-sm:pt-3 text-center">
              <h2 className="font-semibold text-lg">Visit Us:</h2>
              {visitSection.map(({ id, icon, content }) => (
                <div
                  key={id}
                  className="flex items-center gap-2 max-sm:justify-center"
                >
                  {icon}
                  <p>{content} </p>
                </div>
              ))}
            </div>

            <div className="text-white max-sm:pt-3 text-center">
              <h2 className="font-semibold text-lg">Follow Us:</h2>
              <ul className="flex text-xl gap-2 justify-center">
                {socials.map(({ id, icon }) => (
                  <li key={id}>
                    <a href="">{icon}</a>
                  </li>
                ))}
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

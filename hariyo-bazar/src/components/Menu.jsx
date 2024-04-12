import React from "react";
import { SlSettings } from "react-icons/sl";
import { TbShoppingCartStar } from "react-icons/tb";
import { MdOutlineCancel, MdClose } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Menu = ({ handleOnclick }) => {
  const menuItems = [
    { id: 1, logo: <SlSettings />, title: "Manage Account", link: "" },
    { id: 2, logo: <TbShoppingCartStar />, title: "My Orders", link: "" },
    { id: 3, logo: <MdOutlineCancel />, title: "My Returns", link: "" },
    { id: 4, logo: <IoMdLogOut />, title: "Sign Out", link: "" },
  ];
  return (
    <>
      <div className="absolute right-0 top-20 bg-white w-[14em] shadow-xl max-sm:w-[100%]  max-sm:top-16 py-4 rounded">
        <div className="hidden max-sm:block border rounded-full absolute right-2 border-dark-green text-lg">
          {<MdClose onClick={handleOnclick} />}
        </div>
        {menuItems.map(({ id, logo, title, link }) => (
          <ul key={id}>
            <li className="flex items-center gap-3 py-2 px-7 ">
              <div className="text-xl">{logo}</div>
              <a href="" className=" hover:underline">
                <div>{title}</div>{" "}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Menu;

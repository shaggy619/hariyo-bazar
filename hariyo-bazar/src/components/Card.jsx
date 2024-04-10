import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className="shadow rounded overflow-hidden hover:shadow-xl transform transition-shadow duration-300 ease-in-out hover:scale-[1.005]">
      <img src={item.img} alt={item.title} className="w-[15em]" />
      <div className="px-4">
        <h2 className="font-medium pt-2">{item.title}</h2>
        <p>{item.description}</p>
        <p>
          ${item.price}
          <span className="text-gray-400 text-sm">/{item.unit}</span>
        </p>
        <button className="bg-medium-green text-white w-full rounded mt-2 mb-5 py-1 flex justify-center gap-3 items-center">
          <FaCartPlus />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

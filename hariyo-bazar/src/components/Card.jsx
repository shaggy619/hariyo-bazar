import React from "react";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Card = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const addToCard = () => {
    return setItemCount(itemCount + 1);
  };
  return (
    <div className="shadow rounded overflow-hidden hover:shadow-xl transform transition-shadow duration-300 ease-in-out hover:scale-[1.005]">
      <img src={item.img} alt={item.title} className="w-full" />
      <div className="px-4">
        <h2 className="font-medium pt-2">{item.title}</h2>
        <p>{item.description}</p>
        <p>
          ${item.price}
          <span className="text-gray-400 text-sm">/{item.unit}</span>
        </p>
        <button
          onClick={addToCard}
          className="bg-medium-green text-white w-full rounded mt-2 mb-5 py-1 flex justify-center gap-3 max-lg:gap-1 items-center"
        >
          <FaCartPlus className="max-sm:hidden" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

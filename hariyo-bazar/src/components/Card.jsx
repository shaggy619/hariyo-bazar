import React, { useState, useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "./CartContext";

const Card = ({ item }) => {
  const [content, setContent] = useState("Add To Cart");
  const { cartItems, addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
    setContent("Added!");
    setTimeout(() => {
      setContent("Add More");
    }, 1000);
  };

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="shadow rounded overflow-hidden hover:shadow-xl transform transition-shadow duration-300 ease-in-out hover:scale-[1.005]">
      <img src={item.img} alt={item.title} className="w-full" />
      <div className="px-4">
        <h2 className="font-medium pt-2">{item.title}</h2>
        <p>{item.description}</p>
        <p>
          Rs.{item.price}
          <span className="text-gray-400 text-sm">/{item.unit}</span>
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-medium-green text-white w-full rounded mt-2 mb-5 py-1 flex justify-center gap-3 max-lg:gap-1 items-center"
        >
          <FaCartPlus className="max-sm:hidden" />
          {content}
          {cartItem && (
            <span className="flex items-center justify-center max-md:w-4 max-md:h-4 w-5 h-5 text-sm bg-white rounded-full text-medium-green">
              {cartItem.quantity}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;

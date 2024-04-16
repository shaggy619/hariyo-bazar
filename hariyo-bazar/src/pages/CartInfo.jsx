import React, { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";

const CartInfo = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div>
      <div className="relative top-36 max-sm:top-20 mb-40 max-sm:mb-24">
        {cartItems.length == 0 && (
          <div className="w-[80%] m-auto shadow rounded-xl pb-10">
            <div className="m-auto w-[30%] max-sm:w-[50%]">
              <img src="src/Images/cart.png" alt="" className="w-full" />
            </div>
            <div className="text-center">
              <p className="text-gray-500">Your Cart Is Empty </p>
              <div className="mt-7">
                <Link to="/" className="bg-medium-green text-white p-4 rounded">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <div className="w-[80%] max-sm:w-[90%] m-auto shadow rounded p-5 text-center my-5">
              <div className="flex justify-between pb-2 font-medium max-sm:hidden">
                <div className="w-[10em]">Product</div>
                <div className="w-[6em]">Price</div>
                <div className="w-[6em]">Quantity</div>
                <div className="w-[6em]">Total</div>
                <div className="w-[6em]">Remove</div>
              </div>
              <hr className="max-sm:hidden" />

              {cartItems.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center py-2 max-sm:block max-sm:relative">
                    <div className="w-[10em] flex items-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-[6em]"
                      />
                      <div className="pl-2">
                        <h2 className="font-medium text-left">{item.title}</h2>
                        <p className="text-medium-green text-start">
                          {item.categories}
                        </p>
                        <p className="hidden max-sm:block text-left">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="w-[6em] max-sm:hidden">${item.price}</div>
                    <div className="max-sm:flex max-sm:justify-center max-sm:w-full  max-sm:py-3">
                      <div className="flex gap-2 w-[6em]">
                        <button
                          className="bg-gray-200 px-1"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          <FiMinus />
                        </button>
                        <div className="w-[6em]">{item.quantity}</div>
                        <button
                          className="bg-gray-200 px-1"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>
                    <div className="w-[6em] max-sm:w-full max-sm:text-right">
                      <span className="hidden max-sm:inline-block">
                        Total:{" "}
                      </span>
                      <span className="max-sm:text-medium-green max-sm:font-medium">
                        {" "}
                        ${item.price * item.quantity}{" "}
                      </span>
                    </div>
                    <div className="w-[6em] max-sm:w-full max-sm:text-right max-sm:absolute top-2">
                      <button
                        className="hover:text-red-600"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="w-[80%] max-md:w-[90%] m-auto">
              <div className="w-[50%] max-sm:w-full shadow-lg rounded my-5 ml-auto p-5">
                <h2 className="text-lg font-medium">Order Summary</h2>
                <div className="flex justify-between py-1">
                  <p>Subtotal (1 items)</p>
                  <p>Rs.200</p>
                </div>
                <div className="flex justify-between py-1">
                  <p>Shipping Fee</p>
                  <p>Rs.20</p>
                </div>
                <div className="flex justify-between py-2">
                  <input
                    type="text"
                    placeholder="Enter Voucher Code"
                    className="flex-1 p-2 border-gray-300 border rounded outline-medium-green w-full mr-2"
                  />
                  <button className="bg-medium-green text-white rounded-sm px-5">
                    Apply
                  </button>
                </div>
                <div className="flex justify-between py-1">
                  <p>Total</p>
                  <p className="text-medium-green text-lg">Rs. 220</p>
                </div>
                <div className="text-center">
                  <button className="bg-medium-green text-white w-full py-3 rounded-sm mt-2">
                    Proceed To CheckOut (1)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartInfo;

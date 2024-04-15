import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const cartInfo = [
  { id: 1, title: "Apple", img: "/src/Images/Fruits/apple.png", price: 20 },
  { id: 2, title: "Banana", img: "/src/Images/Fruits/banana.png", price: 15 },
  { id: 3, title: "Orange", img: "/src/Images/Fruits/orange.png", price: 10 },
  { id: 4, title: "Grapes", img: "/src/Images/Fruits/grapes.png", price: 25 },
  {
    id: 5,
    title: "Pineapple",
    img: "/src/Images/Fruits/pineapple.png",
    price: 30,
  },
];

const CartInfo = () => {
  return (
    <div className="relative top-36 max-sm:top-20 mb-40 max-sm:mb-24">
      <div className="w-[80%] max-sm:w-[90%] m-auto shadow rounded p-5 text-center my-5">
        <div className="flex justify-between pb-2 font-medium max-sm:hidden">
          <div className="w-[10em]">Product</div>
          <div className="w-[6em]">Price</div>
          <div className="w-[6em]">Quantity</div>
          <div className="w-[6em]">Total</div>
          <div className="w-[6em]">Remove</div>
        </div>
        <hr className="max-sm:hidden" />

        {cartInfo.map(({ id, img, title, price }) => (
          <div key={id}>
            <div className="flex justify-between items-center py-2 max-sm:block max-sm:relative">
              <div className="w-[10em] flex items-center">
                <img src={img} alt={title} className="w-[6em]" />
                <div className="pl-2">
                  <h2 className="font-medium">{title}</h2>
                  <p className="text-medium-green text-start">Fruits</p>
                  <p className="hidden max-sm:block text-left">${price}</p>
                </div>
              </div>
              <div className="w-[6em] max-sm:hidden">${price}</div>
              <div className="max-sm:flex max-sm:justify-center max-sm:w-full  max-sm:py-3">
                <div className="flex gap-2 w-[6em]">
                  <button className="bg-gray-200 px-1">
                    <FiMinus />
                  </button>
                  <div className="w-[6em]">2</div>
                  <button className="bg-gray-200 px-1">
                    <GoPlus />
                  </button>
                </div>
              </div>
              <div className="w-[6em] max-sm:w-full max-sm:text-right">
                <span className="hidden max-sm:inline-block">Total: </span>
                <span className="max-sm:text-medium-green max-sm:font-medium">
                  {" "}
                  ${price * 2}{" "}
                </span>
              </div>
              <div className="w-[6em] max-sm:w-full max-sm:text-right max-sm:absolute top-2">
                <button className="hover:text-red-600">
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
  );
};

export default CartInfo;

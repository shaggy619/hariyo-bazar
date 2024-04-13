import React from "react";
const cartInfo = [
  { id: 1, title: "Apple", img: "/src/Images/Fruits/apple.png", price: 20 },
];
const CartInfo = () => {
  return (
    <>
      <div className="w-[80%] m-auto flex justify-between">
        <div>Product</div>
        <div> Price</div>
        <div>QTY</div>
        <div>Total</div>
        <div></div>
      </div>

      {cartInfo.map(({ id, img, title, price }) => (
        <div
          key={id}
          className="w-[80%] m-auto flex justify-between items-center"
        >
          <div>
            {" "}
            <img src={img} alt={title} className="w-[6em]" />{" "}
          </div>
          <div>{price}$</div>
          <div>2</div>
          <div>{price}$</div>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default CartInfo;

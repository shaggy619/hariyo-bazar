import React from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Products from "./Products";

const Home = () => {
  return (
    <div className="w-[80%] m-auto max-sm:w-[90%]">
      <Carousel />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;

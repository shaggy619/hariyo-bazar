import React from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Dairy from "./Dairy";
import Fruits from "./Fruits";
import Plants from "./Plants";
import Vegetables from "./Vegetables";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <Vegetables />
      <Fruits />
      <Dairy />
      <Plants />
    </div>
  );
};

export default Home;

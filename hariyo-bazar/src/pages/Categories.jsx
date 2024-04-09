import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoryImages = [
    { id: 1, img: "src/Images/gg.png", title: "Vegetables" },
    { id: 2, img: "src/Images/frutits.png", title: "Fruits" },
    { id: 3, img: "src/Images/dairy.png", title: "Dairy Products" },
    { id: 4, img: "src/Images/plant.png", title: "Plants" },
  ];
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-center font-medium text-xl max-sm:text-base max-md:text-lg mt-[2em] mb-[-15px] border-y-2 border-medium-green inline-block px-3  text-medium-green">
          Categories
        </h2>
      </div>

      <div className="flex w-[80%] m-auto items-center justify-between">
        {categoryImages.map(({ id, img, title }) => (
          <div key={id}>
            <img src={img} alt={title} className="w-[250px] img-shadow"></img>
            <div className="text-center relative top-[-20px]">
              <a href="#" className=" text-dark-green font-medium ">
                {title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;

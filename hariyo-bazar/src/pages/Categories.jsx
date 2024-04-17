import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoryImages = [
    {
      id: 1,
      img: "Images/vegetables.png",
      title: "Vegetables",
      link: "#vegetables",
    },
    { id: 2, img: "Images/frutits.png", title: "Fruits", link: "#fruits" },
    {
      id: 3,
      img: "Images/dairy.png",
      title: "Dairy Products",
      link: "#dairy",
    },
    { id: 4, img: "Images/plant.png", title: "Plants", link: "#plants" },
  ];
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-center font-medium text-xl max-md:text-lg mt-[2em] mb-[-15px] border-y-2 border-medium-green inline-block px-3  text-medium-green">
          Categories
        </h2>
      </div>

      <div className="flex items-center justify-between max-md:flex-col">
        {categoryImages.map(({ id, img, title, link }) => (
          <div key={id}>
            <a href={link}>
              <img
                src={img}
                alt={title}
                className="w-[15em] max-md:w-[10em] img-shadow transform transition-transform duration-300 cursor-pointer  ease-in-out hover:scale-105"
              ></img>
            </a>

            <div className="text-center relative top-[-20px]">
              <a href={link} className=" text-medium-green font-medium ">
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

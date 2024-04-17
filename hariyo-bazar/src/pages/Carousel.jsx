import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";

const carouselItems = [
  { id: 1, image: "Images/slider-1.png" },
  { id: 2, image: "Images/slider-2.png" },
  { id: 3, image: "Images/slider-3.png" },
];

const Carousel = () => {
  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 focus:outline-none z-10 max-sm:left-1 max-sm:text-sm max-sm:rounded-full max-sm:bg-white p-1 opacity-75"
    >
      <GrPrevious />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 focus:outline-none z-10 max-sm:right-1 max-sm:text-sm max-sm:rounded-full max-sm:bg-white p-1 opacity-75"
    >
      <GrNext />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className=" relative mt-5  text-dark-green pt-32 max-sm:pt-20">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.caption}
              className="w-full max-sm:h-32 max-sm:object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

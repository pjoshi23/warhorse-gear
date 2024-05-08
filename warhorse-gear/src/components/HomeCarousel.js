import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import soccerMat from "../images/soccer-mat.jpg";
import shoppingBag from "../images/shopping-bag.png";
import logo from "../images/warhorse-gear-logo.png";

import "./HomeCarousel.css";

const Carousel = ({}) => {
  const data = [
    {
      src: soccerMat,
      alt: "Image 1 for carousel"
    },
    {
      src: logo,
      alt: "Image 2 for carousel"
    },
    {
      src: shoppingBag,
      alt: "Image 3 for carousel"
    }
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
  <div className="carousel">
    <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
    <img
      src={data[slide].src}
      alt={data[slide].alt}
      key={slide}
      className="slide"
    />
    <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
  </div>
);
};

export default Carousel;

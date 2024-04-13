import React from "react";
import { Bag } from "./Bag";
import { HomeCarousel } from "./HomeCarousel";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">Home</div>
          <div className="div">Shop</div>
          <img className="whietprofile" alt="Whietprofile" src="whietprofile-1.png" />
          <div className="ellipse" />
          <img className="warhorse-gear-logo-c" alt="Warhorse gear logo c" src="warhorse-gear-logo-c-1.png" />
          <Bag className="bag-instance" property1="empty" shoppingBag="shopping-bag-2.png" />
          <div className="frame">
            <div className="overlap-group">
              <HomeCarousel
                className="home-carousel-instance"
                img="soccer-mat-mockup-d-4-3.png"
                imgClassName="home-carousel-3"
                property1="home-carousel-1"
                soccerMatMockupD="soccer-mat-mockup-d-5-3.png"
                soccerMatMockupD1="soccer-mat-mockup-d-3-3.png"
                soccerMatMockupDClassName="design-component-instance-node"
                soccerMatMockupDClassNameOverride="home-carousel-2"
              />
              <div className="text-wrapper-2">Featured Products</div>
              <img className="soccer-mat-mockup-d-7" alt="Soccer mat mockup d" src="soccer-mat-mockup-d-6.png" />
              <img className="soccer-mat-mockup-d-8" alt="Soccer mat mockup d" src="soccer-mat-mockup-d-7.png" />
              <img className="soccer-mat-mockup-d-9" alt="Soccer mat mockup d" src="soccer-mat-mockup-d-8.png" />
              <div className="text-wrapper-3">Soccer Mat 1</div>
              <div className="text-wrapper-4">$50</div>
              <img className="star" alt="Star" src="star-1.svg" />
              <img className="star-2" alt="Star" src="star-2.svg" />
              <img className="star-3" alt="Star" src="star-3.svg" />
              <img className="star-4" alt="Star" src="star-4.svg" />
              <img className="star-5" alt="Star" src="star-5.svg" />
              <div className="div-wrapper" data-products-mode="soccer-mat-1">
                <div className="text-wrapper-5">Buy Now</div>
              </div>
              <div className="text-wrapper-6">Soccer Mat 2</div>
              <div className="text-wrapper-7">$50</div>
              <img className="star-6" alt="Star" src="star-6.svg" />
              <img className="star-7" alt="Star" src="star-7.svg" />
              <img className="star-8" alt="Star" src="star-8.svg" />
              <img className="star-9" alt="Star" src="star-9.svg" />
              <img className="star-10" alt="Star" src="star-10.svg" />
              <div className="frame-2" data-products-mode="soccer-mat-2">
                <div className="text-wrapper-5">Buy Now</div>
              </div>
              <div className="text-wrapper-8">Soccer Mat 3</div>
              <div className="text-wrapper-9">$50</div>
              <img className="star-11" alt="Star" src="star-11.svg" />
              <img className="star-12" alt="Star" src="star-12.svg" />
              <img className="star-13" alt="Star" src="star-13.svg" />
              <img className="star-14" alt="Star" src="star-14.svg" />
              <img className="star-15" alt="Star" src="star-15.svg" />
              <div className="frame-3" data-products-mode="soccer-mat-3">
                <div className="text-wrapper-5">Buy Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

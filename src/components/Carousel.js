import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c1 from "../assets/p1.png";
import c2 from "../assets/p2.png";
import c3 from "../assets/p3.png";
import c4 from  "../assets/p4.png";
import c5 from  "../assets/p5.png";
import c6 from  "../assets/p6.png";


import "../styles/Carousel.css";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <img src={c1} className="car-pic" />
          </div>
          <div>
            <img src={c2} className="car-pic" />
          </div>
          <div>
            <img src={c3} className="car-pic" />
          </div>

          <div>
            <img src={c4} className="car-pic" />
          </div>

          <div>
            <img src={c5} className="car-pic" />
          </div>

          <div>
            <img src={c6} className="car-pic" />
          </div>
        </Slider>
      </div>
    );
  }
}
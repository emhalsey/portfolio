// Learned React Slick from here: https://react-slick.neostack.com/docs/example/

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components_css/Carousel.css";

function NextArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    > &gt;
    </div>
  );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    > &lt;
    </div>
  );
  }

const Carousel = () => {
    const settings = {dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                centerPadding: "0px",
            },
            },
        ],
    };
  
    return (
      <div className="carousel-wrapper">
        <Slider {...settings}>
          <div className="carousel-slide">Project 1</div>
          <div className="carousel-slide">Project 2</div>
          <div className="carousel-slide">Project 3</div>
        </Slider>
      </div>
    );
  };
  
  export default Carousel;
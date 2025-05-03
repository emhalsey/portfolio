//Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import './components_css/Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        appendDots: dots => (
            <div>
                <ul style={{
                    margin: "0px", padding: "0px"
                }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="carousel">
                <Slider {...settings}>
                    <div className="slide">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240307153443/GeeksforGeeks-Offline-Classes.webp"
                             alt="Slide 1" 
                             className="slide-image" />
                    </div>
                    <div className="slide">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240307153531/GeeksforGeeks-Classroom-Program---DSA-For-Interview-Preparation-Course.webp"
                             alt="Slide 2" 
                             className="slide-image" />
                    </div>
                    <div className="slide">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240307153605/School-programming.png"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Carousel;
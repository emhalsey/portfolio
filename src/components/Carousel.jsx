// Learned React Slick from here: https://react-slick.neostack.com/docs/example/

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components_css/Carousel.css";
import Centro from "../assets/centro.jpeg";
import SUV from "../assets/suv.jpg";
import AACSB from "../assets/AACSB.png";

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
    
  const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="carousel-wrapper">
        <Slider {...settings}>
          <div className="carousel-slide">
            <div className="container">
              <div class="header">
                <h2>Centro Bus Predictor</h2>
                <p>MySQL | Python | API keys | Postman | Jira | Draw.io | GitHub Version Control</p>
                <table>
                  <tr>
                    <td><a href="pi.cs.oswego.edu:3000" target="_blank"><b>Website</b></a></td>
                    <td><a href="https://github.com/emhalsey/csc380-team-e-s25/" target="_blank"><b>GitHub</b></a></td>
                  </tr>
                </table>
              </div>
              <div class="photo">
                <img src={Centro} 
                  alt="Image of a Centro bus in front of SUNY Oswego's Shineman building."
                  className="carousel-img"/>
              </div>
              <div class="content">
                <h3>Software Engineering Course Project</h3>
                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                  Read More ▾
                </button>
                {isOpen && (
                  <div>
                    <p>This was my first project involving working with a team to create a full-stack application. There were many challenges along the way, but I had a lot of fun with this project.</p>
                    <p>I was responsible for designing the database with MySQL and connecting the database to Centro's API with Python. This was uncharted territory for me, and I realized quickly that there was no room for perfectionism with our time constraints.</p>
                    <p>Not only did I learn the technical aspects of building a web application, but I learned how to allocate time to meet stakeholder needs and not get carried away by the excitement of potential features.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="container">
              <div class="header">
                <h2>Vehicle Python Analysis</h2>
                <p>Web Scraping | Multi-Attribute Decision Modelling (MADM)</p>
                <p>Pandas | NumPy | Pygal | PathLib | Scikit-Learn</p>
                <table>
                  <tr>
                    <td><a href="http://cs.oswego.edu/~ehalsey/coursework/other/ranked.svg" target="_blank"><b>Output</b></a></td>
                    <td><a href="https://github.com/emhalsey/car_shopping" target="_blank"><b>GitHub</b></a></td>
                  </tr>
                </table>
              </div>
              <div class="photo">
                <br></br>
                <img src={SUV} 
                  alt="Image of a greenish-gray SUV in the middle of a grassy field (who put that there?)."
                  className="carousel-img"/>
              </div>
              <div class="content">
                <h3>Independent Project</h3>
                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                  Read More ▾
                </button>
                {isOpen && (
                  <div>
                    <p>I need to buy a car soon, so as a data nerd, of course I decided to do a full Python analysis on the SUVs currently available in the market.</p>
                    <p>This wasn't my first rodeo with reading a text file (previously used XML files and Java), but this was the first time I approached it in this manner.</p>
                    <p>I found US News' JSON-only link through some script digging and used that, alongside Python, to scrape the data from their site.</p>
                    <p>I brushed up on familiar libraries like Pandas and NumPy to help me clean the data, and I learned how to use new libraries like PathLib and PyGal to create a neat interactive graph (linked above).</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="container">
              <div class="header">
                <h2>AACSB Accreditation Mapping</h2>
                <p>Excel | Tableau</p>
                <table>
                  <tr>
                    <td><a href="https://public.tableau.com/app/profile/emma.halsey/viz/MapofUSAInstitutionsbyAccreditationStatusandSize/MapofBachelorsBusinessDegreesGranted2023"target="_blank"><b>Tableau</b></a></td>
                  </tr>
                </table>
              </div>
              <div class="photo">
                <img src={AACSB} 
                  alt="Screenshot of the map I created in Tableau."
                  className="carousel-img"/>
              </div>
              <div class="content">
                <a href="https://ww1.oswego.edu/institutional-research/" target="_blank"><h3>Internship Project for the Office of Institutional Research and Assessment (IRA) at SUNY Oswego</h3></a>
                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                  Read More ▾
                </button>
                {isOpen && (
                  <div>
                    <p>After gathering data from IPEDS and verifying each institution's accreditation status through the AACSB website, I manually entered missing city coordinates to ensure every campus was mapped accurately.</p>
                    <p>I built three interactive maps—one for each degree level—where circle size shows the number of business degrees granted in 2023, and color indicates accreditation.</p>
                    <p>It was exciting using Tableau's unique mapping feature in a way that can help drive impact in higher education.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Carousel;
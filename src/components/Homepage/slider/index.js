import React  from "react";
import "./style.css";
import Photo1 from "../images/photo1.png";
import Carousel from 'react-bootstrap/Carousel'
const Slider = () => {
    return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-lg-12 col-sm-12">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Photo1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Photo1}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Photo1}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                        <div className = "border"></div>
                    </div>
                </div>
            </div>
            
    )
};
export default Slider;
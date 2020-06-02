import React from "react";
import "./style.css";
import Carousel from 'react-bootstrap/Carousel'
import Photo1 from "../images/person1.png";
import Photo2 from "../images/person2.png";
import Photo3 from "../images/person3.png";
import Photo4 from "../images/person4.png";
const People = () => {
    return (
        <div className = "content7">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-12 col-sm-12">
                        <div className = "title">
                            <h2>testimonal</h2>
                            <p>thar is thoughts about our work</p>
                        </div>
                        <Carousel>
                        <Carousel.Item>
                                <img
                                src={Photo1}
                                alt="Third slide"
                                className = "img"
                                />
                                <div className = "caption2">
                                    <h4>devil roy barman</h4>
                                    <span>founder</span>
                                    <div className = "stars">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <p>i though about the time in my life when i couldn't even afford 5$ for a book. that is when it hit me. wouldn't it be cool id the price tag said. 5 jumping backs and a set up. chris raised $70k to help his neighbour norma stay in her home </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={Photo2}
                                alt="Third slide"
                                className = "img"
                                />
                                <div className = "caption2">
                                    <h4>devil roy barman</h4>
                                    <span>founder</span>
                                    <div className = "stars">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <p>i though about the time in my life when i couldn't even afford 5$ for a book. that is when it hit me. wouldn't it be cool id the price tag said. 5 jumping backs and a set up. chris raised $70k to help his neighbour norma stay in her home </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={Photo3}
                                alt="Third slide"
                                className = "img"
                                />
                                <div className = "caption2">
                                    <h4>devil roy barman</h4>
                                    <span>founder</span>
                                    <div className = "stars">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <p>i though about the time in my life when i couldn't even afford 5$ for a book. that is when it hit me. wouldn't it be cool id the price tag said. 5 jumping backs and a set up. chris raised $70k to help his neighbour norma stay in her home </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={Photo4}
                                alt="Third slide"
                                className = "img"
                                />
                                <div className = "caption2">
                                    <h4>devil roy barman</h4>
                                    <span>founder</span>
                                    <div className = "stars">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <p>i though about the time in my life when i couldn't even afford 5$ for a book. that is when it hit me. wouldn't it be cool id the price tag said. 5 jumping backs and a set up. chris raised $70k to help his neighbour norma stay in her home </p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default People;
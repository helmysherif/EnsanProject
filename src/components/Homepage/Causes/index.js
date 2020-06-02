import React from "react";
import Photo1 from "../images/photo3.png";
import Photo2 from "../images/photo4.png";
import Photo3 from "../images/photo5.png";
import "./style.css";
const Causes = () => {
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-lg-12 col-sm-12">
                    <div className = "text">
                        <span>our causes</span>
                        <h3>popular causes</h3>
                        <p>Leather And Leather Good Exporters Are Gung Ho About Hitting 5$ Billion In Export Recipt In 2022 If The Government Manage The Leather Working Group Certification </p>
                    </div>
                    <div className = "row">
                        <div className = "col-lg-4 col-sm-12">
                            <div className="card">
                                <img src={Photo1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="card-title">
                                        <span></span>
                                    </div>
                                    <div className = "percent">10%</div>
                                    <p className="card-text">
                                        Raised $57,089
                                        <span>Goal $50,000</span>
                                    </p>
                                    <a href = "#" className = "link">capetown orphange</a>
                                    <ul className = "lists">
                                        <li>
                                            Time Left
                                            <span>
                                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                                15 days
                                            </span>
                                        </li>
                                        <li>
                                            Target Location
                                            <span>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                Mombasa, USA
                                            </span>
                                        </li>
                                    </ul>
                                    <p className = "caption">once we obtain the LWG certification, nobody will ask about the quality of our products as everything would be produced following</p>
                                    <a href="#" className="btn btn-primary">donate now</a>
                                </div>
                            </div>
                        </div>
                        <div className = "col-lg-4 col-sm-12">
                            <div className="card">
                                <img src={Photo2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="card-title">
                                        <span></span>
                                    </div>
                                    <div className = "percent">10%</div>
                                    <p className="card-text">
                                        Raised $57,089
                                        <span>Goal $50,000</span>
                                    </p>
                                    <a href = "#" className = "link">capetown orphange</a>
                                    <ul className = "lists">
                                        <li>
                                            Time Left
                                            <span>
                                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                                15 days
                                            </span>
                                        </li>
                                        <li>
                                            Target Location
                                            <span>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                Mombasa, USA
                                            </span>
                                        </li>
                                    </ul>
                                    <p className = "caption">once we obtain the LWG certification, nobody will ask about the quality of our products as everything would be produced following</p>
                                    <a href="#" className="btn btn-primary">donate now</a>
                                </div>
                            </div>
                        </div>
                        <div className = "col-lg-4 col-sm-12">
                            <div className="card">
                                <img src={Photo3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="card-title">
                                        <span></span>
                                    </div>
                                    <div className = "percent">10%</div>
                                    <p className="card-text">
                                        Raised $57,089
                                        <span>Goal $50,000</span>
                                    </p>
                                    <a href = "#" className = "link">capetown orphange</a>
                                    <ul className = "lists">
                                        <li>
                                            Time Left
                                            <span>
                                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                                15 days
                                            </span>
                                        </li>
                                        <li>
                                            Target Location
                                            <span>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                Mombasa, USA
                                            </span>
                                        </li>
                                    </ul>
                                    <p className = "caption">once we obtain the LWG certification, nobody will ask about the quality of our products as everything would be produced following</p>
                                    <a href="#" className="btn btn-primary">donate now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Causes;
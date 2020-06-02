import React from "react";
import Photo from "../images/ensan.png";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
    return (
        <div>
            <div className = "content11">
                <div className = "container cont11">
                    <div className = "row">
                        <div className = "col-lg-6 col-sm-12">
                            <ul>
                                <li className = "li">
                                    <i className="fa fa-phone"></i>
                                    <span>Call:+ (20) 0111-6-157-175</span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <span>Email: office@example.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className = "col-lg-6 col-sm-12">
                            <div className = "icons">
                                <a href = "#"><i class="fa fa-twitter"></i></a>
                                <a href = "#"><i class="fa fa-facebook-f"></i></a>
                                <a href = "#"><i class="fa fa-skype"></i></a>
                                <a href = "#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "content12">
            <div className = "container cont12">
                <div className = "row">
                    <div className = "col-lg-3 col-sm-12">
                        <img src = {Photo} />
                    </div>
                    <div className = "col-lg-9 col-sm-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to = "/AboutUs">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Services">services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to = "/Volunteers" tabindex="-1" aria-disabled="true">volunteer</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">news</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Partners">partners</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contact</a>
                            </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">donate now</button>
                            </form>
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};
export default Navbar;
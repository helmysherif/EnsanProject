import React from "react";
import "./style.css";
import { Link } from "react-router-dom"
import Logo from "../images/ensan.png";
const Footer = () => {
    return (
        <div className = "content10">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-4 col-sm-12">
                        <img src = {Logo} />
                        <p>core values are the fundamental beliefs of the person or orginazation. the core values are the guiding prin ples that dictate behaviour and action suas labore saperet has there any quote for write lorem percit latineu.</p>
                        <div className = "social">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                            <i class="fa fa-skype" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className = "col-lg-2 col-sm-12">
                        <h2>links</h2>
                        <Link to = "/" className = "links4">Home</Link>
                        <Link to = "/AboutUs" className = "links4">about</Link>
                        <Link to = "/Services" className = "links4">services</Link>
                        <Link to = "/Volunteers" className = "links4">volunteers</Link>
                        <Link to = "/" className = "links4">news</Link>
                        <Link to = "/Partners" className = "links4">partners</Link>
                        <Link to = "/" className = "links4">contact</Link>

                    </div>
                    <div className = "col-lg-2 col-sm-12">
                        <h2>your help</h2>
                        <p>leave a legancy</p>
                        <p>monthly giving</p>
                        <p>monthly giving</p>
                    </div>
                    <div className = "col-lg-4 col-sm-12 col">
                        <h2>contact us</h2>
                        <ul>
                            <li>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <span>10 dhan mohol, new york, NY, 25365 USA</span>
                            </li>
                            <li>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <span>support +1 (516) 231 1313</span>
                            </li>
                            <li>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <span>email: info@yourmail.com</span>
                            </li>
                        </ul>
                        <form>
                        <div class="form-group">
                                <input type="email" className ="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                                <button className = "btn btn-primary">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className = "copyright">
                <p>
                    copyrights &copy; 2019 conger programming.all rights reserved
                </p>
                <div className = "policy">
                    <span>privicy policy</span>
                    <span>sitemap</span>
                    <span>terms of use</span>
                </div>
            </div>
        </div>
    )
};
export default Footer;
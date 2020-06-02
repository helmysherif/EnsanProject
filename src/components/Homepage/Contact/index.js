import React from "react";
import "./style.css";
import Photo from "../images/photo2.png";
const Contact = () => {
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-lg-6 col-sm-12">
                    <div className = "contact">
                        <p>get in touch</p>
                        <h4>contact us</h4>
                        <span className = "border2"></span>
                    </div>
                    <div className = "row">
                        <div className = "col-lg-6 col-sm-12">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                                <i class="fa fa-user"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                                <i class="fa fa-phone"></i>
                            </div>
                            </form>
                        </div>
                        <div className = "col-lg-6 col-sm-12">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Topic" />
                                <i class="fa fa-pencil"></i>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className = "form">
                        <div className="form-group">
                            <textarea placeholder = "Message"></textarea>
                            <i class="fa fa-comment"></i>
                            <button className = "btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
                <div className = "col-lg-6 col-sm-12">
                    <img src = {Photo} />
                    <div className = "shad"></div>
                    <div className = "box3">
                        <p>alone we can do so little,<br/> together we can do so much.</p>
                        <h5>hellen kell</h5>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Contact;
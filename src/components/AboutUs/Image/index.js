import React from "react";
import "./style.css";
import Photo1 from "../images/photo1.png";
const Image = () => {
    return (
        <div className = "container-fluid">
            <div className = "row">
                <div className = "col-lg-12 col-sm-12">
                    <img src = {Photo1} />
                    <div className = "background"></div>
                    <div className = "about">about us</div>
                    <div className = "border3"></div>
                    <div className = "border4"></div>
                </div>
            </div>
        </div>
    )
};
export default Image;
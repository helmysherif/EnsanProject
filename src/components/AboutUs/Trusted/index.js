import React from "react";
import "./style.css";
import Photo1 from "../images/photo2.png";
const Trusted = () => {
    return (
        <div className = "trusted">
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-lg-12 col-sm-12">
                        <img src = {Photo1} />
                        <div class = "box3"></div>
                        <div className = "text4">
                            TRUSTED BY OVER 80.000 HAPPY CUSTOMER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Trusted;
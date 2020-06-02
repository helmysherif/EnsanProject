import React from "react";
import "./style.css";
import Logo1 from "../images/logo1.png";
import Logo2 from "../images/logo2.png";
import Logo3 from "../images/logo3.png";
import Logo4 from "../images/logo4.png";
import Logo5 from "../images/logo5.png";
const Partners = () => {
    return (
        <div className = "container cont10">
            <div className = "row">
                <div className = "col-lg-12 col-sm-12">
                    <div className = "partners">
                        <h2>trusted partners worldwide</h2>
                        <p>we are very greatful and feel honoured to our all partners for being with us</p>
                    </div>
                    <div className = "logos">
                        <img src = {Logo1} />
                        <img src = {Logo2} />
                        <img src = {Logo3} />
                        <img src = {Logo4} />
                        <img src = {Logo5} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Partners;
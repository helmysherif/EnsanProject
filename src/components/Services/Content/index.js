import React from 'react';
import "./style.css";
import Photo1 from "../images/photo1.png";
import Photo2 from "../images/photo2.png";
import Photo3 from "../images/photo3.png";
const Content = () =>  {
    return (
        <div className = "content13">
            <h1>our services</h1>
            <div class = "border3"></div>
            <div className = "container">
                <h3>charities section:</h3>
                <div className = "row">
                    <div className = "col-lg-4 col-sm-12">
                        <div className = "card6">
                            <img src = {Photo1} />
                        </div>
                        <div className = "info">
                            <a href = "#">disabled children's <br/>association</a>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-sm-12">
                        <div className = "card6">
                            <img src = {Photo2} className = "img1"/>
                        </div>
                        <div className = "info">
                            <a href = "#">Al - Kawthar Association for People with Special Needs</a>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-sm-12">
                    <div className = "card6">
                            <img src = {Photo3} className = "img2"/>
                        </div>
                        <div className = "info">
                            <a href = "#">Down syndrome charitable association</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "container">
                <h3>government interests section:</h3>
                <div className = "row">
                    <div className = "col-lg-4 col-sm-12">
                        <div className = "card6">
                            <img src = {Photo1} />
                        </div>
                        <div className = "info">
                            <a href = "#">disabled children's <br/>association</a>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-sm-12">
                        <div className = "card6">
                            <img src = {Photo2} className = "img1"/>
                        </div>
                        <div className = "info">
                            <a href = "#">Al - Kawthar Association for People with Special Needs</a>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-sm-12">
                    <div className = "card6">
                            <img src = {Photo3} className = "img2"/>
                        </div>
                        <div className = "info">
                            <a href = "#">Down syndrome charitable association</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content;

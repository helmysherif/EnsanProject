import React from "react";
import "./style.css";
import Photo1 from "../images/photo3.png";
import Photo2 from "../images/photo4.png";
import Photo3 from "../images/photo5.png";
import Photo4 from "../images/person9.png";
const News = () => {
    return (
        <div className = "content7">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-12 col-sm-12">
                        <div class = "head">
                            <p>read our</p>
                            <h4>latest news</h4>
                            <div>wintour attended north london collegiate school in stanmore, but dropped out aged 16. she soon took <br />a job at cult 1960s london fashon bantique biba, before completing</div>
                        </div>
                        <div className = "row">
                            <div className = "col-lg-4 col-sm-12">
                                <div className = "card2">
                                    <img src = {Photo1} />
                                </div>
                                <div className = "news2">
                                    <a href = "#" className = "link2">anna wintour at70:why the vogue editor plays</a>
                                    <p>ondon in 1949 , anna wintour came from a media family. she is the eldest daughter of <br /> the late charles wintour who was.</p>
                                    <ul>
                                        <li>
                                            <div className = "person">
                                                <img src = {Photo4} />
                                                <p>toby halvorson</p>
                                                <span>june 16,2018</span>
                                                <a href = "#"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className = "col-lg-4 col-sm-12">
                            <div className = "card2">
                                    <img src = {Photo2} />
                                </div>
                                <div className = "news2">
                                    <a href = "#" className = "link2">anna wintour at70:why the vogue editor plays</a>
                                    <p>ondon in 1949 , anna wintour came from a media family. she is the eldest daughter of <br /> the late charles wintour who was.</p>
                                    <ul>
                                        <li>
                                            <div className = "person">
                                                <img src = {Photo4} />
                                                <p>toby halvorson</p>
                                                <span>june 16,2018</span>
                                                <a href = "#"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className = "col-lg-4 col-sm-12">
                            <div className = "card2">
                                    <img src = {Photo3} />
                                </div>
                                <div className = "news2">
                                    <a href = "#" className = "link2">anna wintour at70:why the vogue editor plays</a>
                                    <p>ondon in 1949 , anna wintour came from a media family. she is the eldest daughter of <br /> the late charles wintour who was.</p>
                                    <ul>
                                        <li>
                                            <div className = "person">
                                                <img src = {Photo4} />
                                                <p>toby halvorson</p>
                                                <span>june 16,2018</span>
                                                <a href = "#"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default News;
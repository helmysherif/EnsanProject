import React from "react";
import Photo from "../images/photo7.png";
import "./style.css";
const Fund = () => {
    return (
        <div className = "container cont5">
            <div className = "row">
                <div className = "col-lg-6 col-sm-12">
                    <div className = "photo">
                        <img src = {Photo} />
                    </div>
                </div>
                <div className = "col-lg-6 col-sm-12">
                    <div className = "fund">
                        <h3>we have funded 120,000 charity projects for 20M people arround the world</h3>
                        <p>leather and leather good exporters are gung ho about hitting 5$ billion in export recipt in 2022 if the government manage the leather working group certification at the earliest according to industry insider.</p>
                    </div>
                    <div className = "row">
                        <div className = "col-lg-6 col-sm-12">
                            <div className = "box2">
                                <i class="fa fa-heartbeat"></i>
                                <h4>619</h4>
                                <p>food served</p>
                            </div>
                        </div>
                        <div className = "col-lg-6 col-sm-12">
                        <div className = "box2">
                                <i class="fa fa-heartbeat"></i>
                                <h4>38538</h4>
                                <p>volunteer</p>
                            </div>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-lg-6 col-sm-12">
                            <div className = "box2">
                                <i class="fa fa-heartbeat"></i>
                                <h4>127167</h4>
                                <p>blood donated</p>
                            </div>
                        </div>
                        <div className = "col-lg-6 col-sm-12">
                        <div className = "box2">
                                <i class="fa fa-heartbeat"></i>
                                <h4>2101</h4>
                                <p>happy children</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Fund;
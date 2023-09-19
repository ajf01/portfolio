import React from "react";
import './exper.css'

const Exper = () => {
    return (
        <section id="exper">
            <h1 className="experTitle">My Portfolio</h1>
            <span className="experDesc">Some examples of my works and what my skillset entails.</span>
            <div className="experImgs">
                <img src={require("../../assets/portfolio-1.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-2.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-3.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-4.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-5.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-6.png")} alt="" className="experImg" />
            </div>
            <button className="experBtn">See More</button>
        </section>
    )
}

export default Exper
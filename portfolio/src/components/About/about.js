import React from "react";
import './about.css'

const About = () => {
    return (
        <section id="about">
            <span className="aboutTitle">What I do</span>
            <span className="aboutDesc">What I do</span>
            <div className="aboutBar">
                <div className="barItem">
                    <img src="../../assets/ui-design.png" alt="" className="barImg" />
                    <div className="barText">
                        <h1>Demo Text</h1>
                        <p>Demo Text</p>
                    </div>
                </div>
                <div className="barItem">
                    <img src="../../assets/website-design.png" alt="" className="barImg" />
                    <div className="barText">
                        <h1>Demo Text</h1>
                        <p>Demo Text</p>
                    </div>
                </div>
                <div className="barItem">
                    <img src="../../assets/app-design.png" alt="" className="barImg" />
                    <div className="barText">
                        <h1>Demo Text</h1>
                        <p>Demo Text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
import React from "react";
import './intro.css'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="myName">Anthony</span> <br/>Data Scientist</span>
            </div>
            <img src="https://images2.alphacoders.com/475/475527.jpg" alt="MainPageImg" className="bgImg"></img>
        </section>
    )
}

export default Intro
import React from "react";
import './intro.css'
import { Link } from 'react-scroll';
/* import { Link } from 'react-router-dom'; */

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="myName">Anthony Fong</span> <br/>Data Scientist</span>
                <p className="introPara">I specialize in software and analystics with a focus on building ML models.</p>
                <Link>
                    <button className="hireBtn" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
                        Hire Me
                    </button>
                </Link>
            </div>
            <img src="https://images2.alphacoders.com/475/475527.jpg" alt="MainPageImg" className="bgImg"></img>
        </section>
    )
}

export default Intro
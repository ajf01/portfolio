import React from "react";
import './intro.css'
import { Link } from 'react-scroll';
/* import { Link } from 'react-router-dom'; */

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="myName">Anthony Fong</span> <br/>A Data Scientist</span>
                <p className="introPara">
                    I specialize in Software and Analytics with a focus on building ML models.
                    <br/>
                    Welcome to my Portfolio Website!
                </p>
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
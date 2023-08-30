import React from "react";
import './intro.css'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="myName">Anthony</span> <br/>Data Scientist</span>
                <p className="introPara">I have worked on many coding questions and am proficient in data.</p>
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
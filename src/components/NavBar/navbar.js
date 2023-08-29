import React from "react";
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="https://miro.medium.com/v2/resize:fit:80/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="Logo" className="Logo"></img>
            <div className="Menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="MenuItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="MenuItem">About</Link>
                <Link activeClass="active" to="exper" spy={true} smooth={true} offset={-70} duration={500} className="MenuItem">Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="MenuItem">Clients</Link>
            </div>
            <button className="ContactButton" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
                <img src={require("../../assets/contact.png")} alt="Contact" className="ContactButtonImg"></img>
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar
import React from "react";
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="https://miro.medium.com/v2/resize:fit:80/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="Logo" className="Logo"></img>
            <div className="Menu">
                <Link className="MenuItem">Home</Link>
                <Link className="MenuItem">About</Link>
                <Link className="MenuItem">Portfolio</Link>
                <Link className="MenuItem">Clients</Link>
            </div>
            <button className="ContactButton">
                <img src="../../assets/contact.png" alt="Contact" className="ContactButtonImg"></img>
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar
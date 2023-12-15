import React, { useState } from "react";
import './navbar.css'
/* import { Link } from 'react-scroll'; */
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/%27%27Logo_AF%27%27.png" style={{'object-fit': 'cover', 'border-radius': '0.5rem'}} alt="Logo" width="65" height="45" className="Logo"></img>
            <div className="Menu">
                <NavLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="MenuItem">Home</NavLink>
                <NavLink activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="MenuItem">About</NavLink>
                <NavLink activeClass="active" to="exper" spy={true} smooth={true} offset={-70} duration={500} className="MenuItem">Portfolio</NavLink>
                <NavLink activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="MenuItem">Contact</NavLink>
            </div>
            {/* <button className="ContactButton" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}> */}
            <Link to="clients" spy={true} smooth={true} offset={-70} duration={500} className="ContactButton" >
                <img src={require("../../assets/contact.png")} alt="Contact" className="ContactButtonImg"></img>
                Contact Me
            </Link>
            <img src={require("../../assets/menu.png")} alt="ddMenu" className="ddMenu" onClick={()=>setShowMenu(!showMenu)}></img>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <NavLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="navItem" onClick={()=>setShowMenu(false)}>Home</NavLink>
                <NavLink activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="navItem" onClick={()=>setShowMenu(false)}>About</NavLink>
                <NavLink activeClass="active" to="exper" spy={true} smooth={true} offset={-70} duration={500} className="navItem" onClick={()=>setShowMenu(false)}>Portfolio</NavLink>
                <NavLink activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="navItem" onClick={()=>setShowMenu(false)}>Clients</NavLink>
                <NavLink activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="navItem" onClick={()=>setShowMenu(false)}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
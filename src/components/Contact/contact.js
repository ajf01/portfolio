import React from "react";
import './contact.css'

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="pageTitle">My Clients</h1>
                <p className="pageDesc">
                    I have worked with many people
                </p>
                <div className="pageImgs">
                    <img src={require("../../assets/walmart.png")} alt="" className="pageImg" />
                    <img src={require("../../assets/adobe.png")} alt="" className="pageImg" />
                    <img src={require("../../assets/microsoft.png")} alt="" className="pageImg" />
                    <img src={require("../../assets/facebook.png")} alt="" className="pageImg" />
                </div>  
            </div>
            <div id="contact">
                <h1 className="pageTitle">Contact Me</h1>
                <span className="contactDesc">Hello</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="subBtn">Submit</button>
                    <div className="links">
                        <img src={require("../../assets/facebook-icon.png")} alt="" className="link" />
                        <img src={require("../../assets/twitter.png")} alt="" className="link" />
                        <img src={require("../../assets/youtube.png")} alt="" className="link" />
                        <img src={require("../../assets/instagram.png")} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
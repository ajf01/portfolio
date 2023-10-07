import React, { useRef } from "react";
import './contact.css'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("serviceID", "templateID", form.current, "publicKey").then((result) => {
            console.log(result.text);
            e.target.reset()
            alert('Email Sent!')
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <section id="contactPage">
            {/*<div id="clients">
                <h1 className="pageTitle">Previous Employers</h1>
                <p className="pageDesc">
                    Some companies I have worked with in the past include
                </p>
                <div className="pageImgs">
                    <img src={require("../../assets/walmart.png")} alt="" className="pageImg" />
                    <img src={require("../../assets/adobe.png")} alt="" className="pageImg" />
                    <img src={require("../../assets/microsoft.png")} alt="" className="pageImg" />
                    <img src={require("../../assets/facebook.png")} alt="" className="pageImg" />
                </div>  
            </div>*/}
            <div id="contact">
                <h1 className="pageTitle">Contact Me</h1>
                <span className="contactDesc">
                    If you have any questions about my skillset or past experiences, or if you have an opportunity 
                    you believe I would be qualified for feel free to contact me by filling out the form below!
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" />
                    <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="subBtn">Submit</button>
                    <div className="links">
                        <a HREF = "https://www.linkedin.com/in/anthony-fong-" target="_blank">
                            <img src={require("../../assets/linkedin_icon.png")} alt="" className="link" />
                        </a>
                        <a HREF = "https://github.com/ajf01" target="_blank">
                            <img src={require("../../assets/github_icon.png")} alt="" className="link" />
                        </a>
                        {/* <img src={require("../../assets/youtube.png")} alt="" className="link" />
                        <img src={require("../../assets/instagram.png")} alt="" className="link" /> */}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
import React from "react";
import './about.css'

const About = () => {
    return (
        <section id="about">
            <span className="aboutTitle">Work Experience</span>
            <span className="aboutDesc">I am an experienced coder that has worked in the industry for many years. Some of my professional work history and details are included below.</span>
            <div className="aboutBar">
                <div className="barItem">
                    <img src={require("../../assets/ui-design.png")} alt="" className="barImg" />
                    <div className="barText">
                        <div style={{clear: 'both'}}>
                            <h1 style={{display: 'inline', float: 'left', "font-size": '1.4rem', 'line-height': '0.8rem'}}>FutureDial</h1>
                            <h2 style={{display: 'inline', float: 'right', "font-size": '1.4rem', 'line-height': '0.8rem'}}>Software Engineer</h2>
                        </div>
                        <br/>
                        <p>
                            Evaluated and enhanced AI models by performing PCA to reduce data variance increasing accuracy by over 30%.
                            Developed ML models using TensorFlow and processed unstructured data into statistical assets with Pandas.
                            Designed and built products with interactive UI hosted on web applications with React and Node.js.
                            Established data pipelines with Apache Spark to connect in house apps with external client APIs and solutions.
                            Triaged customer issues and found timely solutions for problems relating to data instability and cloud storage.
                        </p>
                    </div>
                </div>
                <div className="barItem">
                    <img src={require("../../assets/website-design.png")} alt="" className="barImg" />
                    <div className="barText">
                        <div style={{clear: 'both'}}>
                            <h1 style={{display: 'inline', float: 'left', "font-size": '1.4rem', 'line-height': '0.8rem'}}>Jensen Partners</h1>
                            <h2 style={{display: 'inline', float: 'right', "font-size": '1.4rem', 'line-height': '0.8rem'}}>Data Scientist</h2>
                        </div>
                        <br/>
                        <p>
                            Enacted database pipeline to facilitate storage and modeling of recruitment data using MySQL and MongoDB.
                            Implemented key changes in data collection through Python and Django web scraping to improve efficiency and 
                            save over 300 hours of time in sourcing and preliminary analysis. Devised and created an interactive 
                            application to streamline customer requests utilizing JavaScript and HTML. Led the investment data team 
                            to effectively source and monitor key executive transitions in industry
                        </p>
                    </div>
                </div>
                <div className="barItem">
                    {/*<img src={require("../../assets/app-design.png")} alt="" className="barImg" />*/}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/UCSD_Seal.png" alt="" className="barImg" />
                    <div className="barText">
                        <div style={{clear: 'both'}}>
                            <h1 style={{display: 'inline', float: 'left', "font-size": '1.4rem', 'line-height': '0.8rem'}}>UC San Diego</h1>
                            <h2 style={{display: 'inline', float: 'right', "font-size": '1.4rem', 'line-height': '0.8rem'}}>Financial Analyst</h2>
                        </div>
                        <br/>
                        <p>
                            Managed 5-million-dollar budget by identifying variances and directing corrective actions, avoiding overruns 
                            and maintaining a positive cash position. Audited expenses for accuracy and potential signs of fraud using 
                            Python and statistical analysis. Collected financial data and developed comprehensive excel spreadsheets and 
                            data visualizations with Tableau that revealed trends and expense forecasts
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
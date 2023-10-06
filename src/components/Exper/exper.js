import React from "react";
import './exper.css'

const Exper = () => {
    return (
        <section id="exper">
            <h1 className="experTitle">My Portfolio</h1>
            <span className="experDesc">Some examples of my works and what my skillset entails.</span>
            <div className="experImgs">
                {/*<img src={require("../../assets/portfolio-1.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-2.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-3.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-4.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-5.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-6.png")} alt="" className="experImg" />*/}
                <div className="experImg">
                    <h1 style={{display: 'inline'}}>SD Hacks Best Use of AWS 2019 &emsp;</h1>
                    <a style={{display: 'inline'}} HREF="https://github.com/nonguyen1/BullyGuard" target="_blank">https://github.com/nonguyen1/BullyGuard</a>
                    <p>
                        Won first prize in the “Best Use of AWS” category. Developed a NLP model with Amazon Comprehend, 
                        hosted on a TypeScript web app, with data warehousing on AWS S3 that analyzed comments in chat 
                        rooms for “bully-like” language and flagged users on a 0-4 bully scale. Collaborated with a team 
                        of 4 data scientists non-stop for 36 hours in design, testing, implementation, and execution of 
                        our project in a competitive coding environment.
                    </p>
                    <br/>
                    <h2 style={{display: 'inline'}}>Plates4U &emsp;</h2>
                    <a style={{display: 'inline'}} HREF="https://github.com/ajf01/Recipe-Recommendation" target="_blank">https://github.com/ajf01/Recipe-Recommendation</a>
                    <p>
                        Led a team of programmers to develop a Content Based Filtering recommendation system on food 
                        recipes. Designed a TF-IDF model used in the recommender system hosted on Heroku and built with 
                        React and Node.js. Deployed a backend data storage server employing NoSQL and MongoDB to stockpile 
                        user data.
                    </p>
                </div>
            </div>
            {/*<button className="experBtn">See More</button>*/}
        </section>
    )
}

export default Exper
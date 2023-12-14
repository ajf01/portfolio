import React from "react";
import './exper.css'

const Exper = () => {
    return (
        <section id="exper">
            <h1 className="experTitle">Projects and Achievements</h1>
            <span className="experDesc">Examples of previous works and what my skillset entails.</span>
            <div className="experImgs">
                {/*<img src={require("../../assets/portfolio-1.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-2.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-3.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-4.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-5.png")} alt="" className="experImg" />
                <img src={require("../../assets/portfolio-6.png")} alt="" className="experImg" />*/}
                <div className="experImg">
                    <h1 style={{display: 'inline-block', float: 'left'}}>Best Use of AWS</h1>
                    <a style={{display: 'inline-block', float: 'right', 'font-size': '1.3rem'}} HREF="https://github.com/nonguyen1/BullyGuard" target="_blank">BullyGuard</a>
                    <p style={{display: 'inline-block'}}>
                        Won first prize in the “Best Use of AWS” category. Developed a NLP model with Amazon Comprehend, 
                        hosted on a TypeScript web app, with data warehousing on AWS S3 that analyzed comments in chat 
                        rooms for “bully-like” language and flagged users on a 0-4 bully scale. Collaborated with a team 
                        of 4 data scientists non-stop for 36 hours in design, testing, implementation, and execution of 
                        our project in a competitive coding environment.
                    </p>
                </div>
                <div className="experImg">
                    <h1 style={{display: 'inline-block', float: 'left'}}>Plates4U</h1>
                    <a style={{display: 'inline-block', float: 'right', 'font-size': '1.3rem'}} HREF="https://github.com/ajf01/Recipe-Recommendation" target="_blank">Recipe Recommendation</a>
                    <p style={{display: 'inline-block'}}>
                        Led a team of programmers to develop a Content Based Filtering recommendation system on food 
                        recipes. Designed a TF-IDF model used in the recommender system hosted on Heroku and built with 
                        React and Node.js. Deployed a backend data storage server employing NoSQL and MongoDB to stockpile 
                        user data.
                    </p>
                </div>
                <div className="experImg">
                    <h1 style={{display: 'inline-block', float: 'left'}}>Hip Hop Evolution</h1>
                    <a style={{display: 'inline-block', float: 'right', 'font-size': '1.3rem'}} HREF="https://infogram.com/hip-hop-changes-over-time-1h706ed8vjkj45y?live" target="_blank">Infogram</a>
                    <p style={{display: 'inline-block'}}>
                        Designed an infogram on how the hip hop music genre has changed over time. Performed ETL on publicly available 
                        Spotify, SoundCloud, and Billboard music history data to develop an engaging visual representation of how hip hop has 
                        changed over time. Python was the main language utilized with the NumPy, Pandas, and Beautiful Soup package to perform 
                        effective data sourcing, cleaning, and modeling.
                    </p>
                </div>
            </div>
            {/*<button className="experBtn">See More</button>*/}
        </section>
    )
}

export default Exper
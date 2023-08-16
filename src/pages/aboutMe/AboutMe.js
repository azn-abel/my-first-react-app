import "../../styles/index.css";
import "./aboutMe.css"
import AbelPic from "../../images/Abel Lu.jpg";

const AboutMe = () => {

    return (
        <div className="AboutMe page" id="about-me">
            <br />
            <h2>About Me</h2>
            <div className="about-me-container">
                <div className="about-me-box">
                    <br />
                    <img src={AbelPic} height="450px" width="300px" alt="Abel Lu" />
                </div>

                <div className="about-me-box">
                <h3 className="Hello">Hi, I'm Abel Lu 👋</h3>
                <br/>
                <p> My name is Abel Lu, and I'm a second-year Computer Science student at North Carolina State University.
                    I've previously taken Software Development Fundamentals, a Java class where I learned
                    about software development best practices, unit testing, and finite state machines, as well as an
                    Intro to Data Science course where I used RStudio and Python to analyze and visualize data
                    with dplyr, numpy, pandas, and matplotlib. This upcoming year, I will be taking Discrete Math,
                    C / Software Tools, and Data Structures and Algorithms.<br/><br/>

                    Aside from my
                    coursework, I'm also working on a few personal projects, including a Osu-themed Discord bot
                    being made using discord.py, as well as the digital portfolio you're reading right now, which I
                    built to practice React. If you'd like to get in touch with me, feel free to contact me through
                    LinkedIn or through my contact page. I'm happy to connect!</p>
                    <br></br>
                    {/*<div className="bullets-container">*/}
                    {/*    <div className="bullet">*/}
                    {/*        <b style={{display: "block", width: "100%", textAlign: "left"}}>Experience: </b>*/}
                    {/*        <ul>*/}
                    {/*            <li>RENCI: Platform Engineer Intern</li>*/}
                    {/*            <li>Lowe's: Software Engineer Intern</li>*/}
                    {/*            <li>Cisco: Engineering Extern</li>*/}
                    {/*        </ul>*/}
                    {/*        <br/>*/}
                    {/*    </div>*/}
                    {/*    <div className="bullet">*/}
                    {/*        <b style={{display: "block", width: "100%", textAlign: "left"}}>Skills: </b>*/}
                    {/*        <ul>*/}
                    {/*            <li>Java, Python, SQL, HTML/CSS, JavaScript</li>*/}
                    {/*            <li>React, Redux, Spring Boot</li>*/}
                    {/*            <li>Docker, Git, Prometheus, Grafana</li>*/}
                    {/*        </ul>*/}
                    {/*        <br/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;
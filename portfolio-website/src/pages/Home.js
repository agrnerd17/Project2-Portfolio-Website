import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
    return ( 
    <div className="home">
        <div className="about"> 
        <h2>Hi, my name is Amelie</h2>
        <div className="prompt"> 
        <p>
            A software engineering enthusiast with a passion for coding.
        </p>
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />

        </div>

        </div>
        <div className="skills"> 
        <h1>Skills</h1>
        <ol className="list">
        <li className="item">
        <h2>Front-End</h2>
        <span>
            ReactJS, HTML, CSS, NPM, Material UI,
            BootStrap, StyledComponents
        </span>
        </li>
        <li className="item">
        <h2>Machine Learning</h2>
        <span>
            TensorFlow, Pandas, NumPy, Plotly,
            Reinforcement Learning
        </span>
        </li>
        <li className="item">
        <h2>Languages</h2>
        <span>
            JavaScript, Python, C++, MySQL
        </span>
        </li>
        </ol>
        </div>

        </div>
)
}

export default Home;
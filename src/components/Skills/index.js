import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skill = ["S", "k", "i", "l", "l", "s"];
  const experience = ["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"];
  return (
    <div class="container1 skillsPage">
      <div>
        <h2 className="header">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={skill}
            idx={10}
          />
          <span> & </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={experience}
            idx={16}
          />
        </h2>
        <h2 className="para">
          Besides gaming, singing, and cooking I'm good at the following skills{" "}
          <br />
          <span>
            Frontend Design, Javascript, CSS, HTML, SCSS, ReactJs, Redux,
            <br /> MongoDb, NodeJS, ExpressJs, Mern Stack.{" "}
          </span>
        </h2>
      </div>
      <div className="side">
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

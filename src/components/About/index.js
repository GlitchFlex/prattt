import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";

const About = ()=>{
    const about = ["A","b","o","u","t"];
    const me = ["M","e"];
    const[letterClass, setLetterClass]=useState("text-animate");
    return (
        
        <div className="container1 aboutPage">
            <div className="textzone">
                <h1>
                    <AnimatedLetters strArray={about} letterClass={letterClass} idx={10}/>
                    <span> </span>
                    <AnimatedLetters strArray={me} letterClass={letterClass} idx={16}/>
                </h1>
                <h2>Hola, <br />
                    I'm a MERN developer <br />
                    With a serious knack towards Frontend development and design <br />
                    To be brief about myself <br />
                    I'm an ambitious learner improving myself one day at a time. <br />
                    Oh wait! 
                    <br /> Did I state that I'm a socially awkward guy...
                </h2>
            </div>
            <div className="tubeLight">
                <h2>
                    <span>P</span>
                    <span>R</span>
                    <span>A</span>
                    <span>T</span>
                    <span>T</span>
                    <span>T</span>
                </h2>
            </div>
            
           
        </div>
        
    )
}

export default About;
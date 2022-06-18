import "./index.scss";
import { useState } from "react";
import AnimatedLetter from "../AnimatedLetters";
import ig from "../../assets/icons/ig.png"
import linkedin from "../../assets/icons/linkedin.png"
import github from "../../assets/icons/github5.png"
import gmail from "../../assets/icons/gmail.png"


const Contact = ()=>{
    const [letterClass, setLetterClass] = useState("text-animate");
    const contact = ["C","o","n","t","a","c","t"];
    const me = ["M","e"]
    return (
        <div className="container1 contact">
            <h1>
                <AnimatedLetter letterClass={letterClass} strArray = {contact} idx={10}/>
                <span> </span>
                <AnimatedLetter letterClass={letterClass} strArray = {me} idx={17}/>
            </h1>
            <div className="contactIcons">
                <div className="icons">
                    <a href="https://www.instagram.com/glitched__god/" target="_blank">
                        <img src={ig} alt="sorry" />
                    </a>
                </div>
                <div className="icons">
                    <a href="mailto:pratyugna@gmail.com" target="_blank">
                        <img src={gmail} alt="sorry" />
                    </a>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/pratyugna-manna-813735227/" target="_blank">
                        <img src={linkedin} alt="sorry" />
                    </a>
                </div>
                <div className="icons git">
                    <a href="https://github.com/GlitchFlex" target="_blank">
                        <img src={github} alt="sorry" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contact;
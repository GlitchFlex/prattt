import { useEffect, useState } from 'react';
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import Logo from "../../assets/images/myP3.png"

const Home = ()=>{

    const [letterClass, setLetterClass] = useState('text-animate');
   

    const hola = ["H","o","l","a"];
    const im= ["I","'","m"," "," "];
    const name = [" ","P","r","a","t","t","t"];
    const job = ["w","e","b"," ","d","e","v","e","l","o","p","e","r"];

    return <div className='container1 homepage'>
        <div className="textZone">
            <h1><AnimatedLetters letterClass ={letterClass} strArray={hola} idx = {0}/>, <br />
            <AnimatedLetters letterClass = {letterClass} strArray={im} idx={4}/> 
            <span><AnimatedLetters letterClass = {letterClass} strArray={name} idx={8}/> </span>, 
            <br /> 
            <AnimatedLetters letterClass={letterClass} strArray={job} idx={13}/>
            <br /></h1>
            <h2>FULLSTACK DEVELOPER</h2>
            <a href="https://drive.google.com/file/d/1YgVGJoujNzLpadzOJmVDATfG6AzGhjJi/view?usp=sharing" target="_blank">
                <button className="btn">DOWNLOAD CV</button>
            </a>
        </div>

        <div className="big">
            <img className="bigLogo" src={Logo} alt="sory" />
        </div>


    </div>
        
}

export default Home;

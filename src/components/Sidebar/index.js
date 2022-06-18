import { Link,NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/myP3.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
 return <>
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img className="bigLogo" src={LogoS} alt="sorry" />
            
        </Link>
       
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" className="homeLink">
                <FontAwesomeIcon icon={faHome} color="black" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="aboutLink" to="/about">
                <FontAwesomeIcon icon={faUser} color="black" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/skills" className="skillsLink">
                <FontAwesomeIcon icon={faScrewdriverWrench} color="black" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="contactLink">
                <FontAwesomeIcon icon={faEnvelope} color="black" />
            </NavLink>
        </nav>
    </div>    
 
 
 </>
}

export default Sidebar;
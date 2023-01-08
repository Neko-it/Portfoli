import{Link, NavLink} from 'react-router-dom'
import './index.scss'
import Logo from '../../asset/images/logo2.png'
import LogoSub from '../../asset/images/sublogo3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faCubes, faDownload, faEnvelope, faUserCircle} from'@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Sidebar = ()=> (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo"/>
            <img className='sub-logo' src={LogoSub} alt="sublogo"/>
        </Link>

        <nav>
            <NavLink exact="true" 
            activeclassname="active" to="/">
                <FontAwesomeIcon icon={faUserCircle} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" 
                activeclassname="active" 
                className="esp-link" 
                to="/esp">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" 
                activeclassname="active" 
                className="code-link" 
                to="/code">
                <FontAwesomeIcon icon={faCubes} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a className='cV'
                  target="_blank"
                  rel='noreferrer'
                  href=''
                  >
                    <FontAwesomeIcon icon={faDownload} color="#ff8c00"/>
                </a>
            </li>
            <li>
                <a
                  target="_blank"
                  rel='noreferrer'
                  href=''>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                  target="_blank"
                  rel='noreferrer'
                  href='https://github.com/Neko-it'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                  target="_blank"
                  rel='noreferrer'
                  href='https://discord.gg/JcjX6A2PDv'>
                    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e"/>
                </a>
            </li>
            
        </ul>
    </div>

    )

export default Sidebar
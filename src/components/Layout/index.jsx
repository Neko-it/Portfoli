import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import Video from "../../asset/video.mp4";

const Layout = () => {
    return( 
    <div className='App'>
        <Sidebar />
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
        </video>
        <div className='page'>
            <span className='tags nome-top'>&lt;Neko&gt;</span>

            <Outlet />
            
            <span className='tags nome-bottom'>
            &lt;/ Matteo Frigo
            <FontAwesomeIcon icon={faPaw} color="Red"/>&gt;</span>  
        </div>
    </div>
    )
}

export default Layout
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";


import './index.scss';

const Home =()=>{
    const [nota, setLetterClass] = useState('text-animate')
    const nameArray =[' ','D','e','v','e','l','o','p','e','r']

    useEffect(()=>{
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    },[])

    return (
        <>
        <div className="container home-page">
        
          <div className="text-zone"> 
            <h1>
              <span className={nota}>M</span>
              <span className={nota}>A</span>
              <span className={nota}>T</span>
              <span className={nota}>T</span>
              <span className={nota}>E</span>
              <span className={nota}>O</span>
              <br/>
              <span className={nota}>F</span>
              <span className={nota}>R</span>
              <span className={nota}>I</span>
              <span className={nota}>G</span>
              <span className={nota}>O</span> 
              <br/>
              <AnimatedLetters letterClass={nota}
                  strArray={nameArray}
                  idx={15}/>

            </h1>
            <h2><span className={nota}>FullStack Developer </span>
            <FontAwesomeIcon icon={faPaw} color="#ff8c00"/> 
            <span className={nota}>Game Creators </span>
            <FontAwesomeIcon icon={faPaw} color="#ff8c00"/>
            <span className={nota}>Desing 3D</span>
            </h2>
          </div> 
             
        </div>
        <Loader type="ball-clip-rotate-pulse"/>
        </>
    );
}

/*
  <Link to="/contact" className="flat-button">Contact ME</Link>         
*/
export default Home
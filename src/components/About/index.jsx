import './index.scss'
import Loader from 'react-loaders'


const About = () => {
    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>About me</h1>
            <p>Sviluppo software con Python e Java.</p>
            <p>Realizazione sito web statico, dinamico o con WordPress.</p>
            <p>Creazione applicazioni smartphone per Android</p>
            <p>Unreal Engine & Blender per desing e 3D game</p>
            </div>
        </div>
        <Loader type="ball-clip-rotate-pulse"/>
    </>
    )
}

export default About
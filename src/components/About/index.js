import PulsatingParagraphs from '../../utils/PulsatingParagraphs.js'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <PulsatingParagraphs />
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p className='p'>
                        I am a passionate Software Developer with proven coding
                        proficiency and a quick grasp for new technologies.
                    </p>
                    <p className='p'>
                        I am actively pursuing any opportunity to leverage my
                        programming experience and further enhance my skills.
                    </p>
                    <p className='p'>
                        I am experienced in project management and software
                        engineering, with a knack for innovative problem-solving.
                    </p>
                    <p className='p'>
                        I have extensive working experience in development and
                        testing and I am currently studying ICT at NHL Stenden
                        University of Applied Sciences, gaining practical
                        client-focused experience.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="60%" alt="Angular"/>
                        </div>
                        <div className="face2">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="60%" alt="HTML"/>
                        </div>
                        <div className="face3">
                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="60%" alt="CSS"/>
                        </div>
                        <div className="face4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="60%" alt="React"/>
                        </div>
                        <div className="face5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="55%" alt="JavaScript"/>
                        </div>
                        <div className="face6">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="60%" alt="git" />
                        </div>
                    </div>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="70%" alt="C Programming Language"/>
                        </div>
                        <div className="face2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="70%" alt="Java"/>
                        </div>
                        <div className="face3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"  height="70%" alt="Python"/>
                        </div>
                        <div className="face4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="70%" alt="php" />
                        </div>
                        <div className="face5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height="70%" alt="C sharp"/>
                        </div>
                        <div className="face6">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" height="50%" alt="Kotlin"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="cube-transition" />
        </>  
    )
}

export default About

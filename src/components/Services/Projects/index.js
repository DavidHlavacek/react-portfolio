import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import UnderConstructionPage from '../../UnderConstruction'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const pageTitle = [
        'W',
        'e',
        'l',
        'c',
        'o',
        'm',
        'e',
        ' ',
        't',
        'o',
        ' ',
        'm',
        'y',
        ' ',
        'P',
        'r',
        'o',
        'j',
        'e',
        'c',
        't',
        's',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <div className="project-container project-home">
            <div className="text-zone">
               <UnderConstructionPage />
            </div>
        </div>
    )
}

export default Projects;

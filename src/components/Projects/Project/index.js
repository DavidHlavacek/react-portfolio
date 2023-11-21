import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const Project = () => {
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
        }, 3500)
    }, [])
    return (
        <div className="project-container project-home">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={pageTitle}
                        idx={8}
                    />
                </h1>
                <p>Hi, there!</p>
            </div>
        </div>
    )
}

export default Project

import React from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const Project1 = () => {
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

        'P',
        'r',
        'o',
        'j',
        'e',
        'c',
        't',
        '1',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <div className="project-container project-home">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={pageTitle}
                        idx={5}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Project1

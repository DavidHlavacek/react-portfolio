// projects-bar.js

import React, { useState, useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'
import './index.scss'
import Loader from 'react-loaders'

const JSIcon = require('../../assets/icons/JSIcon.png')

const ProjectsBar = ({ showPage, setShowPage }) => {
    const [hidePage, setHidePage] = useState([])

    useEffect(() => {
        // Set the first tab as the initially selected tab
        setShowPage('Projects')
    }, []) // Empty dependency array ensures this effect runs only once on mount

    const handleTabClick = (page) => {
        setShowPage(page)
        setHidePage((prevState) => prevState.filter((item) => item !== page))
    }

    const handleTabCloseClick = (e, page) => {
        e.stopPropagation()
        const newHiddenPage = [...hidePage, page]
        const remainingTabs = [
            'Projects',
            'Project1',
            'Project2',
            'Project3',
        ].filter((tab) => !newHiddenPage.includes(tab))

        // Set the first remaining tab as the new selected tab
        setShowPage(remainingTabs[0])

        // Update the hidden pages
        setHidePage(newHiddenPage)
    }

    return (
        <>
        <div className="page-container">
            <div className="projectBar-container">
                {['Projects', 'Project1', 'Project2', 'Project3'].map((page, index, array) =>
                    hidePage.includes(page) ? null : (
                        <>
                            <div
                                key={page}
                                className={`${
                                    showPage === page
                                        ? 'activeProjectContainer'
                                        : 'projectContainer'
                                } ${index === array.length - 1 ? 'last' : ''}`}
                                onClick={() => handleTabClick(page)}
                            >
                                <img
                                    src={JSIcon}
                                    alt="JS Icon"
                                    className="w-7 mr-1 text-yellow_vs"
                                />
                                <p>{`${
                                    page.charAt(0).toUpperCase() + page.slice(1)
                                }.js`}</p>
                                <div
                                    className="x-button"
                                    onClick={(e) =>
                                        handleTabCloseClick(e, page)
                                    }
                                >
                                    <XIcon
                                        className={`w-6 ml-4 hover:bg-gray-600 hover:rounded ${
                                            showPage === page ? 'visible' : ''
                                        }`}
                                    />
                                </div>
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
        <Loader type="cube-transition" />
        </>

    )
}

export default ProjectsBar

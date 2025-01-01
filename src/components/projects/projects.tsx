import React from 'react';
import { SectionComponent, Subtitleandtitle } from '../extraComponents/Components.tsx';
import './projects.css'

const Projects = () => {
    return (
        <>
            <SectionComponent
                id='Projects'
                child={
                    <>
                        <Subtitleandtitle subtitle='Browse My Recent' title='Projects' />
                        <div className="project-parentdiv">
                            <div className="project-child">
                                <h1>Project 1</h1>
                            </div>
                            <div className="project-child">
                                <h1>Project 2</h1>

                            </div>
                            <div className="project-child">
                                <h1>Project 3</h1>
                            </div>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default Projects
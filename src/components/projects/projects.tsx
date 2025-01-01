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

                            </div>
                            <div className="project-child">

                            </div>
                            <div className="project-child">

                            </div>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default Projects
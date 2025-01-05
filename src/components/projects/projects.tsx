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
                                <div className="projectinnerchild">
                                    <img src="../Images/plantbased.png" alt="" className="projectimgsrc" />
                                </div>
                            </div>
                            <div className="project-child">
                                <h1>Project 2</h1>
                                <div className="projectinnerchild">
                                    <img src="../Images/Clothshop.png" alt="" className="projectimgsrc" />
                                </div>
                            </div>
                            <div className="project-child">
                                <h1>Project 3</h1>
                                <div className="projectinnerchild">
                                    <img src="../Images/plantbased.png" alt="" className="projectimgsrc" />
                                </div>
                            </div>
                        </div>
                        {/* <div className='viewallprojects'>
                            <a href='#' className='cstm-projects-btn'>View Projects</a>
                        </div> */}
                    </>
                }
            />
        </>
    )
}

export default Projects
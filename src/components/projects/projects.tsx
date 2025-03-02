import React from 'react';
import { SectionComponent, Subtitleandtitle } from '../extraComponents/Components.tsx';
import './projects.css'
import { ProjectCardDivProps } from '../../interface/interface.tsx';

export const Projects = () => {
    return (
        <>
            <SectionComponent
                id='Projects'
                child={
                    <>
                        <Subtitleandtitle subtitle='Browse My Recent' title='Projects' />
                        <div className="project-parentdiv">
                            <ProjectCardDiv projectimg='../Images/Shop.cloth.png' projectno='Project 1' projecthref='https://clothappbvm.vercel.app/'/>
                            <ProjectCardDiv projectimg='../Images/expense_tracker.png' projectno='Project 2' projecthref='https://expense-tracker-bvm.vercel.app/'/>
                            <ProjectCardDiv projectimg='../Images/Plantbasedapp.png' projectno='Project 3' />
                            <ProjectCardDiv projectimg='../Images/instagramandfacebookclone.png' projectno='Project 4' />
                            <ProjectCardDiv projectimg='../Images/instagram.png' projectno='Project 5' />
                            <ProjectCardDiv projectimg='../Images/Resume_portfolio.png' projectno='Project 6' projecthref='https://blessenportfolio.vercel.app/'/>
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

export const ProjectCardDiv:React.FC<ProjectCardDivProps> = (Props) =>{

    return(
        <>
            <div className="project-child">
                <h1>{Props.projectno}</h1>
                <div className="projectinnerchild">
                    {Props.projecthref ? (
                        <>
                            <a href={Props.projecthref} style={{ cursor : 'pointer'}} target='_blank' >
                                <img src={Props.projectimg} alt="" className="projectimgsrc" />
                            </a>
                        </>
                    ) : (
                        <>
                            <img src={Props.projectimg} alt="" className="projectimgsrc" /> 
                        </>
                    ) }
                </div>
            </div>
        </>
    )
}
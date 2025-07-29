import React, { useState } from 'react';
import { SectionComponent, Subtitleandtitle } from '../extraComponents/Components.tsx';
import './projects.css'
import { ProjectCardDivProps } from '../../interface/interface.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {

    const [ismodalopen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {

        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const handleModalClose = () => {

        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <SectionComponent
                id='Projects'
                child={
                    <>
                        <Subtitleandtitle subtitle='Browse My Recent' title='Projects' />
                        <div className="project-parentdiv">
                            <ProjectCardDiv projectimg='../Images/Shop.cloth.png' projectno='Project 1' projecthref='https://clothappbvm.vercel.app/' />
                            <ProjectCardDiv projectimg='../Images/expense_tracker.png' projectno='Project 2' projecthref='https://expense-tracker-bvm.vercel.app/' />
                            <ProjectCardDiv projectimg='../Images/Geelong_Pentecostal_Assembly.png' projectno='Project 3' projecthref='https://www.geelongpentecostalassembly.com.au/' />
                        </div>
                        <div className='viewallprojects'>
                            <a href='#' className='cstm-projects-btn' onClick={handleModalOpen}>View Projects</a>
                        </div>
                        {ismodalopen && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <div className='close-modal-icondiv'><FontAwesomeIcon icon={faClose} onClick={handleModalClose} /></div>
                                    <div className="product-modalcstm">
                                        <MoreProjectCardDiv projectimg='../Images/Shop.cloth.png' projectno='Project 1' projecthref='https://clothappbvm.vercel.app/' />
                                        <MoreProjectCardDiv projectimg='../Images/expense_tracker.png' projectno='Project 2' projecthref='https://expense-tracker-bvm.vercel.app/' />
                                        <MoreProjectCardDiv projectimg='../Images/Geelong_Pentecostal_Assembly.png' projectno='Project 3' projecthref='https://www.geelongpentecostalassembly.com.au/' />
                                        <MoreProjectCardDiv projectimg='../Images/instagramandfacebookclone.png' projectno='Project 4' />
                                        <MoreProjectCardDiv projectimg='../Images/instagram.png' projectno='Project 5' />
                                        <MoreProjectCardDiv projectimg='../Images/Resume_portfolio.png' projectno='Project 6' projecthref='https://blessenportfolio.vercel.app/' />
                                        <MoreProjectCardDiv projectimg='../Images/Plantbasedapp.png' projectno='Project 7' />

                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                }
            />
        </>
    )
}

export const ProjectCardDiv: React.FC<ProjectCardDivProps> = (Props) => {

    return (
        <>
            <div className="project-child">
                <h1>{Props.projectno}</h1>
                <div className="projectinnerchild">
                    {Props.projecthref ? (
                        <>
                            <a href={Props.projecthref} style={{ cursor: 'pointer' }} target='_blank' >
                                <img src={Props.projectimg} alt="" className="projectimgsrc" />
                            </a>
                        </>
                    ) : (
                        <>
                            <img src={Props.projectimg} alt="" className="projectimgsrc" />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export const MoreProjectCardDiv: React.FC<ProjectCardDivProps> = (Props) => {

    return (
        <>
            <div className="project-child1">
                <h1>{Props.projectno}</h1>
                <div className="projectinnerchild">
                    {Props.projecthref ? (
                        <>
                            <a href={Props.projecthref} style={{ cursor: 'pointer' }} target='_blank' >
                                <img src={Props.projectimg} alt="" className="projectimgsrc1" />
                            </a>
                        </>
                    ) : (
                        <>
                            <img src={Props.projectimg} alt="" className="projectimgsrc1" />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
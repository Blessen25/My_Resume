import React from 'react'
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchorCircleCheck, faBridgeCircleCheck, faCheckCircle, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import ExperiencewithIcon from '../extraComponents/experiencewithicon.tsx';
import { SectionComponent, Subtitleandtitle } from '../extraComponents/Components.tsx';


const Experience = () => {
    return (
        <SectionComponent id='Experience' child={<>
            <Subtitleandtitle subtitle='Explore My' title='Experience' />
            <div className="experienceparentdiv">
                <div className="experiencechildone">
                    <div className="experiencechildbox">
                        <h1>Front-end Developement</h1>
                        <div className="experienceboxinnerbox">
                            <ExperiencewithIcon language={'HTML'} level={'Experienced'} />
                            <ExperiencewithIcon language={'CSS'} level={'Experienced'} />
                        </div>
                        <div className="experienceboxinnerbox">
                            <ExperiencewithIcon language={'React'} level={'Intermediate'} />
                            <ExperiencewithIcon language={'Bootstrap'} level={'Intermediate'} style={{ paddingLeft: '3px' }} />
                        </div>
                        <div className="experienceboxinnerbox">
                            <ExperiencewithIcon language={'JavaScript'} level={'Basic'} style={{ paddingRight: '11px' }} />
                        </div>
                    </div>
                </div>
                <div className="experiencechildtwo">
                    <div className="experiencechildbox">
                        <h1>Back-end Development</h1>
                        <div className="experienceboxinnerbox">
                            <ExperiencewithIcon language={'Python'} level={'Intermediate'} />
                            <ExperiencewithIcon language={'Github'} level={'Intermediate'} />
                        </div>
                        <div className="experienceboxinnerbox">
                            <ExperiencewithIcon language={'Django'} level={'Intermediate'} />
                        </div>
                    </div>
                </div>
            </div>
        </>} />
    )
}

export default Experience
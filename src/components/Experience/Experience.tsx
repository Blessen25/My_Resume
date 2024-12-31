import React from 'react'
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchorCircleCheck, faBridgeCircleCheck, faCheckCircle, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
    return (
        <section className='experience-custom' id='Experience'>
            <div className="experience-intro">
                <p>Explore My</p>
                <h1>Experience</h1>
            </div>
            <div className="experienceparentdiv">
                <div className="experiencechildone">
                    <div className="experiencechildbox">
                        <h1>Front-end Developement</h1>
                        <div className="experienceboxinnerbox">
                            <div className="experienceboxinnerboxchildone">
                                <FontAwesomeIcon icon={faCheckCircle} fontSize={30} />
                                <div className="experienceboxinnerboxcontent">
                                    <p>HTML</p>
                                    <p>Experienced</p>
                                </div>
                            </div>
                            <div className="experienceboxinnerboxchildone">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="experiencechildtwo">
                    <div className="experiencechildbox">
                        <h1>Back-end Development</h1>
                        <div className="experienceboxinnerbox">
                            <div className="experienceboxinnerboxchildone">
                                <FontAwesomeIcon icon={faAnchorCircleCheck} fontSize={20} />
                            </div>
                            <div className="experienceboxinnerboxchildone">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
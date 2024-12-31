import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './extra.css'

interface ExperiencewithIconProps {
    language: string;
    level: string;
    style?: React.CSSProperties;
}
const ExperiencewithIcon: React.FC<ExperiencewithIconProps> = (props) => {
    return (
        <div className="experienceboxinnerboxchildone" style={props.style}>
            <FontAwesomeIcon icon={faCheckCircle} fontSize={30} className='experiencecheckicon' />
            <div className="experienceboxinnerboxcontent">
                <h1>{props.language}</h1>
                <p>{props.level}</p>
            </div>
        </div>
    )
}

export default ExperiencewithIcon;
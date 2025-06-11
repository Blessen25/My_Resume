import React from "react";
import './Aboutus.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { SectionComponent, Subtitleandtitle } from "../extraComponents/Components.tsx";

const Aboutus = () => {
    return (
        <SectionComponent id="About" child={
            <>
                <Subtitleandtitle subtitle="Get To Know More" title="About Me" />
                <div className="Aboutusimageanddetails">
                    <div className="Aboutusimage">
                        <div className="image-div-about">
                            <img src="./Images/Profile_image2.jpg" alt="Profile Image" className="about-us-image" />
                        </div>
                    </div>
                    <div className="Aboutusdetails">
                        <div className="Aboutusdetailsfirst">
                            <div className="Aboutusdetailsfirstchild">
                                <FontAwesomeIcon icon={faRankingStar} className="aboutusgradicon" />
                                <h1>Experience</h1>
                                <p>1 Year</p>
                                <p>Programmer Trainee</p>
                            </div>
                            <div className="Aboutusdetailsfirstchild">
                                <FontAwesomeIcon icon={faGraduationCap} className="aboutusgradicon" />
                                <h1>Education</h1>
                                <p>B.Tech</p>
                                <p>Computer Science</p>
                            </div>
                        </div>
                        <div className="Aboutusdetailssecond">
                            <p>Hi, I’m Blessen Vinoy Mathew, a passionate and dedicated frontend developer with 10 months of professional experience in creating engaging and user-friendly websites. Building websites has always been more than just a job for me—it's a creative outlet and a true passion. I thrive on combining aesthetics with functionality, ensuring that every project I work on not only looks great but also delivers an exceptional user experience. While my job is based on frontend development, I also enjoy diving into backend technologies, enabling me to create robust full-stack applications. When I’m not coding, you’ll find me exploring new design trends, contributing to personal projects, or deepening my knowledge of web development best practices.</p>
                        </div>
                    </div>
                </div>
            </>
        } />
    )
}

export default Aboutus
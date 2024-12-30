import React from "react";
import './Aboutus.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faRankingStar } from "@fortawesome/free-solid-svg-icons";

const Aboutus = () =>{
    return(
        <section className="Aboutus-custom" id="About"> 
            <div className="knowmore">
                <p className=" margin-b-0 margin-t-0">Get to know more</p>
            </div>
            <div className="Aboutme">
                <h1>About Me</h1>
            </div>
            <div className="Aboutusimageanddetails">
                <div className="Aboutusimage">
                    <div className="image-div-about">
                        <img src="./Images/Profile_image2.jpg" alt="Profile Image" className="about-us-image"/>
                    </div>
                </div>
                <div className="Aboutusdetails">
                    <div className="Aboutusdetailsfirst">
                        <div className="Aboutusdetailsfirstchild">
                            <FontAwesomeIcon icon={faRankingStar} className="aboutusgradicon"/>
                             <h1>Experience</h1>
                             <p>10 months</p>
                             <p>Front-end Developer</p>
                        </div>
                        <div className="Aboutusdetailsfirstchild">
                            <FontAwesomeIcon icon={faGraduationCap} className="aboutusgradicon"/>
                            <h1>Education</h1>
                            <p>B.Tech</p>
                            <p>Computer Science</p>
                        </div>
                    </div>
                    <div className="Aboutusdetailssecond">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias nesciunt temporibus similique recusandae totam consectetur! Voluptatibus quisquam optio, earum voluptates ut dolorem maiores, eligendi amet blanditiis corrupti a voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti quaerat. In voluptatum facere vitae praesentium aspernatur sunt ea ab reiciendis consequatur? Expedita aperiam perspiciatis iusto assumenda saepe, architecto itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus
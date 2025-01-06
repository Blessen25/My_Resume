import React from "react";
import './Home.css'
import { SectionComponent } from "../extraComponents/Components.tsx";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const handleDownloadcv = () => {
        window.open('./Images/Resume_BlessenVinoyMathew.pdf')
    }

    const handlelinkdinclick = () => {
        window.open('https://www.linkedin.com/in/blessen-vinoy-mathew-21881b1a4')
    }

    const handlegithubclick = () => {
        window.open('https://github.com/Blessen25')
    }

    return (
        <SectionComponent id="Home" cusclassname="Homediv-custom-cstm" child={
            <>
                <div className="photoanddetailssection">
                    <div className="photosection">
                        <div className="imagediv">
                            <img src="./Images/Profile_image.jpg" alt="Profile Image" className="image-custom" />
                        </div>
                    </div>
                    <div className="detailssection">
                        <div className="detailsdiV">
                            <div className="homehellodiv w-100">
                                <p className="margin-t-0 margin-b-0">Hello, I'm</p>
                            </div>
                            <div className="homenamediv">
                                <h1 className="margin-t-0 margin-b-0">Blessen Vinoy Mathew</h1>
                            </div>
                            <div className="homedesignationdiv">
                                <h1 className="margin-t-0 margin-b-0">Software Developer</h1>
                            </div>
                            <div className="homebuttondiv">
                                <a href="#" className="downlaodbtn-custom" onClick={handleDownloadcv} target="_blank">Download CV</a>
                                <a href="#Contact" className="contactinfobtn-custom">Contact Info</a>
                            </div>
                            <div className="homesocialbuttondiv">
                                <div className="linkdindiv" onClick={handlelinkdinclick}>
                                    <img src="./Images/linkdin.jpg" alt="linkdin image" className="socialmediaimg" />
                                </div>
                                <div className="linkdindiv" onClick={handlegithubclick}>
                                    <img src="./Images/Github.jpg" alt="linkdin image" className="socialmediaimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }>
        </SectionComponent>
    )
}

export default Home
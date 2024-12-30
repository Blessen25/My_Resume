import React from "react";
import './Home.css'

const Home = () =>{

    const handleDownloadcv = () =>{
        window.open('./Images/Blessen_Resume.pdf')
    }

    const handlelinkdinclick = () =>{
        window.open('#')
    }

    const handlegithubclick = () =>{
        window.open('#')
    }

    const handleContactinfo = () =>{
        window.open('#')
    }
return(
        <section className="Homediv-custom" id="Home">
            <div className="photoanddetailssection">
                <div className="photosection">
                    <div className="imagediv">
                        <img src="./Images/Profile_image.jpg" alt="Profile Image" className="image-custom"/>
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
                            <button className="downlaodbtn-custom" onClick={handleDownloadcv}>Download CV</button>
                            <button className="contactinfobtn-custom" onClick={handleContactinfo}>Contact Info</button>
                        </div>
                        <div className="homesocialbuttondiv">
                            <div className="linkdindiv" onClick={handlelinkdinclick}>
                                <img src="./Images/linkdin.jpg" alt="linkdin image" className="socialmediaimg"/>
                            </div>
                            <div className="linkdindiv" onClick={handlegithubclick}>
                                <img src="./Images/Github.jpg" alt="linkdin image" className="socialmediaimg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Home
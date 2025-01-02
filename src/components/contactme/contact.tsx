import React from "react";
import './contact.css'
import { SectionComponent, Subtitleandtitle } from "../extraComponents/Components.tsx";

const Contactme = () =>{
    return(
        <SectionComponent id={"Contact"} child={
            <>
            <Subtitleandtitle subtitle="Get In Touch" title="Contact Me"/>
            <div className="contact-parentdiv">
                <div className="contact-childdiv">
                    
                </div>
            </div>
            </>
        } />
    )
}

export default Contactme
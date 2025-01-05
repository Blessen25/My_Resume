import React from "react";
import './contact.css'
import { SectionComponent, Subtitleandtitle } from "../extraComponents/Components.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contactme = () => {
    return (
        <SectionComponent id={"Contact"} child={
            <>
                <Subtitleandtitle subtitle="Get In Touch" title="Contact Me" />
                <div className="contact-parentdiv">
                    <div className="contact-childdiv">
                        <div className="contact-innerchild">
                            <div className="contact-innerrounddiv">
                                <FontAwesomeIcon icon={faEnvelope} className="mailclass-cstm" />
                            </div>
                            <a href="mailto:blessenvinoymathew25@gmail.com" className="contact-atag">blessenvinoymathew25@gmail.com</a>
                        </div>
                        <div className="contact-innerchild2">
                            <div className="contact-innerrounddiv">
                                <FontAwesomeIcon icon={faPhone} className="mailclass-cstm" />
                            </div>
                            <a href="tel:+919074493076" className="contact-atag">9074493076</a>
                        </div>
                    </div>
                </div>
                <div className="chatonwhatsapp">
                    <a href="https://wa.me/919400260187" className="btn-chatwhatsapp" target="_blank">Chat on Whatsapp</a>
                </div>
            </>
        } />
    )
}

export default Contactme
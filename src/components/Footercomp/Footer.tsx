import React from 'react';
import './Footer.css'

interface FootercompProps {
    scrollToSection: (id: string) => void;
    activeSection: string;
}

const FooterComp: React.FC<FootercompProps> = (Props) => {
    return (
        <div className="footercstm">
            <div className="footerchilddiv">
                <div className="footerchildcontent">
                    <a href="#" className={`${Props.activeSection === 'Home' ? "headeractive" : " "}`} >Home</a>
                    <a href="#About" className={`${Props.activeSection === 'About' ? "headeractive" : " "}`} >About</a>
                    <a href="#Experience" className={`${Props.activeSection === 'Experience' ? "headeractive" : " "}`} >Experience</a>
                    <a href="#Projects" className={`${Props.activeSection === 'Projects' ? "headeractive" : " "}`} >Projects</a>
                    <a href="#Contact" className={`${Props.activeSection === 'Contact' ? "headeractive" : " "}`} >Contact</a>
                </div>
            </div>
            <div className="footerchilddiv2">
                <p>© 2025 Blessen Vinoy Mathew</p>
            </div>
        </div>
    )
}

export default FooterComp
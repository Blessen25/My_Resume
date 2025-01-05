import React, { useState } from "react";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    scrollToSection: (id: string) => void;
    activeSection: string;
}

const Header: React.FC<HeaderProps> = (Props) => {

    console.log(Props.activeSection)
    const [togglesidebar, setTogglesidebar] = useState<boolean>(false)
    const handletogglesidebar = () => {
        setTogglesidebar((prev) => !prev)
    }

    const handlesidebarClick = (id: string) => {
        Props.scrollToSection(id);
        setTogglesidebar(false)
    }

    return (
        <>
            <div className="header">
                <div className="headerchildone">
                    <h4 className="header-name">Blessen Vinoy Mathew</h4>
                </div>
                <div className="headerchildtwo">
                    <a href="#" className={`header-links ${Props.activeSection === 'Home' ? "headeractive" : " "}`} onClick={() => Props.scrollToSection('Home')}>Home</a>
                    <a href="#About" className={`header-links ${Props.activeSection === 'About' ? "headeractive" : " "}`} onClick={() => Props.scrollToSection('About')}>About</a>
                    <a href="#Experience" className={`header-links ${Props.activeSection === 'Experience' ? "headeractive" : " "}`} onClick={() => Props.scrollToSection('Experience')}>Experience</a>
                    <a href="#Projects" className={`header-links ${Props.activeSection === 'Projects' ? "headeractive" : " "}`} onClick={() => Props.scrollToSection('Projects')}>Projects</a>
                    <a href="#Contact" className={`header-links ${Props.activeSection === 'Contact' ? "headeractive" : " "}`} onClick={() => Props.scrollToSection('Contact')}>Contact</a>
                </div>
                <div className="headerchildrespon">
                    <FontAwesomeIcon icon={faBars} onClick={handletogglesidebar} />
                </div>
            </div>
            {togglesidebar ? (
                <>
                    <div className="sidebar">
                        <div className="header-childtwosidebar">
                            <a href="#" className={`header-links ${Props.activeSection === 'Home' ? "headeractive" : " "}`} onClick={() => handlesidebarClick('Home')}>Home</a>
                            <a href="#About" className={`header-links ${Props.activeSection === 'About' ? "headeractive" : " "}`} onClick={() => handlesidebarClick('About')}>About</a>
                            <a href="#Experience" className={`header-links ${Props.activeSection === 'Experience' ? "headeractive" : " "}`} onClick={() => handlesidebarClick('Experience')}>Experience</a>
                            <a href="#Projects" className={`header-links ${Props.activeSection === 'Projects' ? "headeractive" : " "}`} onClick={() => handlesidebarClick('Projects')}>Projects</a>
                            <a href="#Contact" className={`header-links ${Props.activeSection === 'Contact' ? "headeractive" : " "}`} onClick={() => handlesidebarClick('Contact')}>Contact</a>
                        </div>
                    </div>
                    <div className="outlay-custom">

                    </div>
                </>
            ) : ('')}
        </>
    )
}

export default Header

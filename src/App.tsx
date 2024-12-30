import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homecomp/Home.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Headercomp/Header.tsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aboutus from './components/aboutus/Aboutus.tsx';

const App: React.FC = () => {

  const [activeSection, setActiveSection] = useState<string>("Home")
  
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach((section) => observer.observe(section));
    console.log('Sections ===',sections)
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
    
  }, []);


  const scrolltoSection = (id:string)=>{
    const section = document.getElementById(id);
    if (section)(
      section.scrollIntoView({behavior:'smooth'})
    )
  }

  return (
    // <Router>
    //   <Header scrollToSection={scrolltoSection}/>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //   </Routes>
    // </Router>
    <div>
      <Header scrollToSection={scrolltoSection} activeSection={activeSection}/>
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id='About'>
          <Aboutus />
        </section>
      </main>

    </div>
  )
};

export default App;
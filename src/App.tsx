import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homecomp/Home.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Headercomp/Header.tsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aboutus from './components/aboutus/Aboutus.tsx';
import Skills from './components/Experience/Experience.tsx';
import Experience from './components/Experience/Experience.tsx';
import Custom from './components/custompage/customcode.tsx';
import Projects from './components/projects/projects.tsx';

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
    console.log('Sections ===', sections)
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };

  }, []);


  const scrolltoSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) (
      section.scrollIntoView({ behavior: 'smooth' })
    )
  }

  return (
    // <Router>
    //   <Header scrollToSection={scrolltoSection}/>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //   </Routes>
    // </Router>
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <Header scrollToSection={scrolltoSection} activeSection={activeSection} />
              <main>
                <section id="Home">
                  <Home />
                </section>
                <section id='About'>
                  <Aboutus />
                </section>
                <section id='Experience'>
                  <Experience />
                </section>
                <section id='Projects'>
                  <Projects />
                </section>
              </main>
            </div>
          } />

          <Route path='/custom' element={<Custom />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;
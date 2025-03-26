import React, { useState } from 'react'
import "./Header.css"

function Header() {
 const [menuOpen, setMenuOpen] = useState(false)
 const [activeSection, setActiveSection] = useState("home");

   const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };


  return(
   <div>
       <header>
          <nav className="navbar">
             <div className="logo">
                 <span className='power'>powerlet.</span>
             </div>
              
              <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                  <button className="close-menu-btn" onClick={() => setMenuOpen(false)} >x</button>
                     <a  href="#" onClick={() => scrollToSection('home')}>Home {activeSection === 'home' && <hr/>}
                     </a>
                     <a  href="#" onClick={() => scrollToSection('about')}>About
                      {activeSection === 'about' && <hr />}
                     </a>
                     <a  href="#" onClick={() => scrollToSection('services')}>Services
                       {activeSection === 'services' && <hr />}
                     </a>
                     <a  href="#" onClick={() => scrollToSection('mywork')}>Portfolio
                       {activeSection === 'mywork' && <hr />}
                     </a>
                     <a  href="#" onClick={() => scrollToSection('contact')}>Contact
                       {activeSection === 'contact' && <hr />}
                     </a>
              </div>
              <button className="connect-btn" onClick={() => scrollToSection('contact')}>connect with me</button>
              <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>☰</button>
          </nav>
       </header>
   </div>
  )
}

export default Header
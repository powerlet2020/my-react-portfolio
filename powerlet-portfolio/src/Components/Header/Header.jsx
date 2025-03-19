import React, { useState } from 'react'
import "./Header.css"

function Header() {
 const [menuOpen, setMenuOpen] = useState(false)

 const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
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
                     <a  href="#" onClick={() => scrollToSection('home')}>Home</a>
                     <a  href="#" onClick={() => scrollToSection('about')}>About</a>
                     <a  href="#" onClick={() => scrollToSection('services')}>Services</a>
                     <a  href="#" onClick={() => scrollToSection('mywork')}>Portfolio</a>
                     <a  href="#" onClick={() => scrollToSection('contact')}>Contact</a>
              </div>
              <button className="connect-btn" onClick={() => scrollToSection('contact')}>connect with me</button>
              <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>☰</button>
          </nav>
       </header>
   </div>
  )
}

export default Header
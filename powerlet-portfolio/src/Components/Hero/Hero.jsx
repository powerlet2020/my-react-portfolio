import React from 'react'
import profile_pic from "../../assets/headshot6.jpg"
import "./Hero.css"

function Hero() {
   const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div>
        <main className="hero">
            <div className="profile-container">
                 <img src={profile_pic} alt="profile-image" className='profile-img'/>
            </div>

             <h1 className="title">
                <span className='gradient'>Hi, i'm Hamza,</span><span> a full stack developer and data scientist based in Ghana</span>
             </h1>

              <p class="description">
                 I am an experienced full-stack developer and data scientist, with several years of expertise in building and optimizing end-to-end solutions.
             </p>
              
              <div class="button-group">
                  <button className="connect-btn-hero" onClick={() => scrollToSection('contact')}>Connect with me</button>
                  <button className="resume-btn">My resume</button>
              </div>
        </main>
    </div>
  )
}

export default Hero
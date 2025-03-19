import React from 'react'
import section_pic from "../../assets/headshot2.jpg"
import "./About.css"
function About() {
  return (
    <div>
       <section className="about-section" id="about">
    <h1 className="about-title">About <span className="highlight">me</span></h1>
    <div className="about-content">
         <img src={section_pic} alt="" className='about-img' />
        <div className="text">
            <p className="para-1">
                I am a seasoned full-stack developer and data scientist with a strong professional background.
                Over the course of my career, I have had the honor of working with esteemed organizations,
                making meaningful contributions to their success and driving their growth.
            </p>
            <p className="para2">
                My passion for full-stack development and data science shines through not only in my extensive experience
                but also in the enthusiasm and dedication I bring to every project.
            </p>

            <div className="skills">
                <div className="skill">
                    <p>HTML, CSS & JavaScript</p>
                    <div className="bar"><div className="progress" style={{width: "90%"}}></div></div>
                </div>
                <div className="skill">
                    <p>React JS</p>
                    <div className="bar"><div className="progress" style={{width:"80%"}}></div></div>
                </div>
                <div className="skill">
                    <p>Node JS </p>
                    <div className="bar"><div className="progress" style={{width:"70%"}}></div></div>
                </div>
                <div className="skill">
                    <p>Python & Statistics</p>
                    <div className="bar"><div className="progress" style={{width: "85%"}}></div></div>
                </div>
                <div className="skill">
                    <p>Machine learning & Data Science</p>
                    <div className="bar"><div className="progress" style={{width: "95%"}}></div></div>
                </div>
            </div>
        </div>
    </div>

    <section className="stats">
        <div className="stat-item">
          <h2 className="number">10+</h2>
          <p className="label">YEARS OF EXPERIENCE</p>
        </div>
    <div className="stat-item">
        <h2 className="number">90+</h2>
        <p className="label">PROJECTS COMPLETED</p>
    </div>
    <div className="stat-item">
        <h2 className="number">50+</h2>
        <p className="label">HAPPY CLIENTS</p>
    </div>
    </section>
</section>
    </div>
  )
};

export default About
import React from 'react'
import '../CSS/About.css'
import Abut_Profile from '../assets/Aboutme-img.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-tittle">
                <h1>About me</h1>
                <img src="" alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={Abut_Profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="para">
                        <p>I’m a Java Full Stack Developer i loves building modern, responsive, and user-friendly web 
                            applications. I work with technologies like Java, Spring Boot, React, HTML, CSS, and JavaScript to create complete end-to-end solutions. I have strong backend knowledge, enjoy solving problems, learning new things, and I'm a highly motivated person,
                             who is eager to take on new challenges and grow as a developer.</p>
                        <p>As a fresher, I focus on writing clean code, improving my skills every day, and building projects that 
                            add real value. My goal is to grow as a developer, contribute to meaningful projects, and deliver simple, efficient, and reliable applications.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Html & CSS</p> <hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Java</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>SpringBoot</p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>SpringSecurity</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Tailwind CSS</p> <hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="achivements">
                <div className="achivement">
                    <h1>01+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="achivement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="achivement">
                    <h1>10+</h1>
                    <p>TECHNOLOGY</p>
                </div>
            </div>
        </div>
    )
}

export default About
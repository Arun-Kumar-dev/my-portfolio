import React from 'react'
import Profile from '../assets/Picsart-arun.png'
import '../CSS/Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../assets/Arunkumar S(Resume).pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Profile} alt="" className='profile-img' />
      <h1><span>I'm Arunkumar,</span> Java Full Stack Developer.</h1>
      <p>I am a passionate Java Full Stack Developer who loves building modern, user-friendly web applications. As a fresher, I focus on learning, improving my skills, and creating clean and efficient code.</p>
      <div className='hero-section'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className='hero-connect'>Connect with me</div></AnchorLink>
        <a href={resume} target='_blank' rel='noopener noreferrer' className='hero-resume'>My resume</a>
      </div>
    </div>
  )
}

export default Hero
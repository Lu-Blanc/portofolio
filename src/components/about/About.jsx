import React from 'react'
import './about.css'
import AboutImg from '../../assets/baru.jpeg'
import CV from '../../assets/CV.Fahrullah.pdf'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
    
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            
            <div className="about__data">
            <h3 className="about__title">Experiences</h3>
            <Info />
                <p className="about__description">
                I am a graduate of the Informatics Engineering Study Program from University Muslim Indonesian Makassar. I have an interest in the world of Information Technology (IT), have various abilities in the world of Informatics. Having good communication, integrity, leadership spirit,high discipline, hardworking, and able to work under pressure.
                </p>

                <a download="" href={CV} className="button button--flex">Download CV</a>
            </div>
        </div>
    </section>
  )
}

export default About
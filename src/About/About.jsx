import React from 'react'
import './About.css'
import {ReactComponent as Svg} from './svgs/javascript.svg'

export const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-content">
        <h2>Welcome</h2>
        <p>Hi :)</p>
        <p>I'm Arjun V, a passionate Full Stack Web Developer who thrives on turning ideas into digital realities.</p>
        <p>When I am not making websites, I play competitive online fps shooters.</p>
        <p>Wanna Get in Touch? Click the buttons below to get my resume or Contact me</p>
        <a type='button' className='resume-button' href='https://drive.google.com/file/d/1j72QUsH_DsWYph8tc3WPHZ4t6NL4poBq/view?usp=sharing' target='_blank' rel='noreferrer'>Get Resume</a>
        <a type='button' className='resume-button' href='#Contact'>Contact Me</a>
        </div>
        <div className="svg">
        <Svg></Svg>
        </div>
    </div>
  )
}

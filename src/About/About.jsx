import React from 'react'
import './About.css'
import {ReactComponent as Svg} from './svgs/javascript.svg'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-content">
        <motion.h2
          initial={{opacity:0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.5, delay:0.2}}
        >Welcome</motion.h2>
        <motion.div
          initial={{opacity:0, x:'-5px'}}
          whileInView={{opacity:1, x:'0px'}}
          transition={{duration:0.5, delay:0.2}}
        >
          <p>Hi :)</p>
          <p>I'm Arjun V, a passionate Full Stack Web Developer who thrives on turning ideas into digital realities.</p>
          <p>When I am not making websites, I play competitive online fps shooters.</p>
          <p>Wanna Get in Touch? Click the buttons below to get my resume or Contact me</p>
        </motion.div>
        <motion.a
        initial={{opacity:0, y:'5px'}}
        whileInView={{opacity:1, y:'0px'}}
        transition={{delay:0.2,duration:0.5}} 
        type='button' className='resume-button' href='https://drive.google.com/file/d/1j72QUsH_DsWYph8tc3WPHZ4t6NL4poBq/view?usp=sharing' target='_blank' rel='noreferrer'>Get Resume</motion.a>
        <motion.a
        initial={{opacity:0, y:'5px'}}
        whileInView={{opacity:1, y:'0px'}}
        transition={{delay:0.4, duration:0.5}} 
        type='button' className='resume-button' href='#contact'>Contact Me</motion.a>
        </div>
        <motion.div
          initial={{opacity:0, x:'10px'}}
          whileInView={{opacity:1, x:'0px'}}
          transition={{delay:0.2, duration:0.5}} 
          className="svg">
            <Svg></Svg>
        </motion.div>
    </div>
  )
}

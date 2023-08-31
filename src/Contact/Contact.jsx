import React from 'react'
import './contact.css'
import {ReactComponent as Svg} from './svgs/videocall.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Contact = () => {
  return (
    <div className="contact" id='contact'>
        <div className="contact-content">
          <div className="svg-call">
            <Svg></Svg>
          </div>
        <h2>Get In Touch</h2>
        <p>Feel free to contact me or interact with the social links</p>
        <a type='button' className='resume-button' href='mailto:vijayanarjun4@gmail.com'><FontAwesomeIcon icon={faEnvelope}/> Email</a>
        <a type='button' className='resume-button' href='https://www.github.com/notarjunvijayan' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub}/> Github</a>
        <a type='button' className='resume-button' href='https://www.linkedin.com/in/vijayanarjun' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        </div>
    </div>
  )
}

import React from 'react'
import './navbar.css'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:4}} 
    className="navbar">
        <h1>ARJUN V</h1>
        <div className="list">
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    </motion.div>
  )
}

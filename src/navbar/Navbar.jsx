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
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        </div>
    </motion.div>
  )
}

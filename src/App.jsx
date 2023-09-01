import './App.css';
import { Navbar } from './navbar/Navbar';
import { Loader } from './loader/Loader';
import { Intro } from './introsection/Intro';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Quotes } from './Quotes/Quotes';
import { Footer } from './Footer/Footer';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  //Mouse Cursor Setup
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  })

  useEffect(()=>{
    const mouseMove=e=>{
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return()=>{
      window.removeEventListener("mousemove", mouseMove)
    }
  },[])

  const variants ={
    default:{
      x: mousePosition.x -12.5,
      y: mousePosition.y -12.5,
    }
  }
  return (
    <div className="app">
      <motion.div
        variants={variants} 
        animate="default"
        className="cursor">  
      </motion.div>
      <Loader></Loader>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Quotes></Quotes>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App;

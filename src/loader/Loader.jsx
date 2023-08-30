import React, { useState } from 'react'
import { easeIn, motion } from 'framer-motion'
import './loader.css'

export const Loader = () => {
  const [loader, setLoader] = useState("loader loader-true")
  setTimeout(()=>{
    setLoader('loader loader-false')
  },3000)
  return (
    <motion.div className='loader' 
    animate= {{y:'-100%'}}
    transition={{ease:'easeIn',delay:2,duration: 2}}
    >
        <motion.div className="greet"
          initial={{opacity:0, y:'10%'}}
          animate={{opacity:1, y:'0%'}}
          transition={{ease:'easeIn', duration:0.7}}
        >
          <h2>നമസ്കാരം</h2>
          <p className='english'>Namaskaram</p>
          <p>(Greetings in Malayalam)</p>
        </motion.div>
    </motion.div>
  )
}

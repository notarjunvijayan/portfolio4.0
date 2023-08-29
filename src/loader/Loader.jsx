import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
        <h2>നമസ്കാരം</h2>
    </motion.div>
  )
}

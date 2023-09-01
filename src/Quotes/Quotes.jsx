import React, { useEffect, useState } from 'react'
import data from './data/quotes.json'
import './quotes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { isVisible } from '@testing-library/user-event/dist/utils'

export const Quotes = () => {
  const quotes = data.Quotes
  const len = data.Quotes.length
  const [quote, setQuote] = useState([[quotes[Math.floor(Math.random()*len)]]])  


  useEffect(()=>{
    async function setter(){
        setQuote([quotes[Math.floor(Math.random()*len)]])
        console.log(quote)
        }
    setter()
    },[])
    function setter(){
        setQuote([quotes[Math.floor(Math.random()*len)]])
        console.log(quote)
    }
  return (
    <div className="quotes">
        <motion.div
          initial={{y:'-5px',opacity:0}}
          whileInView={{y:'0px',opacity:1}}
          transition={{delay:0.5,duration:0.5}} 
        className="dummy">
            <div className="quotetext">
                <AnimatePresence initial={false}>
                {isVisible && (
                  <motion.p 
                  initial={{x:'-5px',opacity:0}}
                  animate={{x:'0px',opacity:1}}
                  key={quote[0].Quote}
                  className='quote'>
                  "{quote[0].Quote}"
              </motion.p>
                )}
                </AnimatePresence>
              <AnimatePresence>
                {isVisible && (
                  <motion.p 
                    initial={{x:'5px', opacity:0}}
                    animate={{x:'0px',opacity:1}}
                    key={quote[0].Quote}
                  className='quotename'>-{quote[0].Name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
        <motion.a 
          initial={{y:'10px',opacity:0}}
          whileInView={{y:'0px',opacity:1}}
          transition={{duration:0.5, delay:1}}
          type='button' className='resume-button' 
          onClick={setter}>
            <FontAwesomeIcon icon={faDice} /> Change Quote
        </motion.a>
        </motion.div>
    </div>
  )
}

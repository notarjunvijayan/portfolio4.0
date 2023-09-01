import React, { useEffect, useState } from 'react'
import data from './data/quotes.json'
import './quotes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'

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
        <div className="dummy">
            <div className="quotetext">
                <p className='quote'>"{quote[0].Quote}"</p>
                <p className='quotename'>-{quote[0].Name}</p>
            </div>
        <a type='button' className='resume-button' onClick={setter}><FontAwesomeIcon icon={faDice} /> Change Quote</a>
        </div>
    </div>
  )
}

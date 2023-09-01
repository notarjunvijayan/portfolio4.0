import React from 'react'
import data from './data/quotes.json'
import './quotes.css'

export const Quotes = () => {
  const quotes = data.Quotes  
  return (
    <div className="quotes">
        <div className="quotetext">
        <p className='quote'>"{quotes[0].Quote}"</p>
        <p className='quotename'>-{quotes[0].Name}</p>
        </div>
    </div>
  )
}

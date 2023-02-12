import React from 'react'
import { Link } from 'react-router-dom'
import './cta.css'

const CTA = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <Link to='/login'>
          <button type='button'>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default CTA
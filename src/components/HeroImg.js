import React from 'react'
import './HeroImg.css'
import IntroImg from '../assests/how-to-become-a-programmer-in-india.jpg'
import { Link } from 'react-router-dom'

function HeroImg() {
  return (
    <div className='heroImg'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content'>
            <p>HI, I am Vishal Kumar Singh</p>
            <h1>Web Develpoer.</h1>
            <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact-us' className='btn btn-light'>ContactUs</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
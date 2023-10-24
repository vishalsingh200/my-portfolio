import React from 'react'
import './AnoutContent.css'
import { Link } from 'react-router-dom'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>Im a MERN Stack developer. I create responsive secure websites.</p>
                <Link to="/contact-us">
                    <button className='btn'>ContactUs</button>
                </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdvAUulZluQ_raTY5OcNxoMosGMKbleFpXw&usqp=CAU' alt='jvbrkvr' className='img' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWaRzSe5JaicPXSekXIVg3emsdY8kSInmkQ&usqp=CAU' alt='jvbrkvr' className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
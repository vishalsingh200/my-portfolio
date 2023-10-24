import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
    return (
        <div className='work-container'>
            {/* <h1 className='project-heading'>Projects</h1> */}
            <div className='project-container'>
                <div className='project-card'>
                    <img src={props.imgsrc} alt='proj1' />
                    <h2 className='project-title'>{props.title}</h2>
                    <div className='pro-details'>
                        <p>{props.text}</p>
                        <div className='pro-btns'>
                            <NavLink to={props.view} className="btn">View</NavLink>
                            <NavLink to={props.source} className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard



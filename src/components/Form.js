import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='form'>
            <form className='contact-form'>
                <label>Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Message</label>
                <textarea rows="6" placeholder='Type your message here'></textarea>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form 

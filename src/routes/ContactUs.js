import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

function ContactUs() {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="CONTACT US." text="Lets have a chat" />
            <Form />
            <Footer />
        </div>
    )
}

export default ContactUs
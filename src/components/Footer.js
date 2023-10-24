
// import React from 'react';
// import './Footer.css';
// import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <div className='footer'>
//             <div className='footer-container'>
//                 <div className='center'>
//                     <h4>Follow Me</h4>
//                     <div className='social'>
//                         <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
//                         <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
//                         <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
//                         <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
//                     </div>
//                 </div>
//             </div>
//             <div className='copyright'>
//                 &copy; <span className='copyright-year'>{currentYear}</span> Vishal Singh
//             </div>
//         </div>
//     )
// }

// export default Footer;


import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='center'>
                    <h4>Follow Me</h4>
                    <div className='social'>
                        <a href="https://www.instagram.com/singhvishal0847" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/vishal-kumar-singh-4a1442237/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://twitter.com/your_twitter_profile" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://github.com/vishalsingh200" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                &copy; <span className='copyright-year'>{currentYear}</span> Vishal Singh
            </div>
        </div>
    )
}

export default Footer;


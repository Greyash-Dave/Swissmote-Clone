import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="footer-link-container">
                <div className="footer-logo">
                    <img src="/swissmote_logo.png" alt="logo" />
                </div>
                <div className="footer-links">
                    <h1>About Us</h1>
                    <h1>FAQs</h1>
                    <h1>Team</h1>
                </div>
            </div>
            <div className="footer-copyright">
                <h1>Copyright © 2022 Swissmote Clone | All rights copied.</h1>
                <div className="social-links">
                    <img src="4.svg" alt="email" />
                    <img src="5.svg" alt="linkedin" />
                    <img src="6.svg" alt="instagram" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
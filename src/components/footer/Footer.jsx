import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Marvin</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="" className="footer_social-link" target='_blank'><i class="uil uil-linkedin"></i></a>
                <a href="" className="footer_social-link" target='_blank'><i class="uil uil-instagram"></i></a>
                <a href="" className="footer_social-link" target='_blank'><i class="uil uil-github"></i></a>
            </div>

            <span className="footer_copy">&#169; JAN MARVIN A. PATANGAN</span>
        </div>
    </footer>
  )
}

export default Footer
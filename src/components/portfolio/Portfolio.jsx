import React from 'react'
import './Portfolio.css'
import Works from './Works'


const Portfolio = () => {
  return (
    <section className="portfolio section" id='portfolio'>
      <span className="section_subtitle">Browse My Recent</span>
        <h2 className="section_title">Projects</h2>

        <Works />
    </section>
  )
}

export default Portfolio
import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section_subtitle">Explore My</span>
      <h2 className="section_title">Experience</h2>

      <div className="skills_container container grid">
          <Frontend />
          <Backend />
      </div>
    </section>
  )
}

export default Skills
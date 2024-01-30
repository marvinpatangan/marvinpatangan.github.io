import React, { useState } from 'react'
import './Qualifications.css'

const Qualifications = () => {
  
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>\
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">

          <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification_icon"></i> Education
          </div>
          <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
          </div>

        </div>

        <div className="qualification_sections">
          {/* EDUCATION */}
          <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>      
            {/* PUP */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Polytechnic University of the Philippines</h3>
                <span className="qualification_subtitle">Bachelor of Science in Computer Engineering</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>      
            {/* SAN JOSE - SENIOR HIGH*/}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">San Jose Academy</h3>
                <span className="qualification_subtitle">Senior Highschool (STEM)</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>

            </div>
            {/* SAN JOSE - JUNIOR HIGH */}
            <div className="qualification_data">

              <div>
                <h3 className="qualification_title">San Jose Academy</h3>
                <span className="qualification_subtitle">Junior Highschool</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2017
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            {/* ADVENTIST */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Navotas Adventist Elementary School</h3>
                <span className="qualification_subtitle">Primary School</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2007 - 2013
                </div>
              </div>

            </div>
          </div>

          {/* EXPERIENCE */}
          <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
            {/* XURPAS */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Developer Intern</h3>
                <span className="qualification_subtitle">Xurpas Inc</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 08/2022 - 09/2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
import React, { useState } from 'react'
import './Services.css'

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <span className="section_subtitle">What I offer</span>
        <h2 className="section_title">Services</h2>

        <div className="services_container container grid">
            
            {/* WEB DEVELOPMENT */}
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">WEB <br/> DEVELOPMENT</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services_modal-title">Web Development</h3>
                        <p className="services_modal-description">With more than 4 years of experience of working on web developing projects.</p>
                        <ul className="services_modal-services grid">

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I develop user interfaces.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I can create UX element interactions.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I can create designs and mockups of products.</p>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </div>
            
            {/* ANDROID APP DEVELOPMENT */}
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">ANDROID APP <br /> DEVELOPMENT</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services_modal-title">Android App Development</h3>
                        <p className="services_modal-description">Participated in developing Android Applications.</p>

                        <ul className="services_modal-services grid">

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I developed back-end side of Android Applications</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I can also create front-end functions of Android Applications</p>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>

            {/* GAME DEVELOPMENT */}
            <div className="services_content">
                <div>
                    <i className="uil uil-mobile-android services_icon"></i>
                    <h3 className="services_title">GAME <br/> DEVELOPMENT</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services_modal-title">Game Development</h3>
                        <p className="services_modal-description">I have experience in developing games.</p>
                        
                        <ul className="services_modal-services grid">

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I have developed using Unity3D</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I have basic understanding of animating and creating physics in a game.</p>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>

            {/* UI UX DESIGN */}
            <div className="services_content">
                <div>
                    <i className="uil uil-brush-alt services_icon"></i>
                    <h3 className="services_title">UI/UX <br/> DESIGN</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(4)}>View More<i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState === 4 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services_modal-title">UI/UX Design</h3>
                        <p className="services_modal-description">I have basic experience in designing</p>
                        
                        <ul className="services_modal-services grid">

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I participated in developing UI designs using Figma</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I know the basics in designing a product</p>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Services
import React, { useState } from 'react'
import './header.component.css'
import profileImage from '../../assets/img/profile-photo.jpg';


export default function HeaderComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalState = () => {
        setIsModalOpen(!isModalOpen);

        const body = document.querySelector('body');
        body.classList.toggle('modal-open');
    }

    return (
        <>
            <div className='header container'>
                {/* icon for darkmode here */}
                <div className="header-container">
                    <div className='header-content'>
                        <div className='header-border'>
                            <div className='header-img'>
                                <img src={profileImage} alt='Crystal Fecteau' />
                            </div>
                        </div>
                    </div>
                    <span className='header-title'>Crystal Fecteau</span>
                    <span className='header-subtitle'>Frontend Developer</span>
                    <button className='header-skills-btn' onClick={handleModalState}>View Skills</button>
                </div>
                <div className='header-btns'>
                    <a className='header-download-btn' download='' href='assets/pdf/Cry.Fecteau-Resume.pdf'>
                        <span className="download-text">
                            Download CV
                        </span>
                        <span className='download-icon'><i className="fa-solid fa-download"></i></span>
                    </a>
                    <div className='header-socials'>
                        <a href='https://www.linkedin.com/in/crystal-fecteau/' target='_blank' rel="noreferrer" className='linkedin-btn'>
                            <i className="fa-brands fa-linkedin social-icon"></i>
                            <span className='linkedin-tooltip'>
                                <div className='tooltip'>
                                    <span className='tooltip-text'>Visit Linkedin</span>
                                </div>
                            </span>
                        </a>
                        <a href='https://github.com/CryFecteau' target='_blank' rel="noreferrer" className='github-btn'>
                            <i className="fa-brands fa-square-github social-icon"></i>
                            <span className='github-tooltip'>
                                <div className='tooltip'>
                                    <span className='tooltip-text'>Visit GitHub</span>
                                </div>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className='skills-modal'>
                    <div className='modal-content'>
                        <span className='modal-close-btn' onClick={handleModalState}><i className="fa-solid fa-xmark"></i></span>
                        <h1 className='modal-title'>Crystal Fecteau Skills</h1>
                        <div className='skills-container'>
                            <div className='skills-box'>
                                <span className='skills-title'>Languages</span>
                                <ul className='skills-list'>
                                    <li><i className="fa-brands fa-js skills-icon"></i>JavaScript</li>
                                    <li><i className="fa-solid fa-t skills-icon"></i>TypeScript</li>
                                    <li><i className="fa-solid fa-c skills-icon"></i>C#</li>
                                    <li><i className="fa-brands fa-python skills-icon"></i>Python</li>
                                    <li><i className="fa-brands fa-html5 skills-icon"></i>HTML</li>
                                    <li><i className="fa-brands fa-css3-alt skills-icon"></i>CSS</li>
                                    <li><i className="fa-solid fa-s skills-icon"></i>SCSS</li>
                                </ul>
                            </div>
                            <div className='skills-box'>
                                <span className='skills-title'>Frameworks</span>
                                <ul className='skills-list'>
                                    <li><i className="fa-brands fa-angular skills-icon"></i>Angular</li>
                                    <li><i className="fa-brands fa-react skills-icon"></i>React</li>
                                    <li><i className="fa-brands fa-react skills-icon"></i>React Native</li>
                                    <li><i className="fa-brands fa-vuejs skills-icon"></i>Vue</li>
                                    <li><i className="fa-solid fa-j skills-icon"></i>jQuery</li>
                                    <li><i className="fa-brands fa-bootstrap skills-icon"></i>Bootstrap</li>
                                    <li><i class="fa-solid fa-t skills-icon"></i>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className='skills-box full-row'>
                                <span className='skills-title '>Non-technical Skills</span>
                                <ul className='skills-list full-flex-row'>
                                    <li className='flex-1'><i className="fa-solid fa-brain skills-icon"></i>Problem-Solving</li>
                                    <li className='flex-1'><i className="fas fa-users skills-icon"></i>Teamwork</li>
                                    <li className='flex-1'><i className="fas fa-paint-brush skills-icon"></i>Creativity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
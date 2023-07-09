import React, { useState } from 'react'
import './header.component.css'


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
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                        </div>
                    </div>
                    <span className='header-title'>Crystal Fecteau</span>
                    <span className='header-subtitle'>Frontend Developer</span>
                    <button className='header-skills-btn' onClick={handleModalState}>View Skills</button>
                </div>
                <div className='header-btns'>
                    <a className='header-download-btn' download='' href=''>
                        <span className="download-text">
                            Download CV
                        </span>
                        <span className='download-icon'><i className="fa-solid fa-download"></i></span>
                    </a>
                    <div className='header-socials'>
                        <a href='' target='_blank' className='linkedin-btn'>
                            <i className="fa-brands fa-linkedin social-icon"></i>
                            <span className='linkedin-tooltip'>
                                <div className='tooltip'>
                                    <span className='tooltip-text'>Visit Linkedin</span>
                                </div>
                            </span>
                        </a>
                        <a href='' target='_blank' className='github-btn'>
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
                                    <li><i class="fa-solid fa-certificate"></i>JavaScript</li>
                                    <li><i class="fa-solid fa-certificate"></i>TypeScript</li>
                                    <li><i class="fa-solid fa-certificate"></i>C#</li>
                                    <li><i class="fa-solid fa-certificate"></i>Python</li>
                                    <li><i class="fa-solid fa-certificate"></i>HTML</li>
                                    <li><i class="fa-solid fa-certificate"></i>CSS</li>
                                    <li><i class="fa-solid fa-certificate"></i>SCSS</li>
                                </ul>
                            </div>
                            <div className='skills-box'>
                                <span className='skills-title'>Frameworks</span>
                                <ul className='skills-list'>
                                    <li><i class="fa-solid fa-certificate"></i>Angular</li>
                                    <li><i class="fa-solid fa-certificate"></i>React</li>
                                    <li><i class="fa-solid fa-certificate"></i>React Native</li>
                                    <li><i class="fa-solid fa-certificate"></i>Vue</li>
                                    <li><i class="fa-solid fa-certificate"></i>jQuery</li>
                                    <li><i class="fa-solid fa-certificate"></i>Bootstrap</li>
                                    <li><i class="fa-solid fa-certificate"></i>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className='skills-box full-row'>
                                <span className='skills-title '>Non-technical Skills</span>
                                <ul className='skills-list full-flex-row'>
                                    <li className='flex-1'><i class="fa-solid fa-certificate"></i>Problem-Solving</li>
                                    <li className='flex-1'><i class="fa-solid fa-certificate"></i>Teamwork</li>
                                    <li><i class="fa-solid fa-certificate"></i>Creativity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
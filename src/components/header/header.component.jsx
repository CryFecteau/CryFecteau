import React from 'react'
import './header.component.css'


export default function HeaderComponent() {
    return (
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
                <button className='header-skills-btn'>View Skills</button>
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
    )
}
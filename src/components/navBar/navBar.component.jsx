import React from 'react';
import './navBar.component.css';
import logo from '../../assets/img/Group 2.png';
import Skills from '../skills/skills.component';


export default function NavBarComponent() {
    return (
        <div className='navBar'>
            <img src={logo} className='navBar-logo' alt='Crystal Fecteau Logo' />
            <div className='navBar-btns'>
                <div className='navBar-socials'>
                    <a href='https://www.linkedin.com/in/crystal-fecteau/' target='_blank' rel="noreferrer" className='linkedin-btn'>
                        <i className="fa-brands fa-linkedin social-icon"></i>
                        <span className='linkedin-tooltip'>
                            <div className='tooltip'>
                                <span className='tooltip-text'>Visit Linkedin Profile</span>
                            </div>
                        </span>
                    </a>
                    <a href='https://github.com/CryFecteau' target='_blank' rel="noreferrer" className='github-btn'>
                        <i className="fa-brands fa-square-github social-icon"></i>
                        <span className='github-tooltip'>
                            <div className='tooltip'>
                                <span className='tooltip-text'>Visit GitHub Profile</span>
                            </div>
                        </span>
                    </a>
                </div>
                <Skills />
            </div>
        </div>
    )
}
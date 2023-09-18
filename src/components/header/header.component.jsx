import React from 'react';
import './header.component.css';
import headerImage from '../../assets/img/UmamiBites1.png';
import cryResume from '../../assets/pdf/CrystalFecteauResume.pdf';
import Projects from '../projects/projects.component';


export default function HeaderComponent() {
    return (
        <div className="header">
            <div className="app-blur top-blur"></div>
            <div className='header-content'>
                <span className='header-title'>Crystal Fecteau</span>
                <span className='header-subtitle'>Front-End Developer</span>
                <span className='header-text'>Where Design Meets <span className='secondary-text'>Code</span></span>
                <div className='header-btns'>
                    <a className='header-download-btn' download='' href={cryResume}>
                        <span className="download-text">
                            Download CV
                        </span>
                        <span className='download-icon'><i className="fa-solid fa-download"></i></span>
                    </a>
                    <Projects />
                </div>
            </div>
            <div className='header-img'>
                <div className='img-face'>
                    <img src={headerImage} alt='Umami Bites Website' />
                </div>
                <div className='img-shadow'></div>
            </div>
            <div className="app-blur bottom-blur"></div>
        </div>
    )
}
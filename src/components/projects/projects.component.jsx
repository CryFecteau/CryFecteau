import React, { useEffect } from 'react'
import './projects.component.css'
import DMCImg from '../../assets/img/DMC.png';
import NGImg from '../../assets/img/NG.png';
import CBSImg from '../../assets/img/CBS.png';
import TMImg from '../../assets/img/TM.png';
import UBImg from '../../assets/img/UB.png';
import AVImg from '../../assets/img/AV.png';


export default function ProjectsComponent() {

    useEffect(() => {
        handleTabSelect();
    }, []);

    const handleTabSelect = () => {
        const tabs = document.querySelectorAll('[data-target]');
        const tabContents = document.querySelectorAll('[data-content]');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tc => {
                    tc.classList.remove('tab-content-active')
                })
                target.classList.add('tab-content-active')

                tabs.forEach(t => {
                    t.classList.remove('project-tab-active')
                })
                tab.classList.add('project-tab-active')
            })
        })
    }
    return (
        <div className='projects container'>
            <div className='project-tabs'>
                <button className="tab-btn project-tab-active" data-target="#angular">
                    Angular
                </button>
                <button className="tab-btn" data-target="#react">
                    React
                </button>
                <button className="tab-btn" data-target="#vue">
                    Vue
                </button>
            </div>
            <div className='tab-content-container'>
                <div className='tab-content tab-content-active' data-content id='angular'>
                    <h2 className='tab-title'>Angular Projects</h2>
                    <div className='tab-projects'>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Dr. Mercy's Companions</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src={DMCImg} alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='https://github.com/CryFecteau/DrMercysCompanions' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='https://cryfecteau.github.io/DrMercysCompanions' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>NexGen Rentals</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src={NGImg} alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='https://github.com/CryFecteau/NexGen-Rentals' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='https://cryfecteau.github.io/NexGen-Rentals/' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tab-content' data-content id='react'>
                    <h2 className='tab-title'>React Projects</h2>
                    <div className='tab-projects'>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Core Body Sculpt</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src={CBSImg} alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='https://github.com/CryFecteau/Core-Body-Sculpt' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='https://cryfecteau.github.io/Core-Body-Sculpt/' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Transmit Me</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src={TMImg} alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='https://github.com/CryFecteau/Transmit-Me' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='https://cryfecteau.github.io/Transmit-Me/' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tab-content' data-content id='vue'>
                    <h2 className='tab-title'>Vue Projects</h2>
                    <div className='tab-projects'>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Umami Bites</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src={UBImg} alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='https://github.com/CryFecteau/umami-bites' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='https://cryfecteau.github.io/umami-bites/' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Aurora Vista</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src={AVImg} alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='https://github.com/CryFecteau/aurora-vista' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='https://cryfecteau.github.io/aurora-vista/' target='_blank' rel="noreferrer" className='link-btn'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import './projects.component.css'
import DMCImg from '../../assets/img/DMC.png';
import NGImg from '../../assets/img/NG.png';
import CBSImg from '../../assets/img/CBS.png';
import TMImg from '../../assets/img/TM.png';
import UBImg from '../../assets/img/UB.png';
import AVImg from '../../assets/img/AV.png';


export default function ProjectsComponent() {
    const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

    const handleProjectsModalState = () => {
        if (!isProjectsModalOpen) {
            setIsProjectsModalOpen(!isProjectsModalOpen);
            document.getElementsByClassName('projects-modal')[0].style.display = 'flex';
        } else {
            setIsProjectsModalOpen(!isProjectsModalOpen);
            document.getElementsByClassName('projects-modal')[0].style.display = 'none';
        }
    }


    useEffect(() => {
        setTimeout(() => {
            handleTabSelect();
        }, 1000);
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
        <>
            <button className='header-projects-btn' onClick={handleProjectsModalState}>View Projects</button>
            <div className='projects-modal'>
                <div className='projects container'>
                    <div className='btn-container'>
                        <span className='close-btn' onClick={handleProjectsModalState}><i className="fa-solid fa-xmark"></i></span>
                    </div>
                    <div className='project-tabs'>
                        <button className="tab-btn project-tab-active" data-target="#angular">
                            Angular Projects
                        </button>
                        <button className="tab-btn" data-target="#react">
                            React Projects
                        </button>
                        <button className="tab-btn" data-target="#vue">
                            Vue Projects
                        </button>
                    </div>
                    <div className='tab-content-container'>
                        <div className='tab-content tab-content-active' data-content id='angular'>
                            <div className='tab-projects'>
                                <div className='project-card'>
                                    <div className="project-name">
                                        <p>Dr. Mercy's Companions</p>
                                        <div></div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={DMCImg} alt='Crystal Fecteau' />
                                        <div className='project-overlay'>
                                            <p className='project-desc'>Dr. Mercy's Companions is a demo e-commerce website featuring a diverse collection of robotic companions tailored to enhance daily life. This project serves as a demonstration of Angular, Firebase, and SCSS integration.</p>
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
                                    </div>
                                </div>
                                <div className='project-card'>
                                    <div className="project-name">
                                        <p>NexGen Rentals</p>
                                        <div></div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={NGImg} alt='Crystal Fecteau' />
                                        <div className='project-overlay'>
                                            <p className='project-desc'> NexGen Rentals is a forward-looking, car rental demo website that showcase high-tech cars to rent. This project was crafted to highlight the capabilities of Angular and SCSS.</p>
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
                            </div>
                        </div>
                        <div className='tab-content' data-content id='react'>
                            <div className='tab-projects'>
                                <div className='project-card'>
                                    <div className="project-name">
                                        <p>Core Body Sculpt</p>
                                        <div></div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={CBSImg} alt='Crystal Fecteau' />
                                        <div className='project-overlay'>
                                            <p className='project-desc'>Core Body Sculpt is a demo fitness website that provides a variety of workout options, support resources, and training programs. It serves as a platform to highlight the utilization of React, Framer Motion, and CSS.</p>
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
                                    </div>
                                </div>
                                <div className='project-card'>
                                    <div className="project-name">
                                        <p>Transmit Me</p>
                                        <div></div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={TMImg} alt='Crystal Fecteau' />
                                        <div className='project-overlay'>
                                            <p className='project-desc'>Transmit Me is a demo social media website featuring posts from friends and family, serving as a showcase for React and Material UI integration.</p>
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
                            </div>
                        </div>
                        <div className='tab-content' data-content id='vue'>
                            <div className='tab-projects'>
                                <div className='project-card'>
                                    <div className="project-name">
                                        <p>Umami Bites</p>
                                        <div></div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={UBImg} alt='Crystal Fecteau' />
                                        <div className='project-overlay'>
                                            <p className='project-desc'>UMAMI BITES is an demo restaurant website that tantalizes visitors with a delectable menu of Japanese-inspired cuisine. Its visually captivating design ensures a delightful user experience, all while highlighting the utilization of Vue.js, Animate on Scroll, and CSS.</p>
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
                                    </div>
                                </div>
                                <div className='project-card'>
                                    <div className="project-name">
                                        <p>Aurora Vista</p>
                                        <div></div>
                                    </div>
                                    <div className='project-img'>
                                        <img src={AVImg} alt='Crystal Fecteau' />
                                        <div className='project-overlay'>
                                            <p className='project-desc'>Aurora Visita is a modern and elegant demo hotel website that showcases the available accommodations and services offered by the hotel. It was crafted to demonstrate the capabilities of Vue.js and Bootstrap 5.</p>
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
                    </div>
                </div>
            </div>
        </>
    )
}
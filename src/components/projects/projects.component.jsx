import React, { useEffect } from 'react'
import './projects.component.css'


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
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>  <div className='project-card'>
                            <div className="project-name">
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>  <div className='project-card'>
                            <div className="project-name">
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>  <div className='project-card'>
                            <div className="project-name">
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                        <div className='project-card'>
                            <div className="project-name">
                                <p>Name Here</p>
                                <div></div>
                            </div>
                            <div className='project-img'>
                                <img src='https://placehold.co/400' alt='Crystal Fecteau' />
                            </div>
                            <div className='project-links'>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-brands fa-github-alt"></i>
                                    View Code
                                </a>
                                <a href='' target='_blank' className='link-btn'>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
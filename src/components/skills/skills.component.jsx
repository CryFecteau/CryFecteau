import React, { useState } from 'react';
import './skills.component.css';


export default function SkillsComponent() {
    const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

    const handleSkillsModalState = () => {
        setIsSkillsModalOpen(!isSkillsModalOpen);

        const body = document.querySelector('body');
        body.classList.toggle('modal-open');
    }

    return (
        <>
            <button className='navBar-skills-btn' onClick={handleSkillsModalState}>View Skills</button>
            {isSkillsModalOpen && (
                <div className='skills-modal'>
                    <div className='modal-content'>
                        <span className='modal-close-btn' onClick={handleSkillsModalState}><i className="fa-solid fa-xmark"></i></span>
                        <h1 className='modal-title'>Crystal Fecteau Skills</h1>
                        <div className='skills-container'>
                            <div className='skills-box'>
                                <ul className='skills-list'>
                                    <li><i className="fa-solid fa-t skills-icon"></i>TypeScript <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-js skills-icon"></i>JavaScript <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-solid fa-j skills-icon"></i>jQuery <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-solid fa-j skills-icon"></i>JSX/TSX <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-html5 skills-icon"></i>HTML <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-css3-alt skills-icon"></i>CSS <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-solid fa-s skills-icon"></i>SCSS <span className='skills-exp'>3+ yrs. exp.</span></li>
                                </ul>
                            </div>
                            <div className='skills-box'>
                                <ul className='skills-list'>
                                    <li><i className="fa-brands fa-angular skills-icon"></i>Angular <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-angular skills-icon"></i>Ngrx <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-react skills-icon"></i>React <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-react skills-icon"></i>React Native <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-react skills-icon"></i>Redux <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-vuejs skills-icon"></i>Vue <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-vuejs skills-icon"></i>Vuex <span className='skills-exp'>3+ yrs. exp.</span></li>
                                </ul>
                            </div>
                            <div className='skills-box'>
                                <ul className='skills-list'>
                                    <li><i className="fa-brands fa-git-alt skills-icon"></i>Git <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-figma skills-icon"></i>Figma <span className='skills-exp'>1+ yrs. exp.</span></li>
                                    <li><i className="fa-solid fa-mobile-screen skills-icon"></i>Prototyping <span className='skills-exp'>1+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-shopify skills-icon"></i>Shopify <span className='skills-exp'>1+ yrs. exp.</span></li>
                                    <li><i className="fa-solid fa-t skills-icon"></i>Tailwind CSS <span className='skills-exp'>1+ yrs. exp.</span></li>
                                    <li><i className="fa-brands fa-bootstrap skills-icon"></i>Bootstrap <span className='skills-exp'>3+ yrs. exp.</span></li>
                                    <li><i className="fa-solid fa-m skills-icon"></i>Material UI <span className='skills-exp'>3+ yrs. exp.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
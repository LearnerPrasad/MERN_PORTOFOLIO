import React from 'react';
import './Menus.css'
import { FcAbout, FcBiotech, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import ProfilePic  from '../../assets/ProfilePic.jpeg';

const Menus = ({ toggle, setActiveMenu }) => {

    return (
        <>
            {toggle ?
                <div>
                    <div className='profile-pic'>
                        <img
                            src={ProfilePic}
                            height='200px'
                            width='200px'
                            alt='Profile'
                        />
                    </div>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('home')}>
                                <FcHome className="large-icon" />
                                Home
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('about')}>
                                <FcAbout className="large-icon" />
                                About
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link d-flex' onClick={() => setActiveMenu('education')}>
                                <FcReadingEbook className="large-icon" />
                                Education
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link d-flex' onClick={() => setActiveMenu('techStack')}>
                                <FcBiotech className="large-icon" />
                                Tech Stack
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link d-flex' onClick={() => setActiveMenu('projects')}>
                                <FcVideoProjector className="large-icon" />
                                Projects
                            </div>
                        </div>
                        <div className='nav-item' onClick={() => setActiveMenu('experience')}>
                            <div className='nav-link d-flex'>
                                <FcPortraitMode className="large-icon" />
                                Work Experience
                            </div>
                        </div>
                        <div className='nav-item' onClick={() => setActiveMenu('contact')}>
                            <div className='nav-link d-flex'>
                                <FcBusinessContact className="large-icon" />
                                contact
                            </div>
                        </div>
                    </div>
                </div >
                :
                <div>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('home')}>
                                <FcHome className="large-icon" title={'Home'} />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('about')}>
                                <FcAbout className="large-icon" title={'About'} />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('education')}>
                                <FcReadingEbook className="large-icon" title={'Education'} />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('techStack')}>
                                <FcBiotech className="large-icon" title={'Tech Stack'} />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('projects')}>
                                <FcVideoProjector className="large-icon" title={"Projects"} />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('experience')}>
                                <FcPortraitMode className="large-icon" title={'Work Experience'} />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link' onClick={() => setActiveMenu('contact')}>
                                <FcBusinessContact className="large-icon" title={"Contact"} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Menus;

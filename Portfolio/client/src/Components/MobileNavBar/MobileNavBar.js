import React, { forwardRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './MobileNavBar.css';
import ProfilePic from '../../assets/ProfilePic.jpeg';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from 'react-icons/fc';

const MobileNavBar = forwardRef(({ toggle, setToggleMobile, setActiveMenu }, ref) => {
    const handleToggle = () => {
        setToggleMobile(!toggle);
    }

    return (
        <div className='mobile-nav' ref={ref}>
            <div className='mobile-nav-header'>
                <MenuIcon className='menu-icon1' onClick={handleToggle} />
                <span className='title text-center'>Durga Prasad Portfolio App</span>
            </div>
            {toggle && (
                <div className='mobile-nav-items'>
                    <div className='profile-pic'>
                        <img src={ProfilePic} height='200px' width='200px' alt='Profile' />
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setActiveMenu('home')}>
                            <FcHome className="large-icon" /> Home
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setActiveMenu('about')}>
                            <FcAbout className="large-icon" /> About
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setActiveMenu('education')}>
                            <FcReadingEbook className="large-icon" /> Education
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setActiveMenu('techStack')}>
                            <FcBiotech className="large-icon" /> Tech Stack
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setActiveMenu('projects')}>
                            <FcVideoProjector className="large-icon" /> Projects
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setActiveMenu('experience')}>
                            <FcPortraitMode className="large-icon" /> Work Experience
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link' onClick={() => setActiveMenu('contact')}>
                            <FcBusinessContact className="large-icon" /> Contact
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

export default MobileNavBar;

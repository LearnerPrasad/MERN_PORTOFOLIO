import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './Layout.css';
import Menus from '../Menus/Menus';
import Home from '../Home/Home';
import About from '../About/About';
import TechStack from '../TechStack/TechStack';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import ScrollToTopButton from '../ScrollToTopButton';
import Contact from '../Contact/Contact';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import { ToastContainer } from 'react-toastify';
import MenuIcon from '@mui/icons-material/Menu';
import scrollToWithOffset from '../../utils/ScrollInMobileView';

function Layout() {

  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);

  const [activeMenu, setActiveMenu] = useState('')
  const mainContentRef = useRef(null);
  const mobileNavBarRef = useRef(null);


  const handleToggle = () => {
    setToggle(!toggle);
  };

  // useEffect(() => {
  //   const section = document.getElementById(activeMenu);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [activeMenu])

  useEffect(() => {
    if (activeMenu) {
      scrollToWithOffset(activeMenu, 400); // Adjust 70 to the height of your fixed navbar
    }
  }, [activeMenu]);

  const handleClickOutside = (event) => {
    if (mobileNavBarRef.current && !mobileNavBarRef.current.contains(event.target)) {
      setToggleMobile(false);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle ? 'sidebar-toggle' : 'sidebar'}>
          <div className='sidebar-toggle-icons' onClick={handleToggle}>
            {toggle ? (
              <AiOutlineDoubleLeft size={30} color={"floralwhite"} />
            ) : (
              <MenuIcon className='menu-icon' />
            )}
          </div>
          <div className='ms-3'>
            <Menus toggle={toggle} setActiveMenu={setActiveMenu} />
          </div>
        </div>
        <div className='main-content' ref={mainContentRef}>
          <MobileNavBar toggle={toggleMobile} setToggleMobile={setToggleMobile} setActiveMenu={setActiveMenu} ref={mobileNavBarRef} />
          <div className='row Mobile-navbar'>
            <ToastContainer position={'bottom-left'} />
            <Home id='home' />
            <About id='about' />
            <Education id='education' />
            <TechStack id='techStack' />
            <Projects id='projects' />
            <WorkExperience id='experience' />
            <Contact id='contact' />
            <ScrollToTopButton mainContentRef={mainContentRef} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

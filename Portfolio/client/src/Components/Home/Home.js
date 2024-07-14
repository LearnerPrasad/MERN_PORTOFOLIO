import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';


const Home = ({ id }) => {
    return (
        <>
            <div className='home-container' id={id}>
                <br />
                <div className='home-content'>
                    <div className='Home-text'>
                        Hi 👋 I'm a
                    </div>
                    <Typewriter
                        options={{
                            strings: ['React Js Developer', 'MERN Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div>
                        {/* <button className='btn btn-primary'>Hire Me!!!</button> */}
                        {/* <a className='btn btn-success' href={'resume.pdf'} download='DurgaPrasad_Resume.pdf'>
                            Resume
                        </a> */}
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}

export default Home
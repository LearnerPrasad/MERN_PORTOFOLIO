import React from 'react';
import './About.css';
import profile from '../../assets/ProfilePic.jpeg'

const About = ({ id }) => {
    return (
        <div className='row m-0 About-Shadow' id={id}>
            <br />
            <br />
            <hr />
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                <div className='profile-pic-About'>
                    <img
                        src={profile}
                        height='350px'
                        width='350px'
                        alt='Profile'
                    />
                </div>
            </div>
            <div className='col-md-6 p-0 About'>
                <h1>
                    About Me
                </h1>
                <p className='w-100'>
                    I am a React.js frontend developer based in Hyderabad, bringing 3 years of experience in crafting dynamic and user-friendly web applications. My proficiency extends across the MERN stack—comprising MongoDB, Express.js, React.js, and Node. I specialize in building intuitive user interfaces that prioritize functionality and design aesthetics.</p>

                    <p>My portfolio reflects my expertise in frontend development, showcasing projects where I've implemented responsive design principles, state management solutions, and seamless API integrations. I have a strong understanding of modern web development practices, including component-based architecture, hooks, and performance optimization techniques. I am adept at collaborating with cross-functional teams to deliver high-quality software that meets user needs and business goals.</p>
                    <p>
                    With a commitment to continuous learning, I remain updated with emerging technologies to deliver innovative and impactful web solutions. My passion for coding drives me to explore new tools and frameworks, ensuring I stay at the forefront of the industry.
                </p>

            </div>
        </div >
    )
}

export default About
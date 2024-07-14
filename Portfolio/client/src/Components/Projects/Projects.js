import React from 'react';
import './Project.css';
import 'react-vertical-timeline-component/style.min.css';


function Projects({ id }) {
    return (
        <>
            <div className='container project' id={id}>
                <br/>
                <hr />
                <h2 className='col-12 text-center text-uppercase'>Projects</h2>
                <p className='text-center'>
                    👉 Here are my Top 3 Recent Projects with live links and source code
                </p>
                <div className='row'>
                    <div className='col-md-4 mt-3'>
                        <div className='card'>
                            <div className='card-image'>
                                <span className='card-badge'>Full Stack</span>
                                <img
                                    src='https://www.ppcmate.com/wp-content/uploads/2023/03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg'
                                    alt='Project'
                                    width='100%'
                                    height='200px'
                                />
                            </div>
                            <div className='card-image-overlay m-auto mt-3'>
                                <span className='card-detail-badge'>NodeJS</span>
                                <span className='card-detail-badge'>ReactJS</span>
                                <span className='card-detail-badge'>ExpressJS</span>
                                <span className='card-detail-badge'>MongoDB</span>
                            </div>
                            <div className='card-body'>
                                <h5 className='text-uppercase text-center m-auto'>
                                    Ecommerce
                                </h5>
                                <a className='anchor-button' href='https://www.flipkart.com/' target='_blank'>View</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <div className='card'>
                            <div className='card-image'>
                                <span className='card-badge'>Full Stack</span>
                                <img
                                    src='https://uxdt.nic.in/wp-content/uploads/2020/02/loginform1_p-1.png'
                                    alt='Project'
                                    width='100%'
                                    height='200px'
                                />
                            </div>
                            <div className='card-image-overlay m-auto mt-3'>
                                <span className='card-detail-badge'>NodeJS</span>
                                <span className='card-detail-badge'>ReactJS</span>
                                <span className='card-detail-badge'>ExpressJS</span>
                                <span className='card-detail-badge'>MongoDB</span>
                            </div>
                            <div className='card-body'>
                                <h5 className='text-uppercase text-center m-auto'>
                                    Contact Book By Login
                                </h5>
                                <a className='anchor-button' href='https://www.cricbuzz.com/cricket-news/130871/rashid-khan-receives-official-reprimand-and-demerit-point' target='_blank'>View</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <div className='card'>
                            <div className='card-image'>
                                <span className='card-badge'>Full Stack</span>
                                <img
                                    src='https://appdukaan.com/wp-content/uploads/2021/11/weather-app-development-guide-1-scaled.jpg'
                                    alt='Project'
                                    width='100%'
                                    height='200px'
                                />
                            </div>
                            <div className='card-image-overlay m-auto mt-3'>
                                <span className='card-detail-badge'>NodeJS</span>
                                <span className='card-detail-badge'>ReactJS</span>
                                <span className='card-detail-badge'>ExpressJS</span>
                                <span className='card-detail-badge'>MongoDB</span>
                            </div>
                            <div className='card-body'>
                                <h5 className='text-uppercase text-center m-auto'>
                                    Waether App
                                </h5>
                                <a className='anchor-button' href='https://weather.com/en-IN/?Goto=Redirected' target='_blank'>View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { RiReactjsLine } from 'react-icons/ri';
import 'react-vertical-timeline-component/style.min.css';
import './WorkExperience.css';
import 'intersection-observer'; // Import polyfill

function WorkExperience({ id }) {
    useEffect(() => {
        const elements = document.querySelectorAll('.vertical-timeline-element');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <div className='container experience' id={id}>
            <br />
            <hr />
            <h2 className='col-12 text-center text-uppercase'>
                Work Experience
            </h2>
            <VerticalTimeline lineColor='#1e1e2c'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FFF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021-2022"
                    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                    icon={<RiReactjsLine />}
                >
                    <h3 className="vertical-timeline-element-title">TaTa Consultancy Reviews(TCS)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Hyderabad, Telangana</h4>
                    <p>
                        React Js Frontend Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FFF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022 - 2023"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<RiReactjsLine />}
                >
                    <h3 className="vertical-timeline-element-title">TaTa Consultancy Reviews(TCS)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Hyderabad, Telangana</h4>
                    <p>
                        React Js Frontend Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FFF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2023 - 2024"
                    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                    icon={<RiReactjsLine />}
                >
                    <h3 className="vertical-timeline-element-title">TaTa Consultancy Reviews(TCS)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Hyderabad, Telangana</h4>
                    <p>
                        React Js Frontend Developer
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default WorkExperience;

import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

function Education({ id }) {
    return (
        <>
            <div className='container education' id={id}>
                <br />
                <hr />
                <h2 className='col-12 text-center text-uppercase'>
                    Education
                </h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2017 - 2021"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Tecgnology(B.TECH)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kakinada, Andhra Pradesh</h4>
                        <p>
                            Electronics and Communication Engineering(E.C.E)
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2015 - 2017"
                        iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Intermediate(+2)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tuni, Andhra Pradesh</h4>
                        <p>
                            Maths Physics Chemistry(M.P.C)
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2014 - 2015"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Secondary School Certificate(SSC)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tuni, Andhra Pradesh</h4>
                        <p>
                            Maths Physics Chemistry(M.P.C)
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education
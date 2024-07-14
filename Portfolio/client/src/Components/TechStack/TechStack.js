import React from 'react';
import './TechStack.css'
import { TechStackList } from '../../utils/TechStackList';

function TechStack({ id }) {
    return (
        <>
            <div className='container techStack Mobile-scroll' id={id}>
                <br />
                <hr />
                <h2 className='col-12 text-center text-uppercase'>
                    Technologies Stack
                </h2>
                <p className='text-center'>
                    👉 Programmin Languages,Frameworks,Databases,FrontEnd and backend Tools and API's
                </p>
                <div className='row'>
                    {TechStackList.map(tech => (
                        <div key={tech._id} className='col-md-3'>
                            <div className='card m-2'>
                                <div className='TechStack card-content'>
                                    <div className='card-body d-flex justify-content-center'>
                                        <div className='s'>
                                            <tech.icon className='tech-icon' />
                                        </div>
                                        <div className=''>
                                            <h5>{tech.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechStack
import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("jsons/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='mb-10'>
                <p className='text-3xl mb-5'>Services</p>
                <h3 className='text-5xl font-semibold'>What I do:</h3>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import Service from './Service';
import { motion } from 'framer-motion';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("jsons/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
            <div className='mb-10'>
                <p className='text-3xl mb-5'>Services</p>
                <h3 className='text-5xl font-semibold'>What I do:</h3>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </motion.div>
    );
};

export default Services;
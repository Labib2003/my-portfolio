import React from 'react';
import { motion } from 'framer-motion';

//#EB6B47

const Service = ({ service }) => {
    const { title, image, description, technologyUsed } = service;
    return (
        <motion.div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl"
        >
            <img
                src={image}
                alt="service"
                className='p-10 bg-primary h-1/2'
            />
            <div className="card-body">
                <h2 className="card-title text-3xl mb-5">{title}</h2>
                <p className='leading-relaxed'>{description}</p>
                <div className="card-actions justify-start">
                    {
                        technologyUsed.map((technology, index) => <p
                            key={index}
                            className="badge badge-outline"
                        >{technology}</p>)
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Service;
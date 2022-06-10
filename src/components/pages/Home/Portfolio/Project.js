import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Project = ({ project, index }) => {
    const { name, type, screenshots, description, links } = project;
    const navigate = useNavigate();

    const navigateToDetails = (i) => {
        navigate(`/projects/${i}`);
    }

    return (
        <motion.div
            whileTap={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl h-full"
        >
            <img src={screenshots[0].image} alt="Shoes" />
            <div className="card-body">
                <div className='mb-5'>
                    <h2 className="card-title text-3xl mb-5">{name}</h2>
                    <p className='badge h-auto badge-outline'>{type}</p>
                </div>
                <p className='leading-relaxed mb-5'>{description}</p>
                <button className="btn btn-sm btn-outline" onClick={() => navigateToDetails(index)}>Project Details</button>
                <a className="btn btn-sm btn-outline" href={links[0].url} target="_blank" rel="noreferrer"><p>Live Site</p></a>
            </div>
        </motion.div>
    );
};

export default Project;
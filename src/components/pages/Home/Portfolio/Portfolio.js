import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import Project from './Project';
import ProjectDetailModal from './ProjectDetailModal';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState({});

    useEffect(() => {
        fetch("jsons/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <motion.div
            id='portfolio'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="mb-32"
        >
            <div className='mb-10'>
                <p className='text-3xl mb-5'>Portfolio</p>
                <h3 className='text-5xl font-semibold'>My Projects:</h3>
            </div>
            <Swiper
                className='grid grid-cols-3'
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                autoplay={true}
                navigation
                loop
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3
                    }
                }}
            >
                {
                    projects.map((project, index) => <SwiperSlide key={index}>
                        <Project
                            index={index}
                            project={project}
                            setSelectedProject={setSelectedProject}
                        ></Project>
                    </SwiperSlide>)
                }
            </Swiper >
            <ProjectDetailModal selectedProject={selectedProject}></ProjectDetailModal>
        </motion.div>
    );
};

export default Portfolio;
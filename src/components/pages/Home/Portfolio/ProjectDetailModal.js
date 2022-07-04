import React from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const ProjectDetailModal = ({ selectedProject }) => {
    const { name, type, screenshots, description, detailedDescription, links } = selectedProject;

    if (!selectedProject || !screenshots || !links) {
        return <p className='hidden'>Loading</p>
    }

    return (
        <div>
            <input type="checkbox" id="project-details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-6xl max-h-screen relative">
                    <label htmlFor="project-details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="hero">
                        <div className="hero-content flex-col">
                            <Swiper
                                className='grid grid-cols-3'
                                modules={[Navigation, Autoplay]}
                                spaceBetween={10}
                                autoplay={true}
                                navigation
                                loop
                                slidesPerView={"1"}

                            >
                                {
                                    screenshots.map((image, index) => <SwiperSlide key={index}>
                                        <img
                                            className='mx-auto'
                                            src={image}
                                            key={index}
                                            alt=""
                                        />
                                    </SwiperSlide>)
                                }
                            </Swiper >
                            <div>
                                <h1 className="text-5xl font-semibold mb-3">{name}</h1>
                                <p className='badge badge-lg badge-outline mb-5 overflow-hidden'>A {type}</p>
                                <p className="leading-relaxed text-xl mb-5">{detailedDescription}<br></br>{description}</p>
                                {
                                    links.map((link, index) => <a
                                        key={index}
                                        className='btn btn-outline mr-5 mb-5'
                                        href={link.url} target="_blank"
                                        rel="noreferrer"
                                    >{link.title}</a>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectDetailModal;
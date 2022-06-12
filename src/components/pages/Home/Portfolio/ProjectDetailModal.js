import React from 'react';

const ProjectDetailModal = ({ selectedProject }) => {
    const { name, type, screenshots, description, detailedDescription, links } = selectedProject;

    if (!selectedProject || !screenshots || !links) {
        return <p className='hidden'>Loading</p>
    }

    return (
        <div>
            <input type="checkbox" id="project-details-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box max-w-6xl max-h-screen relative">
                    <label for="project-details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="hero">
                        <div class="hero-content flex-col">
                            <div class="carousel w-full lg:w-2/3 mx-auto mb-5">
                                <div id="slide1" class="carousel-item relative w-full">
                                    <img src={screenshots[0]} class="w-full" alt='screenshot' />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" class="btn btn-sm btn-circle opacity-70 my-auto">❮</a>
                                        <a href="#slide2" class="btn btn-sm btn-circle opacity-70 my-auto">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" class="carousel-item relative w-full">
                                    <img src={screenshots[1]} class="w-full" alt='screenshot' />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" class="btn btn-sm btn-circle opacity-70 my-auto">❮</a>
                                        <a href="#slide3" class="btn btn-sm btn-circle opacity-70 my-auto">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" class="carousel-item relative w-full">
                                    <img src={screenshots[2]} class="w-full" alt='screenshot' />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" class="btn btn-sm btn-circle opacity-70 my-auto">❮</a>
                                        <a href="#slide1" class="btn btn-sm btn-circle opacity-70 my-auto">❯</a>
                                    </div>
                                </div>
                            </div>
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
        </div>
    );
};

export default ProjectDetailModal;
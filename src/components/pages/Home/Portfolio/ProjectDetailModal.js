import React from 'react';

const ProjectDetailModal = ({ selectedProject }) => {
    const { name, type, screenshots, description, detailedDescription, links } = selectedProject;

    if (!selectedProject || !screenshots || !links) {
        return <p>Loading</p>
    }

    return (
        <div>
            <input type="checkbox" id="project-details-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box max-w-6xl max-h-screen relative">
                    <label for="project-details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="hero">
                        <div class="hero-content flex-col">
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                {
                                    screenshots.map((screenshot, index) => <div>
                                        <img
                                            key={index}
                                            src={`../${screenshot.image}`}
                                            className="w-full mx-auto rounded-lg"
                                            alt='screenshot'
                                        />
                                        <p className='mb-5 mt-1 text-center'>{`${screenshot.title}`}</p>
                                    </div>)
                                }
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
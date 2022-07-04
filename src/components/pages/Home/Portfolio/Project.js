import React from 'react';

const Project = ({ project, setSelectedProject }) => {
    const { name, type, screenshots, description, links } = project;

    return (
        <div
            className="card bg-base-100 shadow-xl h-full"
        >
            <img
                src={screenshots[0]}
                alt="Shoes"
            />
            <div className="card-body">
                <div className='mb-5'>
                    <h2 className="card-title text-3xl mb-5">{name}</h2>
                    <p className='badge h-auto badge-outline'>{type}</p>
                </div>
                <p className='leading-relaxed mb-5'>{description}</p>
                <label
                    onClick={() => setSelectedProject(project)}
                    htmlFor="project-details-modal"
                    className="btn btn-sm btn-outline"
                >Project Details</label>
                <a
                    className="btn btn-sm btn-outline"
                    href={links[0].url} target="_blank"
                    rel="noreferrer"
                >
                    <p>Live Site</p>
                </a>
            </div>
        </div >
    );
};

export default Project;
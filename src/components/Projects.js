import React, { useEffect, useState } from 'react';
import './Projects.css';
import axios from 'axios';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-server-ten-eta.vercel.app/api/v1/projects')
            .then(response => {
                setProjects(response.data.data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <div id='project' style={{ width: "80%", margin: "0 auto" }}>
            <h1 className='text-4xl text-center text-gray-300 my-10'>
                Project Showcase
            </h1>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => <Project key={project._id} project={project} />)}
                </div>
            </div>
        </div>
    );
};

export default Projects;
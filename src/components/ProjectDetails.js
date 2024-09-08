import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project details by ID
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://portfolio-server-ten-eta.vercel.app/api/v1/projects/${id}`);
        setProject(response.data.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto mt-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>

          <div className="mb-6">
            <p className="text-lg text-gray-600 mb-2"><strong>Frontend Technology:</strong> {project.frontendTechnology}</p>

            <p className="text-lg text-gray-600 mb-2"><strong>Backend Technology:</strong> {project.backendTechnology}</p>

            <p className="text-lg text-gray-700">{project.description}</p>
          </div>
          
          <div className="flex gap-4 my-10 justify-center">
            <a href={project.frontendurl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Frontend Repo
            </a>
            <a href={project.backendurl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Backend Repo
            </a>
            <a href={project.liveurl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

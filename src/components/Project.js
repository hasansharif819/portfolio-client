// import React from 'react'

// const Project = ({project}) => {
//   return (
//     <div
//         className="bg-accent text-gray-300 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 relative"
//     >
//         <a
//             href={project?.liveurl}
//             target="_blank"
//             rel="noreferrer"
//         >
//             <figure className="relative">
//                 <img
//                     src={project?.image}
//                     alt="Project"
//                     className="w-full h-60 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
//                 <figcaption className="absolute bottom-4 left-4 text-xl font-semibold text-white">
//                     <span className="title-shadow">{project?.title}</span>
//                 </figcaption>
//             </figure>
//         </a>
        
//         <div className="p-4">
//         <div className="text-sm text-gray-400 mb-4">
//                 <span className='font-bold'>Frontend Technology:</span> {project?.frontendTechnology}
//             </div>
//             <div className="text-sm text-gray-400 mb-4">
//             <span className='font-bold'>Backend Technology:</span> {project?.backendTechnology}
//             </div>
//             <p className='text-sm text-gray-400 mb-16'>
//             Description: {project?.description}
//             </p>
//             <div className="absolute left-0 right-0 flex space-x-2 justify-between bottom-4 mt-10 px-4">
//                 <a
//                     href={project?.liveurl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-sm btn-primary"
//                 >
//                     Live Site
//                 </a>
//                 {/* <a
//                     href={project?.backendurl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-sm btn-secondary"
//                 >
//                     Backend
//                 </a>
//                 <a
//                     href={project?.frontendurl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-sm btn-tomato"
//                 >
//                     Frontend
//                 </a> */}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Project;



import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  const truncateDescription = (text, wordLimit) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <div
      className="bg-accent text-gray-300 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 relative h-[500px]"
    >
      <a href={project?.liveurl} target="_blank" rel="noreferrer">
        <figure className="relative">
          <img src={project?.image} alt="Project" className="w-full h-60 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <figcaption className="absolute bottom-4 left-4 text-xl font-semibold text-white">
            <span className="title-shadow">{project?.title}</span>
          </figcaption>
        </figure>
      </a>

      <div className="p-4">
        <div className="text-sm text-gray-400 mb-4">
          <span className="font-bold">Frontend Technology:</span> {project?.frontendTechnology}
        </div>
        <div className="text-sm text-gray-400 mb-4">
          <span className="font-bold">Backend Technology:</span> {project?.backendTechnology}
        </div>
        <p className="text-sm text-gray-400 mb-16">
          Description: {truncateDescription(project?.description, 50)}
        </p>
        <div className="absolute left-0 right-0 flex space-x-2 justify-between bottom-4 mt-10 px-4">
          <a
            href={project?.liveurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Live Site
          </a>
          <Link to={`/project/${project?._id}`} className="btn btn-sm btn-secondary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;

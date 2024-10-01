import React, { useEffect, useState } from "react";
import axios from 'axios';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('https://portfolio-server-ten-eta.vercel.app/api/v1/experience')
      .then(response => {
        setExperiences(response.data.data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch experience:', error);
      });
  }, []);

  return (
    <div id="experience" className="w-full flex justify-center my-10">
      <div className="w-[80%] max-w-3xl">
        <h1 className='title text-4xl text-center text-gray-300 mb-5'>
          Professional Experience
        </h1>
        <div className='flex justify-center'>
          <div className="relative py-10 w-full">
            <div className="absolute border-l-4 border-green-400 h-full top-0 left-0"></div>
            <ul className="list-none relative">
              {experiences.map((experience) => (
                <li key={experience._id} className="flex items-center mb-5 relative p-5">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full absolute left-0 transform -translate-x-1/2"></div>
                  <div className="ml-4 flex flex-col items-start">
                    <div className="flex items-center my-2">
                      <h3 className="text-white text-2xl font-semibold mr-2">{experience.title}</h3>
                    </div>
                    <div className="text-white flex gap-10 justify-between items-center w-full mb-2"> <p className="text-lg text-white font-medium">@ {experience.companyName}</p>
                    <p className="text-green-400 text-sm">{experience.joining} - {experience.ending}</p>
                    </div>
                    <p className="text-white">{experience?.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;


import React, { useEffect, useState } from "react";
import axios from 'axios';
import Experience from "./Experience";


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
    <div id="experience" className="w-[87%] mx-auto">
            <h1 className='title text-4xl text-center text-gray-300 my-10'>
            Professional Experience
            </h1>
            <div className='max-w-4xl mx-auto'>
                {experiences?.map((experience) => <Experience key={experience._id} experience={experience} />)}
            </div>
        </div>
  )
}

export default Experiences;
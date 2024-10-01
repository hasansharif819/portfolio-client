import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Project from './Project';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-server-ten-eta.vercel.app/api/v1/projects')
            .then(response => {
                setProjects(response.data.data);
            })
            .catch(error => {
                console.error('There was a problem with fetching projects:', error);
            });
    }, []);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div id="project" className="w-[87%] mx-auto">
            <h1 className='title text-4xl text-center text-gray-300 my-10'>
                Project Showcase
            </h1>
            <div className='w-11/12 mx-auto'>
                <Slider {...settings}>
                    {projects.map((project) => (
                        <div key={project._id} className="px-4 h-full">
                            <Project project={project} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;

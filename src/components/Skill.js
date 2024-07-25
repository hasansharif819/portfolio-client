import React from 'react';
import { FaTools, FaWrench } from 'react-icons/fa';
import './Skill.css';

const Skill = () => {
    return (
        <div className='w-full mx-auto flex flex-col md:flex-row gap-5' id='skill'>
            <div className="card w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div className="card-body text-white p-5 text-center">
                    <div className="flex items-center justify-center">
                        <FaWrench className="text-4xl mr-3" />
                        <h2 className="card-title text-2xl font-semibold">Other</h2>
                    </div>
                    <p className='text-lg'>
                        Firebase, Heroku, DaisyUI, React Router, React Hook form, React Query,
                        Material UI, stripe.js, React-Toastify
                    </p>
                </div>
            </div>
            <div className="card w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div className="card-body text-white p-5 text-center">
                    <div className="flex items-center justify-center mb-3">
                        <FaTools className="text-4xl mr-3" />
                        <h2 className="card-title text-2xl font-semibold">Tools</h2>
                    </div>
                    <p className='text-lg'>
                        VS Code, Chrome Dev-tool, Github, Figma, Jira
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skill;

// import React from 'react';

// const Experience = () => {
//   return (
//     <section className="bg-black py-12" id='experience'>
//       <div className="max-w-4xl mx-auto px-6 lg:px-8">
//         <h2 className="title text-3xl font-bold text-center text-primary mb-8">Professional
//         Experience</h2>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="text-2xl font-semibold text-gray-800">Software Engineer</h3>
//           <p className="text-gray-600 mb-4">Idlewild Digital, Triplo LLC</p>
//           <p className="text-gray-500 italic mb-6">December 2022 - Present</p>
//           <ul className="list-disc list-inside space-y-2 text-gray-700">
//             <li><span className="font-bold">Project Development:</span> Development of various web applications, improving client engagement and user experience.</li>
//             <li><span className="font-bold">Technology Stack:</span> Utilized modern technologies including React, Node.js, and MongoDB to create scalable and efficient solutions.</li>
//             <li><span className="font-bold">Collaboration:</span> Worked closely with cross-functional teams including designers, product managers, and other developers to deliver high-quality products on time.</li>
//             <li><span className="font-bold">Code Quality:</span> Implemented best practices in coding, code reviews, and testing to maintain high standards and improve codebase maintainability.</li>
//             <li><span className="font-bold">Problem Solving:</span> Identified and resolved performance issues, ensuring smooth and efficient operation of web applications.</li>
//             <li><span className="font-bold">Continuous Learning:</span> Stayed updated with the latest industry trends and technologies to continuously improve skills and contribute to team knowledge sharing sessions.</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { FaLocationDot } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";




const Experience = ( {experience} ) => {

  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };


  return (
    <>
      <div className="bg-accent shadow-lg rounded-lg p-2 mb-4">
        <div className="mb-0" id="headingOne">
          <button
            className={`${
              activeElement === "element1" &&
              `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-accent px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element1")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <div className="flex justify-between items-center w-[100%]">
              <h1 className="text-xl font-semibold">{experience?.title}  <span className="mx-2">@</span>  {experience?.companyName}</h1>
              <h1 className="mr-10 text-xl font-semibold">{experience?.joining}  <span className="mx-2">-</span>  {experience?.ending}</h1>
            </div>
            <span
              className={`${
                activeElement === "element1"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529]  dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </div>
        <TECollapse
          show={activeElement === "element1"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-5 py-4 text-white">
            <div className="flex justify-between w-[100%] mb-3 experience-link">
              <span className="flex items-center"><FaLocationDot className="text-2xl mr-2"/>
              {experience?.address}</span> 
              <span className="flex items-center"><FaExternalLinkSquareAlt className="text-xl mr-2"/>
              {experience?.website}</span>
            </div>
            <p>{experience?.description}</p>
          </div>
        </TECollapse>
      </div>
    </>
  );
}


export default Experience;
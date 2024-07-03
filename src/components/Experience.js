import React from 'react';

const Experience = () => {
  return (
    <section className="bg-black py-12" id='experience'>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Experience</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Software Engineer</h3>
          <p className="text-gray-600 mb-4">Idlewild Digital, Triplo LLC</p>
          <p className="text-gray-500 italic mb-6">December 2022 - Present</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-bold">Project Development:</span> Development of various web applications, improving client engagement and user experience.</li>
            <li><span className="font-bold">Technology Stack:</span> Utilized modern technologies including React, Node.js, and MongoDB to create scalable and efficient solutions.</li>
            <li><span className="font-bold">Collaboration:</span> Worked closely with cross-functional teams including designers, product managers, and other developers to deliver high-quality products on time.</li>
            <li><span className="font-bold">Code Quality:</span> Implemented best practices in coding, code reviews, and testing to maintain high standards and improve codebase maintainability.</li>
            <li><span className="font-bold">Problem Solving:</span> Identified and resolved performance issues, ensuring smooth and efficient operation of web applications.</li>
            <li><span className="font-bold">Continuous Learning:</span> Stayed updated with the latest industry trends and technologies to continuously improve skills and contribute to team knowledge sharing sessions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

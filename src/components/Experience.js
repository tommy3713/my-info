// src/components/Experience.js

import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TSMC Experience Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/tsmc.JPG`}
                alt="TSMC Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                TSMC - Taiwan
              </h3>
            </div>
            <p className="italic text-gray-600 mb-4">
              Software Engineer, Frontend Specialty (July 2023 - Present)
            </p>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>Developed a web-based tools</li>
              <li>React Instructor</li>
              <li>Class Leader of 25.01</li>
            </ul>
          </div>

          {/* PressLogic Experience Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/presslogic.JPG`}
                alt="PressLogic Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                PressLogic - Taiwan
              </h3>
            </div>
            <p className="italic text-gray-600 mb-4">
              Frontend Engineer Intern (Sep 2021 - Dec 2021)
            </p>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>
                Constructed a promotional static website using Vue.js,
                collaborating with UI and QA teams.
              </li>
              <li>
                <a
                  href="https://medialens.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Visit MediaLens.io
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

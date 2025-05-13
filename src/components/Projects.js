// src/components/Projects.js

import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Podcast Content Search
            </h3>
            <p className="text-gray-600 mb-4">
              Developed a website that enables users to search podcast episodes
              using keywords or sentences.
            </p>
            <a
              href="https://github.com/tommy3713/podcast-search"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Flexbox Layout for Image and Text */}
        <div className="flex items-center justify-between space-x-8">
          {/* Left Image */}
          <div className="flex-shrink-0 w-1/3 sm:w-1/4">
            <img
              src={`${process.env.PUBLIC_URL}/images/IMG_9729.JPG`}
              alt="Hao-Tang Li and companion wearing traditional kimono"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Text */}
          <div className="w-1/2 sm:w-2/3 text-lg text-gray-700">
            {/* Name Section */}
            <div className="mb-8 text-center">
              <h1 className="text-6xl font-extrabold text-gray-800 mb-2">
                Hao-Tang Li
              </h1>
              <h2 className="text-4xl font-semibold text-gray-600">李昊唐</h2>
            </div>
            <p className="mb-6">
              Hi, I'm Hao-Tang Li, a software engineer with a passion for
              frontend development. I specialize in React, TypeScript, and
              modern UI frameworks like Ant Design and Tailwind CSS. I have
              experience working with cross-functional teams to deliver
              high-performance web applications.
            </p>
            <p>
              I focus on building accessible, responsive, and user-friendly
              interfaces while collaborating with teams to integrate solutions
              that scale and perform well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

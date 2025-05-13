// src/components/Education.js

import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-12">
          Education
        </h3>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/usc.png`}
                alt="School Logo"
                className="w-16 h-16 object-contain mr-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                University of Southern California, Viterbi School of Engineering
              </h4>
            </div>
            <p className="text-gray-600">
              Master of Science, Computer Science (Jan 2022 - May 2023), GPA:
              3.92/4.0
            </p>
          </div>

          {/* Education 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/ncku.jpeg`} // Replace with your logo path
                alt="Another School Logo"
                className="w-16 h-16 object-contain mr-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                National Cheng Kung University, Taiwan
              </h4>
            </div>
            <p className="text-gray-600">
              Bachelor of Science, Engineering Science (Sep 2016 - Jan 2021)
            </p>
          </div>

          {/* Education 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/put.png`} // Replace with your logo path
                alt="Poznan University Logo"
                className="w-16 h-16 object-contain mr-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Poznan University of Technology, Poland
              </h4>
            </div>
            <p className="text-gray-600">
              Exchange Student Program, Electronics and Telecommunications (Sep
              2019 - Jan 2020)
            </p>
          </div>

          {/* Education 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/sjtu.png`} // Replace with your logo path
                alt="Shanghai Jiao Tong University Logo"
                className="w-16 h-16 object-contain mr-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Shanghai Jiao Tong University, China
              </h4>
            </div>
            <p className="text-gray-600">
              Summer School Exchange Student Program (July 2019)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

// src/components/Hobbies.js

import React from 'react';

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Things I Enjoy
        </h2>

        {/* Hobbies Section with Flexbox Layout */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
          {/* Hand Brewed Coffee */}
          <div className="flex items-center space-x-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                咖啡拉花
              </h3>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/coffee.JPG`}
              alt="Hand-brewed Coffee"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
          </div>

          {/* Baseball */}
          <div className="flex items-center space-x-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                看棒球
              </h3>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/la-dogers.JPG`}
              alt="Watching Baseball"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/fubon-angles.jpg`}
              alt="Watching Baseball"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
          </div>

          {/* Netflix Shows */}
          <div className="flex items-center space-x-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Netflix
              </h3>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/dadadan.JPG`}
              alt="Watching Netflix"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/brooklyn99.JPG`}
              alt="Watching Netflix"
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

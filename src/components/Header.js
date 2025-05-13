import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hao-Tang Li</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#hobbies">Hobbies</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// src/App.js

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}

export default App;

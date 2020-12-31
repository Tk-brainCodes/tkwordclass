import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/Hero';
import Develop from './Components/Development/Develop';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <div class="App">
      <Navbar />
      <Hero />
      <Develop />
      <Project />
      <Skills />
    </div>
  );
}

export default App;

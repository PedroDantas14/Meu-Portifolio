import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <SmoothScroll>
      <div style={{ backgroundColor: 'var(--bg-base)', minHeight: '100vh', position: 'relative' }}>
         <Hero />
         <About />
         <Skills />
         <Experience />
         <Projects />
         <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
